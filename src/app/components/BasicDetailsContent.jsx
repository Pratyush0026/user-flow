"use client";
import React, { useState } from "react";
import Image from "next/image";

const BasicDetailsContent = ({ onContinue }) => {
  // Form state
  const [formData, setFormData] = useState({
    jobTitle: "Company driver",
    city: "",
    locality: "",
    jobType: "Full time",
    salaryPerMonth: "",
    noOfOpenings: "",
    workingDays: "",
    workingShift: "",
    workFromHome: false,
    jobDescription: "",
  });

  const [expandedSections, setExpandedSections] = useState({
    basicJobDetails: true,
    jobDetails: true,
  });

  const [selectedBenefits, setSelectedBenefits] = useState(["Incentives"]);
  const [selectedApplicationSource, setSelectedApplicationSource] =
    useState("Within 25 KM");

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleBenefit = (benefit) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefit)
        ? prev.filter((b) => b !== benefit)
        : [...prev, benefit]
    );
  };

  const handleApplicationSourceChange = (source) => {
    setSelectedApplicationSource(source);
  };

  return (
    <>
      {/* Form Header */}
      <div className="p-3 border-b border-gray-200">
        <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
          Basic details
        </h2>
        <p className="text-[16px] font-me' font-sarabun text-[#959596] mt-1 select-none">
          Fill the form to continue
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Basic Job Details Section */}
        <div className="border border-gray-200 bg-[#F5F5F5] rounded-lg">
          <button
            onClick={() => toggleSection("basicJobDetails")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-sarabun font-medium text-[16px] text-[#959596] select-none">
              Basic job details
            </span>
            <Image
              src="/assets/dropdown-icon.png"
              alt="Toggle"
              width={14}
              height={16}
              className={`transition-transform ${
                expandedSections.basicJobDetails ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.basicJobDetails && (
            <div className="px-4 pb-4 space-y-4">
              {/* Job Title */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Job title<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    handleInputChange("jobTitle", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                />
              </div>

              {/* City and Locality */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    City<span className="text-red-500"> *</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full px-3 py-2 bg-white  border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select city</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Locality<span className="text-red-500"> *</span>
                  </label>
                  <select
                    value={formData.locality}
                    onChange={(e) =>
                      handleInputChange("locality", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white  border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select locality</option>
                    <option value="area1">Area 1</option>
                    <option value="area2">Area 2</option>
                  </select>
                </div>
              </div>

              <p className="text-[14px] font-medium font-sarabun text-[#959596] select-none">
                *More cities will be added soon
              </p>
            </div>
          )}
        </div>

        {/* Job Details Section */}
        <div className="border border-gray-200 bg-[#F5F5F5] rounded-lg">
          <button
            onClick={() => toggleSection("jobDetails")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-sarabun font-medium text-[16px] text-[#959596] select-none">
              Job details
            </span>
            <Image
              src="/assets/dropdown-icon.png"
              alt="Toggle"
              width={14}
              height={16}
              className={`transition-transform ${
                expandedSections.jobDetails ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.jobDetails && (
            <div className="px-4 pb-4 space-y-4">
              {/* Job Type */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Job type<span className="text-red-500"> *</span>
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleInputChange("jobType", "Full time")}
                    className={`px-4 py-2 h-[42px] w-[120px] rounded-lg font-sarabun text-sm font-medium ${
                      formData.jobType === "Full time"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Full time
                  </button>
                  <button
                    onClick={() => handleInputChange("jobType", "Part time")}
                    className={`px-4 py-2 h-[42px] w-[120px] rounded-lg font-sarabun text-sm font-medium ${
                      formData.jobType === "Part time"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Part time
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Salary per month
                    <span className="text-red-500 select-none"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Min. salary"
                    value={formData.salaryPerMonth}
                    onChange={(e) =>
                      handleInputChange("salaryPerMonth", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    No. of openings
                    <span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="No. of openings"
                    value={formData.noOfOpenings}
                    onChange={(e) =>
                      handleInputChange("noOfOpenings", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Working days
                    <span className="text-red-500"> *</span>
                  </label>
                  <select
                    value={formData.workingDays}
                    onChange={(e) =>
                      handleInputChange("workingDays", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select</option>
                    <option value="5">5 days</option>
                    <option value="6">6 days</option>
                    <option value="7">7 days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Working shift
                    <span className="text-red-500"> *</span>
                  </label>
                  <select
                    value={formData.workingShift}
                    onChange={(e) =>
                      handleInputChange("workingShift", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm appearance-none select-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select</option>
                    <option value="day">Day Shift</option>
                    <option value="night">Night Shift</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Salary benefits
                </label>
                <div className="flex gap-2 flex-wrap">
                  {["Incentives", "Fuel allowance", "Phone allowance"].map(
                    (benefit) => (
                      <button
                        key={benefit}
                        onClick={() => toggleBenefit(benefit)}
                        className={`px-3 py-1 h-[42px] w-[150px] rounded-full text-sm font-sarabun select-none ${
                          selectedBenefits.includes(benefit)
                            ? "bg-hamara-blue text-white"
                            : "bg-white text-[#002DA5] border-2 border-[#002DA5]  hover:bg-gray-200"
                        }`}
                      >
                        {benefit}
                        {selectedBenefits.includes(benefit) && (
                          <span className="ml-1 text-[18px]">×</span>
                        )}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-[16px] font-sarabun font-semibold text-[#001242] select-none">
                  Work from home
                </label>
                <div className="relative select-none">
                  <input
                    type="checkbox"
                    checked={formData.workFromHome}
                    onChange={(e) =>
                      handleInputChange("workFromHome", e.target.checked)
                    }
                    className="sr-only"
                  />
                  <div
                    onClick={() =>
                      handleInputChange("workFromHome", !formData.workFromHome)
                    }
                    className={`w-[39px] h-[24px] rounded-full cursor-pointer transition-colors relative p-0.5 ${
                      formData.workFromHome ? "bg-[#65C466]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform transform shadow-sm ${
                        formData.workFromHome
                          ? "translate-x-3.5"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Receive Application From */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Receive application from
                </label>
                <div className="flex gap-2 flex-wrap">
                  {["Within 25 KM", "Within 50 KM", "Anywhere"].map(
                    (source) => (
                      <button
                        key={source}
                        onClick={() => handleApplicationSourceChange(source)}
                        className={`px-4 py-2 h-[42px] rounded-lg text-sm font-sarabun font-medium select-none ${
                          selectedApplicationSource === source
                            ? "bg-[#002DA5] text-white"
                            : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                        }`}
                      >
                        {source}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Job description
                  <span className="text-red-500"> *</span>
                </label>
                <textarea
                  value={formData.jobDescription}
                  onChange={(e) =>
                    handleInputChange("jobDescription", e.target.value)
                  }
                  placeholder="Enter job description"
                  rows={4}
                  className="w-full  px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm resize-none select-none"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[14px] font-medium font-sarabun text-[#959596] select-none">
                    Minimum 50 characters
                  </span>
                  <button
                    className="flex items-center justify-center gap-2 text-sm select-none border border-[#FF9046] rounded-lg font-sarabun hover:bg-[#F5D982] transition-colors"
                    style={{
                      width: "99px",
                      height: "42px",
                      backgroundColor: "#FBE8B5",
                      padding: "12px",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#FF9046",
                    }}
                  >
                    <Image
                      src="/assets/starnew.png"
                      alt="Star"
                      width={16}
                      height={16}
                    />
                    Suggest
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BasicDetailsContent;
