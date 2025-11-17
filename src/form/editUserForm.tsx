import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import { updateUserAPI } from "../service/user-service";
import { UsersSchema } from "../validators/user-schema";
import { useQueryClient } from "@tanstack/react-query";

interface ModalProps {
  data: any | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserEditForms = ({ data, isOpen, onClose }: ModalProps) => {
  const queryClient = useQueryClient();
  const methods = useForm<UsersSchema>({
    resolver: zodResolver(UsersSchema),

    defaultValues: data || {},
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);
  console.log("data", data);
  const onSubmit = async (formData: UsersSchema) => {
    try {
      const payload = { ...formData, is_active: true };
      console.log("Form Data:", formData);
      await updateUserAPI(payload, data.user_id);
      toast.success("User updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["QuaryUsers"] });

      onClose();
    } catch (error) {
      toast.error("Something went wrong while updating the user.");
    }
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <p>
              <strong>Name:</strong>
            </p>
            <input
              {...register("user_name")}
              placeholder="Enter name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.user_name && (
              <p className="text-red-500">{errors.user_name.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Email:</strong>
            </p>
            <input
              {...register("email")}
              placeholder="Enter email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Phone:</strong>
            </p>
            <input
              {...register("phone_number")}
              placeholder="Enter phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.phone_number && (
              <p className="text-red-500">{errors.phone_number.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Password:</strong>
            </p>
            <input
              {...register("password_hash")}
              placeholder="New password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password_hash && (
              <p className="text-red-500">{errors.password_hash.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Company:</strong>
            </p>
            <input
              {...register("company_name")}
              placeholder="Enter company"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.company_name && (
              <p className="text-red-500">{errors.company_name.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </FormProvider>
      <ToastContainer />
    </div>
  );
};

export default UserEditForms;
