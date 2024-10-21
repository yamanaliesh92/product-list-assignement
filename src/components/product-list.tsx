import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import getAllProductsApi from "../fetcher/product/get-all-products.api";
import { Product } from "../lib/types";
import ProductCard from "./product-card";

const ProductList = () => {
  const { inView, ref } = useInView({
    triggerOnce: false,
    threshold: 1,
    initialInView: true,
  });
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      initialPageParam: 1,
      queryFn: getAllProductsApi,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (!isLoading && !data)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500">
          {" "}
          No Products available now,Please check later
        </div>
      </div>
    );

  return (
    <div>
      <div className="grid gap-6 w-full">
        {data?.pages?.map((page) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {page.products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}
      </div>

      {error && (
        <p className=" text-red-500">
          Oops something went wrong, Please contact support.
        </p>
      )}

      {/* {!hasNextPage && (
        <p className="my-2 text-gray-500 text-center">That's all!</p>
      )} */}

      {hasNextPage && (
        <p className="my-2 text-gray-500 text-center" ref={ref}>
          Fetching more data
        </p>
      )}
    </div>
  );
};

export default ProductList;
