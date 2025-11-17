import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataSchema, DataSchema } from "../validators/data-schema";
import { toast, ToastContainer } from "react-toastify";
import { UserDataType } from "../data";

interface ModalProps {
  data: UserDataType | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditForms = ({ data, isOpen, onClose }: ModalProps) => {
  const methods = useForm<DataSchema>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      company: "",
      branch: "",
    }, // You might want to populate this dynamically
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: DataSchema) => {
    console.log("Form Data:", data);
    toast.success("success");
    setTimeout(() => {
      onClose();
    }, 5000);
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              {...register("name")}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Email:</strong>
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              {...register("email")}
              placeholder="Enter email"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              {...register("phone")}
              placeholder="Enter phone"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Role:</strong>
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              {...register("role")}
              placeholder="Enter role"
            />
            {errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Company:</strong>
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              {...register("company")}
              placeholder="Enter company"
            />
            {errors.company && (
              <p className="text-red-500">{errors.company.message}</p>
            )}
          </div>

          <div>
            <p>
              <strong>Branch:</strong>
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              {...register("branch")}
              placeholder="Enter branch"
            />
            {errors.branch && (
              <p className="text-red-500">{errors.branch.message}</p>
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
export default EditForms;
