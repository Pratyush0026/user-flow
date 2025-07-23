"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactDetailsForm = ({ onContinue, onBack }) => {
  const [formData, setFormData] = useState({
    communicationPreference: "Call + Whatsapp",
    companyName: "",
    recruiterName: "",
    contactNumber: "",
    contactEmail: "",
  });

  const [expandedSections, setExpandedSections] = useState({
    communicationPreferences: true,
    otherRecruiterDetails: true,
  });

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

  const handleCommunicationPreferenceChange = (preference) => {
    setFormData((prev) => ({
      ...prev,
      communicationPreference: preference,
    }));
  };

  return (
    <>
      {/* Form Header */}
      <div className="p-3 border-b border-gray-200">
        <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
          Contact details
        </h2>
        <p className="text-[16px] font-sarabun text-[#959596] mt-1 select-none">
          Fill the form to continue
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Communication Preferences Section */}
        <div className="border border-gray-200 bg-[#F5F5F5] rounded-lg">
          <button
            onClick={() => toggleSection("communicationPreferences")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-sarabun font-medium text-[16px] text-[#959596] select-none">
              Communication preferences
            </span>
            <Image
              src="/assets/dropdown-icon.png"
              alt="Toggle"
              width={14}
              height={16}
              className={`transition-transform ${
                expandedSections.communicationPreferences ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.communicationPreferences && (
            <div className="px-3 pb-4 space-y-4">
              {/* How would you like the candidates to contact you? */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-4 select-none">
                  How would you like the candidates to contact you?
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Call + Whatsapp Option */}
                  <div
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      formData.communicationPreference === "Call + Whatsapp"
                        ? "border-[#002DA5] bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() =>
                      handleCommunicationPreferenceChange("Call + Whatsapp")
                    }
                  >
                    {/* Header with icon, title and button */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex flex-col items-start">
                        <Image
                          src="/assets/call-whatsapp-icon.png"
                          alt="Call + WhatsApp"
                          width={48}
                          height={24}
                          className="mb-2"
                        />
                        <span className="font-sarabun font-semibold text-[16px] text-[#001242] text-center">
                          Call + Whatsapp
                        </span>
                      </div>

                      {formData.communicationPreference ===
                      "Call + Whatsapp" ? (
                        <div className="bg-[#002DA5] text-white rounded-lg flex items-center justify-center gap-3 px-3 py-3 min-w-[100px] h-[45px]">
                          <Image
                            src="/assets/check-icon.png"
                            alt="Selected"
                            width={16}
                            height={16}
                          />
                          <span className="font-sarabun font-medium text-[14px]">
                            Selected
                          </span>
                        </div>
                      ) : (
                        <button className="bg-[#CCD5ED] text-[#6681C9] rounded-lg font-sarabun font-medium text-[14px] px-8 py-3 min-w-[100px] h-[45px] hover:bg-[#B8C7E8] transition-colors">
                          Select
                        </button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/check-green-icon.png"
                          alt="Check"
                          width={16}
                          height={16}
                        />
                        <span className="font-sarabun text-[14px] text-[#6B7280]">
                          Receive applicants profiles on Whatsapp
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/check-green-icon.png"
                          alt="Check"
                          width={16}
                          height={16}
                        />
                        <span className="font-sarabun text-[14px] text-[#6B7280]">
                          Receive direct calls from applicants
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/check-green-icon.png"
                          alt="Check"
                          width={16}
                          height={16}
                        />
                        <span className="font-sarabun text-[14px] text-[#6B7280]">
                          Applicants can be managed on web portal
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Whatsapp Only Option */}
                  <div
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      formData.communicationPreference === "Whatsapp only"
                        ? "border-[#002DA5] bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() =>
                      handleCommunicationPreferenceChange("Whatsapp only")
                    }
                  >
                    {/* Header with icon, title and button */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex flex-col items-start">
                        <Image
                          src="/assets/whatsapp-icon.png"
                          alt="WhatsApp"
                          width={24}
                          height={24}
                          className="mb-2"
                        />
                        <span className="font-sarabun font-semibold text-[16px] text-[#001242] text-center">
                          Whatsapp only
                        </span>
                      </div>

                      {formData.communicationPreference === "Whatsapp only" ? (
                        <div className="bg-[#002DA5] text-white rounded-lg flex items-center justify-center gap-3 px-3 py-3 min-w-[112px] h-[45px]">
                          <Image
                            src="/assets/check-icon.png"
                            alt="Selected"
                            width={16}
                            height={16}
                          />
                          <span className="font-sarabun font-medium text-[14px]">
                            Selected
                          </span>
                        </div>
                      ) : (
                        <button className="bg-[#CCD5ED] text-[#6681C9] rounded-lg font-sarabun font-medium text-[14px] px-8 py-3 min-w-[112px] h-[45px] hover:bg-[#B8C7E8] transition-colors">
                          Select
                        </button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/check-green-icon.png"
                          alt="Check"
                          width={16}
                          height={16}
                        />
                        <span className="font-sarabun text-[14px] text-[#6B7280]">
                          Receive applicants profiles on Whatsapp
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/check-green-icon.png"
                          alt="Check"
                          width={16}
                          height={16}
                        />
                        <span className="font-sarabun text-[14px] text-[#6B7280]">
                          Receive direct calls from applicants
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/cross-icon.png"
                          alt="Cross"
                          width={13}
                          height={13}
                        />
                        <span className="font-sarabun text-[14px] text-[#6B7280]">
                          Applicants can be managed on web portal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Other Recruiter Details Section */}
        <div className="border border-gray-200 bg-[#F5F5F5] rounded-lg">
          <button
            onClick={() => toggleSection("otherRecruiterDetails")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-sarabun font-medium text-[16px] text-[#959596] select-none">
              Other recruiter details
            </span>
            <Image
              src="/assets/dropdown-icon.png"
              alt="Toggle"
              width={14}
              height={16}
              className={`transition-transform ${
                expandedSections.otherRecruiterDetails ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSections.otherRecruiterDetails && (
            <div className="px-4 pb-4 space-y-4">
              {/* Company Name and HR/Recruiter Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Company name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    HR/recruiter name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter recruiter name"
                    value={formData.recruiterName}
                    onChange={(e) =>
                      handleInputChange("recruiterName", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                  />
                </div>
              </div>

              {/* Contact Number and Contact Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Contact number<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter number"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      handleInputChange("contactNumber", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                    Contact email<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      handleInputChange("contactEmail", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactDetailsForm;
