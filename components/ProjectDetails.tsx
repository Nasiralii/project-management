// ProjectDetailsFormInputs.jsx
import React from "react";
import { useFormContext } from "react-hook-form";
interface ProjectDetailsFormInputsProps {
  register: any; // Adjust type as per your useForm<FormValues> type
  errors: any; // Adjust type as per your useForm<FormValues> type
}
const ProjectDetailsFormInputs: React.FC<ProjectDetailsFormInputsProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        {/* Project Installer Name Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("ProjectInstallerName", {
                required: "Project Installer Name is required",
              })}
              type="text"
              id="floating_outlined_project_installer_name"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_project_installer_name"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Project Installer Name
            </label>
          </div>
          {errors.ProjectInstallerName && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.ProjectInstallerName.message}
            </span>
          )}
        </div>

        {/* Project Contact Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("ProjectContact", {
                required: "Project Contact is required",
              })}
              type="text"
              id="floating_outlined_project_contact"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_project_contact"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Project Contact
            </label>
          </div>
          {errors.ProjectContact && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.ProjectContact.message}
            </span>
          )}
        </div>

        {/* Project Total Payment Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("ProjectTotalPayment", {
                required: "Project Total Payment is required",
              })}
              type="text"
              id="floating_outlined_project_total_payment"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_project_total_payment"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Project Total Payment
            </label>
          </div>
          {errors.ProjectTotalPayment && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.ProjectTotalPayment.message}
            </span>
          )}
        </div>

        {/* Project Transfer Payment Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("ProjectTransferPayment", {
                required: "Project Transfer Payment is required",
              })}
              type="text"
              id="floating_outlined_project_transfer_payment"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_project_transfer_payment"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Project Transfer Payment
            </label>
          </div>
          {errors.ProjectTransferPayment && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.ProjectTransferPayment.message}
            </span>
          )}
        </div>

        {/* Lead Gen Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("leadGen", {
                required: "Lead Gen is required",
              })}
              type="text"
              id="floating_outlined_lead_gen"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_lead_gen"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Lead Gen
            </label>
          </div>
          {errors.leadGen && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.leadGen.message}
            </span>
          )}
        </div>

        {/* Complaints Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("complaints", {
                required: "Complaints is required",
              })}
              type="text"
              id="floating_outlined_complaints"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_complaints"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Complaints
            </label>
          </div>
          {errors.complaints && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.complaints.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsFormInputs;
