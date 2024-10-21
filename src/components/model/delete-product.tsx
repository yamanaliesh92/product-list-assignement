import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CustomButton from "../button";
import deleteProductApi from "../../fetcher/product/delete-prodcut.api";

interface DeleteProductModalProps {
  productId: number;
  onClose: () => void;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  productId,
  onClose,
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully");
      onClose();
    },
    onError: () => {
      toast.error("Error deleting product");
    },
  });

  const handelDelete = () => {
    mutation.mutate(productId);
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-gray-600  my-6">
          Are you sure you want to delete this product?
        </p>
        <div className="flex items-center justify-between mt-6">
          <CustomButton
            onClick={onClose}
            bgColor={"bg-gray-900"}
            width={"auto"}
          >
            Cancel
          </CustomButton>
          <CustomButton
            isLoading={mutation.isPending}
            onClick={handelDelete}
            bgColor={"bg-red-600"}
            width={"auto"}
          >
            Delete
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
