"use client";
import React, { useState } from "react";
import CompanyDocumentVerification from "./CompanyDocumentVerification";
import CompanyDetailsForm from "./CompanyDetailsForm";
import ManageUsersSection from "./ManageUsersSection";
import Image from "next/image";

function VerifyCompanyFlow({ onBack }) {
  const [currentStep, setCurrentStep] = useState("document"); 
  const [activeTab, setActiveTab] = useState("companyDetails"); 

  const [formData, setFormData] = useState({
    // Document verification data
    documentType: "",
    documentNumber: "",
    uploadedFile: null,
    termsAccepted: false,

    // Company details data
    name: "",
    companyName: "",
    companyPhone: "",
    companyEmail: "",
    website: "",
    size: "",
    logo: null,
    city: "",
    state: "",
    pincode: "",

    // Users data
    users: [
      {
        name: "Yash Khanna",
        company: "Billions careers demo",
        role: "Admin",
        joinDate: "23/05/2025",
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDocumentSubmit = () => {
    console.log("Document verification completed:", {
      documentType: formData.documentType,
      documentNumber: formData.documentNumber,
      uploadedFile: formData.uploadedFile,
    });
    setCurrentStep("details");
  };

  const handleCompanySubmit = () => {
    console.log("Company verification completed:", formData);
    // Handle final submission
  };

  // Document verification step
  if (currentStep === "document") {
    return (
      <CompanyDocumentVerification
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleDocumentSubmit}
        onBack={onBack}
      />
    );
  }

  // Company details step with tabs
  return (
    <>
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="space-y-2">
          <h2 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#959596]">
            Verify your company
          </h2>
          <p className="text-[14px] md:text-[16px] font-sarabun font-semibold text-[#001242]">
            Please verify your company to get unlimited access to Hamara Jobs
            hiring tools
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Document Verification Status */}
        <div className="mb-6">
          <div className="bg-[#F5F5F5] rounded-[12px] p-4">
            <h3 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#001242] mb-3">
              Document verification
            </h3>
            <p className="text-[14px] font-sarabun font-normal text-[#001242] mb-3">
              Documents will be verified by the Hamara Jobs team and status will
              be updated post verification
            </p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-2 h-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[14px] font-sarabun font-medium text-green-600">
                Document uploaded successfully
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        {/* <div className="bg-[#F5F5F5] rounded-[100px]  p-2 mb-6 inline-flex gap-[13px]">
          <button
            onClick={() => setActiveTab("companyDetails")}
            className={`px-4 py-3 text-[14px] md:text-[16px] font-sarabun font-medium rounded-[100px] transition-colors ${
              activeTab === "companyDetails"
                ? "bg-[#002DA5] text-white"
                : "bg-white text-[#959596] hover:text-[#001242]"
            }`}
            style={{
              width: "180px",
              height: "62px",
              paddingTop: "12px",
              paddingRight: "16px",
              paddingBottom: "12px",
              paddingLeft: "16px",
            }}
          >
            Company details
          </button>
          <button
            onClick={() => setActiveTab("manageUsers")}
            className={`px-4 py-3 text-[14px] md:text-[16px] font-sarabun font-medium rounded-[100px] transition-colors ${
              activeTab === "manageUsers"
                ? "bg-[#002DA5] text-white"
                : "bg-white text-[#959596] hover:text-[#001242]"
            }`}
            style={{
              width: "180px",
              height: "62px",
              paddingTop: "12px",
              paddingRight: "16px",
              paddingBottom: "12px",
              paddingLeft: "16px",
            }}
          >
            Manage users
          </button>
        </div> */}

        <div className="flex items-center justify-between mb-6">
  {/* Left: Tab Navigation */}
  <div className="bg-[#F5F5F5] rounded-[100px] p-2 inline-flex gap-[13px]">
    <button
      onClick={() => setActiveTab("companyDetails")}
      className={`px-4 py-3 text-[14px] md:text-[16px] font-sarabun font-medium rounded-[100px] transition-colors ${
        activeTab === "companyDetails"
          ? "bg-[#002DA5] text-white"
          : "bg-white text-[#959596] hover:text-[#001242]"
      }`}
      style={{
        width: "180px",
        height: "62px",
        paddingTop: "12px",
        paddingRight: "16px",
        paddingBottom: "12px",
        paddingLeft: "16px",
      }}
    >
      Company details
    </button>
    <button
      onClick={() => setActiveTab("manageUsers")}
      className={`px-4 py-3 text-[14px] md:text-[16px] font-sarabun font-medium rounded-[100px] transition-colors ${
        activeTab === "manageUsers"
          ? "bg-[#002DA5] text-white"
          : "bg-white text-[#959596] hover:text-[#001242]"
      }`}
      style={{
        width: "180px",
        height: "62px",
        paddingTop: "12px",
        paddingRight: "16px",
        paddingBottom: "12px",
        paddingLeft: "16px",
      }}
    >
      Manage users
    </button>
  </div>

  {/* Right: Trusted Employer Badge */}
  <div className="bg-[#C8FFC8] p-3 rounded-[8px] flex items-center gap-2">
    <Image
      src="/assets/badge.png"
      alt="Trusted employer badge"
      width={13}
      height={16}
      className="w-[13px] h-[16px]"
    />
    <span className="text-[12px] md:text-[14px] font-sarabun font-semibold text-[#036204]">
      Trusted employer
    </span>
  </div>
</div>


        {/* Tab Content */}
        {activeTab === "companyDetails" && (
          <CompanyDetailsForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleCompanySubmit}
            onBack={() => setCurrentStep("document")}
          />
        )}

        {activeTab === "manageUsers" && (
          <ManageUsersSection
            users={formData.users}
            onInviteRecruiter={() => console.log("Invite recruiter clicked")}
            onBack={() => setCurrentStep("document")}
          />
        )}
      </div>
    </>
  );
}

export default VerifyCompanyFlow;
