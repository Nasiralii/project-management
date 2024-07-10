import AddressFormInputs from "@/components/AddressInput";
import ProjectDetailsFormInputs from "@/components/ProjectDetails";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  address: string;
  contact: number;
  postCode: number;
  startDate: string;
  endDate: string;
  installerName: string;
  installerContact: number;
  companyName: string;
  area: number;
  areaUnit: string;
  totalPayment: number;
  paymentTransfer: string;
  remedies: string;
  remediesDetails: string;
  roofExtension: string;
  pre: string;
  payment: string;
  loftname: string;
  rate: string;
  fanInstaller: string;
  fanDate: string;
  fanDescription: string;
  ehDate: string;
  ehDescription: string;
  ehLocation: string;
  ehInstaller: string;
  boarding: boolean;
  boardingStartDate: string;
  boardingEndDate: string;
  boardingInstaller: string;
  boardingRate: number;
  boardingPayment: string;
  skimming: boolean;
  skimmingStartDate: string;
  skimmingEndDate: string;
  skimmingInstaller: string;
  skimmingRate: number;
  skimmingPayment: string;
  paint: boolean;
  paintStartDate: string;
  paintEndDate: string;
  paintInstaller: string;
  paintRate: number;
  paintPayment: string;
  ProjectInstallerName: string;
  ProjectContact: string;
  ProjectTotalPayment: string;
  ProjectTransferPayment: string;
  leadGen: string;
  complaints: string;
};

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<FormValues>();

  const startDateValue = watch("startDate");
  const areaUnitValue = watch("areaUnit");
  const remediesValue = watch("remedies");

  const watchBoarding = watch("boarding", false);
  const watchSkimming = watch("skimming", false);
  const watchPaint = watch("paint", false);
  const [activeTab, setActiveTab] = useState("address");
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedUnits([...selectedUnits, value]);
    } else {
      setSelectedUnits(selectedUnits.filter((unit) => unit !== value));
    }
  };
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Redirect to another page after successful form submission if needed
  };

  return (
    <div className="bg-white justify-center overflow-hidden">
      <div className="w-full md:p-8 p-2 rounded-lg">
        <div>
          <h2 className="black-500 text-[32px] py-6 flex font-semibold text-center">
            Details
          </h2>
          <div className="flex mb-4">
            <button
              className={`flex-1 p-4 ${
                activeTab === "address"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("address")}
            >
              Address
            </button>
            <button
              className={`flex-1 p-4 ${
                activeTab === "measurement"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("measurement")}
            >
              Measurement
            </button>
            <button
              className={`flex-1 p-4 ${
                activeTab === "projectDetails"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("projectDetails")}
            >
              Project Details
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {activeTab === "address" && (
              <>
                {/* <div className="grid grid-cols-2 gap-5">
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
                  {/* <div className="text-3xl w-full mb-4">
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
                  {/* <div className="text-3xl w-full mb-4">
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
                  </div> */}
                  {/* <div className="text-3xl w-full mb-4">
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
                        htmlFor="floating_outlined_name"
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
                  </div> */}
                {/* </div>  */}
                <AddressFormInputs register={register} errors={errors}/>
              </>
            )}
            {activeTab === "measurement" && (
              <>
                <p className="pb-4 font-bold">Measurement</p>
                <div className="grid grid-cols-2 gap-8">
                  {/* Area Input */}
                  <div className="text-3xl w-full mb-4">
                    <div className="relative">
                      <input
                        {...register("area", {
                          required: "Area is required",
                          min: {
                            value: 0,
                            message: "Area must be a positive number",
                          },
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "Area must be a number",
                          },
                        })}
                        type="text"
                        id="floating_outlined_land_measurement"
                        className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_outlined_land_measurement"
                        className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Area
                      </label>
                    </div>
                    {errors.area && (
                      <span className="text-red-500 relative -top-4 font-thin text-xs">
                        {errors.area.message}
                      </span>
                    )}
                  </div>
                  {/* Area Unit Select */}
                  <div className="text-3xl w-full mb-4">
                    <div className="flex flex-row justify-between p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="ewi"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        EWI
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="iwi"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        IWI
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="rir"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        RIR
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="loft"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        LOFT
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="loft+extension"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        LOFT+EXTENSION
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="tv"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        TV+ FAN
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="checkbox"
                          className="w-6 h-5"
                          value="EH"
                          {...register("areaUnit", {
                            required: "Area Unit is required",
                          })}
                          onChange={handleCheckboxChange}
                        />
                        E.H
                      </div>
                    </div>
                    {errors.areaUnit && (
                      <span className="text-red-500 relative -top-4 font-thin text-xs">
                        {errors.areaUnit.message}
                      </span>
                    )}
                    {errors.areaUnit && (
                      <span className="text-red-500 relative -top-4 font-thin text-xs">
                        {errors.areaUnit.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="details">
                  {(selectedUnits.includes("ewi") ||
                    selectedUnits.includes("iwi")) && (
                    <>
                      <p className="pb-4 font-bold py-4">
                        Details for EWI & IWI
                      </p>
                      <div className="grid grid-cols-2 gap-8">
                        {/* Start Date Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("startDate", {
                                required: "Start Date is required",
                              })}
                              type="date"
                              id="floating_outlined_start_date"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_start_date"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Start Date
                            </label>
                          </div>
                          {errors.startDate && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.startDate.message}
                            </span>
                          )}
                        </div>
                        {/* End Date Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("endDate", {
                                required: "End Date is required",
                              })}
                              type="date"
                              id="floating_outlined_end_date"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_end_date"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              End Date
                            </label>
                          </div>
                          {errors.endDate && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.endDate.message}
                            </span>
                          )}
                        </div>
                        {/* Installer Name Input */}

                        {/* Total Payment Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("totalPayment", {
                                required: "Total Payment is required",
                              })}
                              type="number"
                              id="floating_outlined_total_payment"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_total_payment"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Total Payment
                            </label>
                          </div>
                          {errors.totalPayment && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.totalPayment.message}
                            </span>
                          )}
                        </div>
                        {/* Payment Transfer Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("paymentTransfer", {
                                required: "Payment Transfer is required",
                              })}
                              type="text"
                              id="floating_outlined_payment_transfer"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_payment_transfer"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Payment Transfer
                            </label>
                          </div>
                          {errors.paymentTransfer && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.paymentTransfer.message}
                            </span>
                          )}
                        </div>

                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("roofExtension", {
                                required: "Roof Extension is required",
                              })}
                              type="text"
                              id="floating_outlined_roof_extension"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_roof_extension"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Roof Extension
                            </label>
                          </div>
                          {errors.roofExtension && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.roofExtension.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {selectedUnits.includes("rir") && (
                    <div>
                      <p className="font-bold py-3">Details for RIR</p>
                      <div className="flex flex-row items-center gap-6">
                        <div>
                          <label className="flex flex-row items-center">
                            <input
                              type="checkbox"
                              value="boarding"
                              className="w-6 h-5"
                              {...register("boarding")}
                            />
                            Boarding
                          </label>
                        </div>
                        <div>
                          <label className="flex flex-row items-center">
                            <input
                              type="checkbox"
                              className="w-6 h-5"
                              value="skimming"
                              {...register("skimming")}
                            />
                            Skimming
                          </label>
                        </div>
                        <div>
                          <label className="flex flex-row items-center">
                            <input
                              type="checkbox"
                              className="w-6 h-5"
                              value="paint"
                              {...register("paint")}
                            />
                            Paint
                          </label>
                        </div>
                      </div>

                      {watchBoarding && (
                        <div>
                          <h4 className="font-bold py-4">Boarding Details</h4>
                          <div className="grid grid-cols-2 gap-8">
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("boardingStartDate")}
                                  type="date"
                                  id="floating_outlined_boarding_start_date"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_boarding_start_date"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Start Date
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("boardingEndDate")}
                                  type="date"
                                  id="floating_outlined_boarding_end_date"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_boarding_end_date"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  End Date
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("boardingInstaller")}
                                  type="text"
                                  id="floating_outlined_boarding_installer"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_boarding_installer"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Installer Name
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("boardingRate")}
                                  type="number"
                                  id="floating_outlined_boarding_rate"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_boarding_rate"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Rate
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl w-full mb-4">
                            <div className="relative">
                              <input
                                {...register("boardingPayment")}
                                type="text"
                                id="floating_outlined_boarding_payment"
                                className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "
                              />
                              <label
                                htmlFor="floating_outlined_boarding_payment"
                                className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                              >
                                Payment Transfer
                              </label>
                            </div>
                          </div>
                        </div>
                      )}

                      {watchSkimming && (
                        <div>
                          <h4 className="font-bold py-4">Skimming Details</h4>
                          <div className="grid grid-cols-2 gap-8">
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("skimmingStartDate")}
                                  type="date"
                                  id="floating_outlined_skimming_start_date"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_skimming_start_date"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Start Date
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("skimmingEndDate")}
                                  type="date"
                                  id="floating_outlined_skimming_end_date"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_skimming_end_date"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  End Date
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("skimmingInstaller")}
                                  type="text"
                                  id="floating_outlined_skimming_installer"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_skimming_installer"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Installer Name
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("skimmingRate")}
                                  type="number"
                                  id="floating_outlined_skimming_rate"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_skimming_rate"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Rate
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl w-full mb-4">
                            <div className="relative">
                              <input
                                {...register("skimmingPayment")}
                                type="text"
                                id="floating_outlined_skimming_payment"
                                className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "
                              />
                              <label
                                htmlFor="floating_outlined_skimming_payment"
                                className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                              >
                                Payment Transfer
                              </label>
                            </div>
                          </div>
                        </div>
                      )}

                      {watchPaint && (
                        <div>
                          <h4 className="font-bold py-4">Paint Details</h4>
                          <div className="grid grid-cols-2 gap-8">
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("paintStartDate")}
                                  type="date"
                                  id="floating_outlined_paint_start_date"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_paint_start_date"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Start Date
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("paintEndDate")}
                                  type="date"
                                  id="floating_outlined_paint_end_date"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_paint_end_date"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  End Date
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("paintInstaller")}
                                  type="text"
                                  id="floating_outlined_paint_installer"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_paint_installer"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Installer Name
                                </label>
                              </div>
                            </div>
                            <div className="text-3xl w-full mb-4">
                              <div className="relative">
                                <input
                                  {...register("paintRate")}
                                  type="number"
                                  id="floating_outlined_paint_rate"
                                  className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="floating_outlined_paint_rate"
                                  className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                >
                                  Rate
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl w-full mb-4">
                            <div className="relative">
                              <input
                                {...register("paintPayment")}
                                type="text"
                                id="floating_outlined_paint_payment"
                                className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "
                              />
                              <label
                                htmlFor="floating_outlined_paint_payment"
                                className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                              >
                                Payment Transfer
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {(selectedUnits.includes("loft") ||
                    selectedUnits.includes("loft+extension")) && (
                    <>
                      <p className="font-bold py-3">
                        Details for LOFT & LOFT+EXTENSION
                      </p>
                      <div className="grid grid-cols-2 gap-8">
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

                        {/* Rate Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("rate", {
                                required: "Rate is required",
                              })}
                              type="number"
                              id="floating_outlined_rate"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_rate"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Rate
                            </label>
                          </div>
                          {errors.rate && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.rate.message}
                            </span>
                          )}
                        </div>

                        {/* Payment Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("payment", {
                                required: "Payment is required",
                              })}
                              type="number"
                              id="floating_outlined_payment"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_payment"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Payment
                            </label>
                          </div>
                          {errors.payment && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.payment.message}
                            </span>
                          )}
                        </div>

                        {/* Pre Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("pre", {
                                required: "Pre is required",
                              })}
                              type="text"
                              id="floating_outlined_pre"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_pre"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Pre
                            </label>
                          </div>
                          {errors.pre && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.pre.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {selectedUnits.includes("tv") && (
                    <>
                      <p className="font-bold py-4">Details for TV+ FAN</p>
                      <div className="grid grid-cols-2 gap-8">
                        {/* Fan Installer Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("fanInstaller", {
                                required: "Fan Installer is required",
                              })}
                              type="text"
                              id="floating_outlined_fanInstaller"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_fanInstaller"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Installer
                            </label>
                          </div>
                          {errors.fanInstaller && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.fanInstaller.message}
                            </span>
                          )}
                        </div>

                        {/* Fan Date Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("fanDate", {
                                required: "Fan Date is required",
                              })}
                              type="date"
                              id="floating_outlined_fanDate"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_fanDate"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Date
                            </label>
                          </div>
                          {errors.fanDate && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.fanDate.message}
                            </span>
                          )}
                        </div>

                        {/* Fan Description Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("fanDescription", {
                                required: "Fan Description is required",
                              })}
                              type="text"
                              id="floating_outlined_fanDescription"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_fanDescription"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Description
                            </label>
                          </div>
                          {errors.fanDescription && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.fanDescription.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {selectedUnits.includes("EH") && (
                    <>
                      <p className="font-bold py-4">Detail for E.H</p>
                      <div className="grid grid-cols-2 gap-8">
                        {/* EH Date Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("ehDate", {
                                required: "EH Date is required",
                              })}
                              type="date"
                              id="floating_outlined_ehDate"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_ehDate"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Date
                            </label>
                          </div>
                          {errors.ehDate && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.ehDate.message}
                            </span>
                          )}
                        </div>

                        {/* EH Description Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("ehDescription", {
                                required: "EH Description is required",
                              })}
                              type="text"
                              id="floating_outlined_ehDescription"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_ehDescription"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Description
                            </label>
                          </div>
                          {errors.ehDescription && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.ehDescription.message}
                            </span>
                          )}
                        </div>

                        {/* EH Location Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("ehLocation", {
                                required: "EH Location is required",
                              })}
                              type="text"
                              id="floating_outlined_ehLocation"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_ehLocation"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Location
                            </label>
                          </div>
                          {errors.ehLocation && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.ehLocation.message}
                            </span>
                          )}
                        </div>

                        {/* EH Installer Input */}
                        <div className="text-3xl w-full mb-4">
                          <div className="relative">
                            <input
                              {...register("ehInstaller", {
                                required: "EH Installer is required",
                              })}
                              type="text"
                              id="floating_outlined_ehInstaller"
                              className="block p-5 w-full border text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                              placeholder=" "
                            />
                            <label
                              htmlFor="floating_outlined_ehInstaller"
                              className="absolute font-normal text-sm mx-2 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus: peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Installer
                            </label>
                          </div>
                          {errors.ehInstaller && (
                            <span className="text-red-500 relative -top-4 font-thin text-xs">
                              {errors.ehInstaller.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
            {activeTab === "projectDetails" && (
              <>
              {/* <div className="grid grid-cols-2 gap-8">
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
              </div>

               <div className="grid grid-cols-2 gap-8">
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
               </div>

             <div className="grid grid-cols-2 gap-8">
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
             </div> */}
             <ProjectDetailsFormInputs register={register} errors={errors}/>
              </>
            )}

            <div className="py-6 text-center">
              <button
                type="submit"
                className="px-5 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
