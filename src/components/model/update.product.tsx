import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaTimes } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CustomInput from "../input";
import CustomButton from "../button";
import { Product } from "../../lib/types";
import { productSchema } from "../../lib/form-validation-schema";
import updateProductApi from "../../fetcher/product/update-product.api.";

interface UpdateProductModalProps {
  product: Product;
  productId: number;
  onClose: () => void;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  product,
  productId,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: product,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Product) => updateProductApi(productId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully");
      onClose();
    },
    onError: () => {
      toast.error("Error updating product");
    },
  });
  const onSubmit = (data: Product) => {
    mutation.mutate(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-1xl font-bold  text-primary">Update Product</h2>
          <FaTimes onClick={onClose} size={20} cursor={"pointer"} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <CustomInput error={errors.name?.message} {...register("name")} />
          </div>
          <div className="mb-4">
            <CustomInput
              error={errors.price?.message}
              {...register("price", { valueAsNumber: true })}
            />
          </div>
          <div className="mb-4">
            <textarea
              {...register("description")}
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <CustomButton
              isLoading={mutation.isPending}
              width={"auto"}
              type="submit"
            >
              Update
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
