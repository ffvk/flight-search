import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataSchema, DataSchema } from "../validators/data-schema";
import { toast, ToastContainer } from "react-toastify";
import { UserDataType } from "../data";
import { TeacherDataType } from "../data/tec";
import { TeacherdataSchema, TeacherDataSchema } from "../validators/teacherData-schema";

interface ModalProps {
    data: TeacherDataType | null;
    isOpen: boolean;
    onClose: () => void;
  }


const TeacherEditForms = ({data,isOpen,onClose}:ModalProps) => {
  const methods = useForm<TeacherDataSchema>({
    resolver: zodResolver(TeacherdataSchema),
    defaultValues: {
      name: "",
      subject: "",
      experience: "",
      email: "",
      rating: "",
     
    }, // You might want to populate this dynamically
  });
  if (!isOpen || !data) return null;

   const clickSubmit = () => {
        toast.success("edited successfully");
        setTimeout (() => {
          onClose();
        },5000);
       
      }


  const { handleSubmit, register, formState: { errors } } = methods;

  const onSubmit = (data: TeacherDataSchema) => {
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
          <p><strong>Teacher's Name:</strong></p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
            {...register("name")}
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <p><strong>Subject:</strong></p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
            {...register("subject")}
            placeholder="Enter subject"
          />
          {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
        </div>


        <div>
          <p><strong>Experience:</strong></p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
            {...register("experience")}
            placeholder="Enter experience"
          />
          {errors.experience && <p className="text-red-500">{errors.experience.message}</p>}
        </div>

        <div>
          <p><strong>Email:</strong></p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
            {...register("email")}
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <p><strong>Rating:</strong></p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
            {...register("rating")}
            placeholder="Enter rating"
          />
          {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
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
export default TeacherEditForms;