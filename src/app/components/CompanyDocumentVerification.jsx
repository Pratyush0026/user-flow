"use client";
import Image from "next/image";
import React from "react";

function CompanyDocumentVerification({ formData, onInputChange, onSubmit, onBack }) {
  const documentTypes = [
    "Choose document",
    "GST Certificate",
    "CIN Certificate", 
    "DIN Certificate",
    "Company PAN Card",
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onInputChange("uploadedFile", file);
    }
  };

  const isFormValid = () => {
    return (
      formData.documentType &&
      formData.documentType !== "Choose document" &&
      formData.documentNumber &&
      formData.uploadedFile &&
      formData.termsAccepted
    );
  };

  return (
    <>
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="space-y-2">
          <h2 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#959596]">
            Verify your company
          </h2>
          <p className="text-[14px] md:text-[16px] font-sarabun font-semibold text-[#001242]">
            Please verify your company to get unlimited access to Hamara Jobs hiring tools
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-6">
        <div className="bg-[#F5F5F5] rounded-[12px] p-4 md:p-6 space-y-6">
          {/* Document Verification Header */}
          <div>
            <h3 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#001242] mb-2">
              Document verification
            </h3>
            <p className="text-[14px] font-sarabun font-normal text-[#001242]">
              Documents will be verified by the Hamara Jobs team and status will be updated post verification
            </p>
          </div>

          {/* Document Selection */}
          <div className="space-y-3">
            <h4 className="text-[14px] md:text-[16px] font-sarabun font-semibold text-[#001242]">
              Choose any one of the documents
            </h4>

            <div className="relative">
              <select
                value={formData.documentType}
                onChange={(e) => onInputChange("documentType", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] appearance-none cursor-pointer"
              >
                {documentTypes.map((type, index) => (
                  <option key={index} value={type} disabled={index === 0}>
                    {type}
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

          {/* Document Number */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h4 className="text-[14px] md:text-[16px] font-sarabun font-semibold text-[#001242]">
                Enter document number
              </h4>
              <button className="bg-white border-2 border-[#036204] h-[40px] md:h-[45px] w-full sm:w-[120px] text-[#036204] px-3 py-1 rounded-[8px] text-[12px] md:text-[14px] font-sarabun font-medium hover:bg-green-50 transition-colors">
                Validate
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter document number"
              value={formData.documentNumber}
              onChange={(e) => onInputChange("documentNumber", e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[14px] md:text-[16px] placeholder-gray-400"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-3">
            <h4 className="text-[14px] md:text-[16px] font-sarabun font-semibold text-[#001242]">
              Upload your document
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
                    Upload your document
                  </h5>
                  <p className="text-[12px] md:text-[14px] font-sarabun font-normal text-[#6C757D]">
                    Drag and drop file here or{" "}
                    <label
                      htmlFor="company-file-upload"
                      className="text-[#1A98FF] font-semibold cursor-pointer underline"
                    >
                      Choose file
                    </label>
                  </p>
                  <input
                    id="company-file-upload"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                <div className="space-y-1 font-sarabun">
                  <p className="text-[12px] md:text-[14px] text-[#4A4B4B]">
                    *Supported formats:{" "}
                    <span className="text-[#001242] font-medium">
                      .pdf, .png, or .jpeg
                    </span>
                  </p>
                  <p className="text-[12px] md:text-[14px] text-[#4A4B4B]">
                    *Max file size:{" "}
                    <span className="text-[#001242] font-medium">5Mb</span>
                  </p>
                </div>
              </div>
            </div>

            {formData.uploadedFile && (
              <p className="text-[12px] md:text-[14px] font-sarabun font-medium text-[#2D7D32]">
                File uploaded: {formData.uploadedFile.name}
              </p>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => onInputChange("termsAccepted", e.target.checked)}
            className="mt-1 w-4 h-4 text-[#002DA5] focus:ring-[#002DA5] border-gray-300 rounded"
          />
          <p className="text-[12px] md:text-[14px] font-sarabun font-normal text-[#001242]">
            I consent to verify my company using submitted documents as per guidelines by Hamara Jobs. As per
            guidelines by Hamara Jobs, I agree to the{" "}
            <a href="#" className="text-[#1A98FF] underline">
              Terms and Conditions
            </a>{" "}
            of Hamara Jobs.
          </p>
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
            Verify now
          </button>
        </div>
      </div>
    </>
  );
}

export default CompanyDocumentVerification;