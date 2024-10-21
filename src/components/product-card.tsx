import { useState } from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { Product } from "../lib/types";
import DeleteProductModal from "./model/delete-product";
import UpdateProductModal from "./model/update.product";

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onCloseDeleteModel = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const onCloseUpdateModel = () => {
    setIsUpdateModalOpen((prev) => !prev);
  };
  return (
    <div
      key={product.id}
      className="border p-4 rounded-lg cursor-pointer shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-primary font-semibold">{product.price}</p>
      <div className="flex justify-end space-x-4 mt-4">
        <AiFillEdit
          className="text-secondary hover:text-primary transition-colors"
          size={20}
          onClick={() => setIsUpdateModalOpen((prev) => !prev)}
          cursor={"pointer"}
        />

        <AiFillDelete
          onClick={() => setIsDeleteModalOpen((prev) => !prev)}
          className="text-secondary hover:text-primary transition-colors"
          size={20}
          cursor={"pointer"}
        />
      </div>
      {isUpdateModalOpen && (
        <UpdateProductModal
          productId={product.id}
          product={product}
          onClose={onCloseUpdateModel}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteProductModal
          productId={product.id}
          onClose={onCloseDeleteModel}
        />
      )}
    </div>
  );
};

export default ProductCard;
