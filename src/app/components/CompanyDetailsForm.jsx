"use client";
import Image from "next/image";
import React from "react";

function CompanyDetailsForm({ formData, onInputChange, onSubmit, onBack }) {
  const companySizes = [
    "Select size",
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees"
  ];

  const cities = [
    "Select",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat"
  ];

  const states = [
    "Select",
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Telangana",
    "Tamil Nadu",
    "West Bengal",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh",
    "Haryana"
  ];

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onInputChange("logo", file);
    }
  };

  const isFormValid = () => {
    return formData.name && formData.companyName;
  };

  return (
    <div className="space-y-6">
     

      {/* Basic Details Section */}
      <div className="space-y-4">
        <h3 className="text-[20px] md:text-[20px] border-b-2 pb-4 border-[#EEEEEE] font-sarabun font-semibold text-[#001242]">
          Basic details
        </h3>

        {/* Name and Company Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => onInputChange("name", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Company phone
            </label>
            <input
              type="tel"
              placeholder="Enter phone no."
              value={formData.companyPhone}
              onChange={(e) => onInputChange("companyPhone", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>
        </div>

        {/* Company Name and Company Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={(e) => onInputChange("companyName", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Company email
            </label>
            <input
              type="email"
              placeholder="Enter mail ID"
              value={formData.companyEmail}
              onChange={(e) => onInputChange("companyEmail", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>
        </div>

        {/* Company Website and Company Size Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Company website
            </label>
            <input
              type="url"
              placeholder="Enter company website"
              value={formData.website}
              onChange={(e) => onInputChange("website", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Company size
            </label>
            <div className="relative">
              <select
                value={formData.size}
                onChange={(e) => onInputChange("size", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] appearance-none cursor-pointer"
              >
                {companySizes.map((size, index) => (
                  <option key={index} value={size} disabled={index === 0}>
                    {size}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logo Upload */}
        <div className="space-y-3">
          <h4 className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
            Upload company logo
          </h4>

          <div className="border-2 border-dashed border-[#1A98FF] rounded-lg p-6 md:p-8 text-center bg-[#DAEEFF]">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/assets/email-icon.png"
                  alt="Upload icon"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>

              <div className="space-y-2">
                <h5 className="text-[14px] md:text-[16px] font-sarabun font-semibold text-[#001242]">
                  Upload company logo
                </h5>
                <p className="text-[12px] md:text-[14px] font-sarabun font-normal text-[#6C757D]">
                  Drag and drop file here or{" "}
                  <label
                    htmlFor="logo-upload"
                    className="text-[#1A98FF] font-semibold cursor-pointer underline"
                  >
                    Choose file
                  </label>
                </p>
                <input
                  id="logo-upload"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </div>

              <div className="space-y-1 font-sarabun">
                <p className="text-[12px] md:text-[14px] text-[#4A4B4B]">
                  *Supported formats:{" "}
                  <span className="text-[#001242] font-medium">.png or .jpg</span>
                </p>
                <p className="text-[12px] md:text-[14px] text-[#4A4B4B]">
                  *Min. dimension:{" "}
                  <span className="text-[#001242] font-medium">200 x 200</span>
                </p>
              </div>
            </div>
          </div>

          {formData.logo && (
            <p className="text-[12px] md:text-[14px] font-sarabun font-medium text-[#2D7D32]">
              Logo uploaded: {formData.logo.name}
            </p>
          )}

          <p className="text-[12px] md:text-[14px] font-sarabun font-normal text-[#6C757D]">
            Logo will appear in your job post verification
          </p>
        </div>
      </div>

      {/* Office Address Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#001242]">
          Office address
        </h3>

        {/* City, State, Pincode Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              City
            </label>
            <div className="relative">
              <select
                value={formData.city}
                onChange={(e) => onInputChange("city", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] appearance-none cursor-pointer"
              >
                {cities.map((city, index) => (
                  <option key={index} value={city} disabled={index === 0}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              State
            </label>
            <div className="relative">
              <select
                value={formData.state}
                onChange={(e) => onInputChange("state", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] appearance-none cursor-pointer"
              >
                {states.map((state, index) => (
                  <option key={index} value={state} disabled={index === 0}>
                    {state}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242]">
              Pincode
            </label>
            <input
              type="text"
              placeholder="Enter pincode"
              value={formData.pincode}
              onChange={(e) => onInputChange("pincode", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[50px]"></div>

      {/* Bottom Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#4A4B4B] font-sarabun text-[14px] md:text-[16px] font-semibold hover:underline order-2 sm:order-1"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!isFormValid()}
          className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[14px] md:text-[16px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed order-1 sm:order-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CompanyDetailsForm;