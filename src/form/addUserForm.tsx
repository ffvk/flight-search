import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { createUserAPI } from "../service/user-service";
import { toast } from "react-toastify";
import { UsersSchema } from "../validators/user-schema";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  onClose: () => void;
}

const AddUserForm = ({ onClose }: Props) => {
  const queryClient = useQueryClient();
  const methods = useForm<UsersSchema>({
    resolver: zodResolver(UsersSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: UsersSchema) => {
    try {
      // 👇 Create the payload with action field added
      const payload = {
        ...data,
        action: "created", // Make sure this is added here
      };

      // 👇 Log it to the console for debugging
      console.log("🚀 Payload being sent:", JSON.stringify(payload, null, 2));

      // 👇 Call the API with the new payload
      const result = await createUserAPI(payload);
      console.log("✅ API Result:", result);

      toast.success(result.message);
      queryClient.invalidateQueries({ queryKey: ["QuaryUsers"] });
      onClose();
    } catch (error) {
      console.error("❌ Error creating product:", error);
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
              User name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("user_name")}
              placeholder="add name"
            />
            {errors.user_name && (
              <p className="text-red-500">{errors.user_name.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              phone number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add phone number"
              {...register("phone_number")}
            />
            {errors.phone_number && (
              <p className="text-red-500">{errors.phone_number.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              company
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add company"
              {...register("company_name")}
            />
            {errors.company_name && (
              <p className="text-red-500">{errors.company_name.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="add password"
              {...register("password_hash")}
            />
            {errors.password_hash && (
              <p className="text-red-500">{errors.password_hash.message}</p>
            )}
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

export default AddUserForm;
