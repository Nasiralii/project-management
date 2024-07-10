// AddressFormInputs.jsx
import React from "react";
interface AddressFormInputsProps {
  register: any; // Adjust type as per your useForm<FormValues> type
  errors: any; // Adjust type as per your useForm<FormValues> type
}

const AddressFormInputs: React.FC<AddressFormInputsProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {/* Name Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              id="floating_outlined_name"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_name"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
          </div>
          {errors.name && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.name.message}
            </span>
          )}
        </div>
        {/* Address Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("address", {
                required: "Address is required",
              })}
              type="text"
              id="floating_outlined_address"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_address"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Address
            </label>
          </div>
          {errors.address && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.address.message}
            </span>
          )}
        </div>
        {/* Contact Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("contact", {
                required: "Contact is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Contact must be a number",
                },
              })}
              type="text"
              id="floating_outlined_contact"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_contact"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Contact
            </label>
          </div>
          {errors.contact && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.contact.message}
            </span>
          )}
        </div>
        {/* Post Code Input */}
        <div className="text-3xl w-full mb-4">
          <div className="relative">
            <input
              {...register("postCode", {
                required: "Post Code is required",
              })}
              type="text"
              id="floating_outlined_postCode"
              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_postCode"
              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Post Code
            </label>
          </div>
          {errors.postCode && (
            <span className="text-red-500 relative -top-4 font-thin text-xs">
              {errors.postCode.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressFormInputs;
