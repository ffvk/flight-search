import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { productSchema, ProductSchema } from "../validators/product-schema";
import { createProductAPI } from "../service/product-service";

interface Props {
  onClose: () => void;
}

const AddPrdctForm = ({ onClose }: Props) => {
  const methods = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    // defaultValues:

    // You might want to populate this dynamically
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: ProductSchema) => {
    try {
      console.log("Form Data:", data);
      const result = await createProductAPI(data);
      console.log("result", result);
      toast.success(result.message);
      onClose();
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product");
    }
  };

  return (
    <div className="w-full max-w-xs">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white  rounded px-8 pt-6 pb-8 mb-4 "
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("products_name")}
              placeholder="add name"
            />
            {errors.products_name && (
              <p className="text-red-500">{errors.products_name.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add price"
              {...register("products_price", { valueAsNumber: true })}
            />
            {errors.products_price && (
              <p className="text-red-500">{errors.products_price.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add description"
              {...register("url")}
            />
            {errors.url && <p className="text-red-500">{errors.url.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className=" py-2 px-4 rounded border-2 focus:shadow-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" py-2 px-4 bg-blue-500 rounded text-white"
            >
              Add
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddPrdctForm;
