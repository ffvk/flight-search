import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  CreateCartItemAPI,
  fetchProductAPI,
} from "../../service/product-service";

import CartItemPage from "./cartItemPage";
import AddPrdctForm from "../../form/addPrdctForm";
import AddProductModel from "../../model/addProduct-model";
import { ProductDataType } from "../../data/productData";
import DeleteModel from "../../model/delete-model";

const ProductPage = () => {
  const queryClient = useQueryClient();
  const [addingProductId, setAddingProductId] = useState<string | null>(null);
  const [popupType, setPopupType] = useState<string | null>(null);
  const [selectedData, setSelectedData] = useState<string | null>(null);

  const closeModel = () => setPopupType(null);

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["QuaryProduct"],
    queryFn: async () => {
      try {
        const response = await fetchProductAPI();
        return response.products || [];
      } catch (error: any) {
        toast.error(error.message || "Error fetching tokenizations");
        throw error;
      }
    },
  });
  const { mutate: addToCart } = useMutation({
    mutationFn: CreateCartItemAPI,
    onMutate: (variables: any) => {
      setAddingProductId(variables.product_id);
    },
    // onSuccess: () => {
    //   toast.success("Item added to cart!");
    //   queryClient.invalidateQueries({ queryKey: ["cartItemQuery"] });
    // },
    // onError: (errors: any) => {
    //   toast.error(errors?.message || "Failed to add item to cart.");
    // },
    // onSettled: () => {
    //   setAddingProductId(null);
    // },
  });

  const openPopup = (type: any, data: any) => {
    setPopupType(type);
    setSelectedData(data);
  };
  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <button
              onClick={() => openPopup("create", [])}
              className="bg-blue-600 hover:bg-blue-700 rounded text-white p-2"
            >
              Add product
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product: any) => (
              <div
                key={product.product_id}
                className="border rounded-lg p-4 shadow-sm flex flex-col items-center text-center"
              >
                <img
                  src={product.url}
                  alt={product.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h2 className="text-lg font-semibold">
                  {product.products_name}
                </h2>
                <p className="text-gray-600 mb-2">
                  ${product?.products_price?.toFixed(2)}
                </p>
                <button
                  onClick={() =>
                    addToCart({
                      product_id: product.product_id,
                      total_price: product.price,
                      quantity: 1,
                    })
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-auto disabled:opacity-50"
                  disabled={addingProductId === product.product_id}
                >
                  {addingProductId === product.product_id
                    ? "Adding..."
                    : "Add to Cart"}
                </button>
                <button
                  className="border "
                  onClick={() => openPopup("delete", product)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {popupType == "create" && (
        <AddProductModel isOpen={true} onClose={closeModel} />
      )}
      {popupType == "delete" && (
        <DeleteModel data={selectedData} isOpen={true} onClose={closeModel} />
      )}

      <div className="w-1/2">
        <CartItemPage />
      </div>
    </div>
  );
};

export default ProductPage;
