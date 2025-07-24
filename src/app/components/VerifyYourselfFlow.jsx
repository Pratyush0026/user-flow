// "use client";
// import React, { useState } from "react";

// function VerifyYourselfFlow({ onBack }) {
//   const [currentStep, setCurrentStep] = useState("verification-type"); // verification-type, aadhaar-form, document-form
//   const [verificationType, setVerificationType] = useState("aadhaar");
//   const [formData, setFormData] = useState({
//     aadhaarNumber: "",
//     documentType: "",
//     documentNumber: "",
//     uploadedFile: null,
//     termsAccepted: false
//   });

//   const documentTypes = [
//     "Choose document",
//     "PAN Card",
//     "Driving License",
//     "Voter ID",
//     "Passport",
//     "Company ID Card"
//   ];

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       handleInputChange("uploadedFile", file);
//     }
//   };

//   const handleNext = () => {
//     if (verificationType === "aadhaar") {
//       setCurrentStep("aadhaar-form");
//     } else {
//       setCurrentStep("document-form");
//     }
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//   };

//   // Verification Type Selection Screen
//   if (currentStep === "verification-type") {
//     return (
//       <>
//         {/* Header */}
//         <div className="p-4 md:p-6 border-b border-gray-200">
//           <div className="flex items-center gap-3 mb-4">
//             <button
//               onClick={onBack}
//               className="flex items-center text-[#001242] hover:text-blue-600"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span className="ml-2 text-[16px] font-sarabun font-medium">Back</span>
//             </button>
//           </div>

//           <div className="space-y-2">
//             <h2 className="text-[20px] md:text-[24px] font-sarabun font-semibold text-[#001242]">
//               Verify yourself
//             </h2>
//             <div className="flex items-center gap-2">
//               <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                 Get verified
//               </span>
//               <div className="bg-[#E8F5E8] px-2 py-1 rounded-md">
//                 <span className="text-[12px] font-sarabun font-medium text-[#2D7D32]">
//                   ✓ Trusted employer
//                 </span>
//               </div>
//               <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                 tag in minutes using instant verification.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4 md:p-6 space-y-6">
//           <div className="space-y-4">
//             <h3 className="text-[18px] font-sarabun font-semibold text-[#001242]">
//               Select type of verification
//             </h3>

//             {/* Radio Options */}
//             <div className="space-y-4">
//               {/* Using Aadhaar */}
//               <div className="flex items-center gap-3">
//                 <div
//                   onClick={() => setVerificationType("aadhaar")}
//                   className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                     verificationType === "aadhaar"
//                       ? "border-[#1A98FF] bg-white"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   {verificationType === "aadhaar" && (
//                     <div className="w-3 h-3 bg-[#1A98FF] rounded-full"></div>
//                   )}
//                 </div>
//                 <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                   Using Aadhaar
//                 </span>
//               </div>

//               {/* Using documents */}
//               <div className="flex items-center gap-3">
//                 <div
//                   onClick={() => setVerificationType("documents")}
//                   className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                     verificationType === "documents"
//                       ? "border-[#1A98FF] bg-white"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   {verificationType === "documents" && (
//                     <div className="w-3 h-3 bg-[#1A98FF] rounded-full"></div>
//                   )}
//                 </div>
//                 <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                   Using documents
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Spacer */}
//           <div className="flex-1 min-h-[200px]"></div>

//           {/* Bottom Buttons */}
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={onBack}
//               className="px-6 py-3 text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[16px] hover:bg-blue-700 transition-colors"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Aadhaar Form Screen
//   if (currentStep === "aadhaar-form") {
//     return (
//       <>
//         {/* Header */}
//         <div className="p-4 md:p-6 border-b border-gray-200">
//           <div className="flex items-center gap-3 mb-4">
//             <button
//               onClick={() => setCurrentStep("verification-type")}
//               className="flex items-center text-[#001242] hover:text-blue-600"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span className="ml-2 text-[16px] font-sarabun font-medium">Back</span>
//             </button>
//           </div>

//           <div className="space-y-2">
//             <h2 className="text-[20px] md:text-[24px] font-sarabun font-semibold text-[#001242]">
//               Verify yourself
//             </h2>
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                 Get verified
//               </span>
//               <div className="bg-[#E8F5E8] px-2 py-1 rounded-md">
//                 <span className="text-[12px] font-sarabun font-medium text-[#2D7D32]">
//                   ✓ Trusted employer
//                 </span>
//               </div>
//               <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                 tag in minutes using instant verification.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4 md:p-6 space-y-6">
//           <div className="space-y-4">
//             <h3 className="text-[18px] font-sarabun font-semibold text-[#001242]">
//               Select type of verification
//             </h3>

//             {/* Radio Options */}
//             <div className="space-y-4">
//               {/* Using Aadhaar */}
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 rounded-full border-2 border-[#1A98FF] bg-white cursor-pointer flex items-center justify-center">
//                   <div className="w-3 h-3 bg-[#1A98FF] rounded-full"></div>
//                 </div>
//                 <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                   Using Aadhaar
//                 </span>
//               </div>

//               {/* Using documents */}
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white cursor-pointer flex items-center justify-center">
//                 </div>
//                 <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                   Using documents
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Aadhaar Number Form */}
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <h3 className="text-[18px] font-sarabun font-semibold text-[#001242]">
//                 Enter your Aadhaar number
//               </h3>
//               <button className="bg-[#FFF3CD] text-[#856404] px-3 py-1 rounded text-[14px] font-sarabun font-medium">
//                 Instant verification
//               </button>
//             </div>

//             <input
//               type="text"
//               placeholder="819098480895"
//               value={formData.aadhaarNumber}
//               onChange={(e) => handleInputChange("aadhaarNumber", e.target.value)}
//               className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//             />

//             <p className="text-[14px] font-sarabun font-normal text-[#6C757D]">
//               An OTP will be sent to the mobile number linked to Aadhaar
//             </p>
//           </div>

//           {/* Terms and Conditions */}
//           <div className="flex items-start gap-3">
//             <input
//               type="checkbox"
//               checked={formData.termsAccepted}
//               onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
//               className="mt-1 w-4 h-4 text-[#002DA5] focus:ring-[#002DA5] border-gray-300 rounded"
//             />
//             <p className="text-[14px] font-sarabun font-normal text-[#001242]">
//               I consent to verify my identity as per UIDAI guidelines by Hamara Jobs. I agree to the{" "}
//               <a href="#" className="text-[#1A98FF] underline">Terms and Conditions</a> of Hamara Jobs.
//             </p>
//           </div>

//           {/* Spacer */}
//           <div className="flex-1 min-h-[100px]"></div>

//           {/* Bottom Buttons */}
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={() => setCurrentStep("verification-type")}
//               className="px-6 py-3 text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
//             >
//               Back
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={!formData.aadhaarNumber || !formData.termsAccepted}
//               className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[16px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Document Form Screen
//   if (currentStep === "document-form") {
//     return (
//       <>
//         {/* Header */}
//         <div className="p-4 md:p-6 border-b border-gray-200">
//           <div className="flex items-center gap-3 mb-4">
//             <button
//               onClick={() => setCurrentStep("verification-type")}
//               className="flex items-center text-[#001242] hover:text-blue-600"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span className="ml-2 text-[16px] font-sarabun font-medium">Back</span>
//             </button>
//           </div>

//           <div className="space-y-2">
//             <h2 className="text-[20px] md:text-[24px] font-sarabun font-semibold text-[#001242]">
//               Verify yourself
//             </h2>
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                 Get verified
//               </span>
//               <div className="bg-[#E8F5E8] px-2 py-1 rounded-md">
//                 <span className="text-[12px] font-sarabun font-medium text-[#2D7D32]">
//                   ✓ Trusted employer
//                 </span>
//               </div>
//               <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                 tag in minutes using instant verification.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4 md:p-6 space-y-6">
//           <div className="space-y-4">
//             <h3 className="text-[18px] font-sarabun font-semibold text-[#001242]">
//               Select type of verification
//             </h3>

//             {/* Radio Options */}
//             <div className="space-y-4">
//               {/* Using Aadhaar */}
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white cursor-pointer flex items-center justify-center">
//                 </div>
//                 <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                   Using Aadhaar
//                 </span>
//               </div>

//               {/* Using documents */}
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 rounded-full border-2 border-[#1A98FF] bg-white cursor-pointer flex items-center justify-center">
//                   <div className="w-3 h-3 bg-[#1A98FF] rounded-full"></div>
//                 </div>
//                 <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                   Using documents
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Document Verification Section */}
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-[18px] font-sarabun font-semibold text-[#001242] mb-2">
//                 Verification using documents
//               </h3>
//               <p className="text-[14px] font-sarabun font-normal text-[#6C757D]">
//                 Documents will be verified by the Hamara Jobs team and status will be updated post verification
//               </p>
//             </div>

//             {/* Document Selection */}
//             <div className="space-y-3">
//               <h4 className="text-[16px] font-sarabun font-semibold text-[#001242]">
//                 Choose any one of the documents
//               </h4>

//               <div className="relative">
//                 <select
//                   value={formData.documentType}
//                   onChange={(e) => handleInputChange("documentType", e.target.value)}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] appearance-none cursor-pointer"
//                 >
//                   {documentTypes.map((type, index) => (
//                     <option key={index} value={type} disabled={index === 0}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Document Number */}
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <h4 className="text-[16px] font-sarabun font-semibold text-[#001242]">
//                   Enter document number
//                 </h4>
//                 <button className="bg-[#E8F5E8] text-[#2D7D32] px-3 py-1 rounded text-[14px] font-sarabun font-medium">
//                   Validate
//                 </button>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Enter document number"
//                 value={formData.documentNumber}
//                 onChange={(e) => handleInputChange("documentNumber", e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//               />
//             </div>

//             {/* File Upload */}
//             <div className="space-y-3">
//               <h4 className="text-[16px] font-sarabun font-semibold text-[#001242]">
//                 Upload your document
//               </h4>

//               <div className="border-2 border-dashed border-[#1A98FF] rounded-lg p-8 text-center bg-[#F8FCFF]">
//                 <div className="space-y-4">
//                   <div className="flex justify-center">
//                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#1A98FF]">
//                       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>

//                   <div className="space-y-2">
//                     <h5 className="text-[16px] font-sarabun font-semibold text-[#001242]">
//                       Upload your document
//                     </h5>
//                     <p className="text-[14px] font-sarabun font-normal text-[#6C757D]">
//                       Drag and drop file here or{" "}
//                       <label htmlFor="file-upload" className="text-[#1A98FF] cursor-pointer underline">
//                         Choose file
//                       </label>
//                     </p>
//                     <input
//                       id="file-upload"
//                       type="file"
//                       accept=".pdf,.png,.jpg,.jpeg"
//                       onChange={handleFileUpload}
//                       className="hidden"
//                     />
//                   </div>

//                   <div className="space-y-1 text-[12px] font-sarabun font-normal text-[#6C757D]">
//                     <p>*Supported formats: .pdf, .png, or .jpeg</p>
//                     <p>*Max file size: 5Mb</p>
//                   </div>
//                 </div>
//               </div>

//               {formData.uploadedFile && (
//                 <p className="text-[14px] font-sarabun font-medium text-[#2D7D32]">
//                   File uploaded: {formData.uploadedFile.name}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Terms and Conditions */}
//           <div className="flex items-start gap-3">
//             <input
//               type="checkbox"
//               checked={formData.termsAccepted}
//               onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
//               className="mt-1 w-4 h-4 text-[#002DA5] focus:ring-[#002DA5] border-gray-300 rounded"
//             />
//             <p className="text-[14px] font-sarabun font-normal text-[#001242]">
//               I consent to verify my identity as per UIDAI guidelines by Hamara Jobs. I agree to the{" "}
//               <a href="#" className="text-[#1A98FF] underline">Terms and Conditions</a> of Hamara Jobs.
//             </p>
//           </div>

//           {/* Spacer */}
//           <div className="flex-1 min-h-[50px]"></div>

//           {/* Bottom Buttons */}
//           <div className="flex justify-end gap-4">
//             <button
//               onClick={() => setCurrentStep("verification-type")}
//               className="px-6 py-3 text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
//             >
//               Back
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={!formData.documentType || !formData.documentNumber || !formData.uploadedFile || !formData.termsAccepted}
//               className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[16px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return null;
// }

// export default VerifyYourselfFlow;

"use client";
import Image from "next/image";
import React, { useState } from "react";

function VerifyYourselfFlow({ onBack }) {
  const [verificationType, setVerificationType] = useState("aadhaar");
  const [formData, setFormData] = useState({
    aadhaarNumber: "",
    documentType: "",
    documentNumber: "",
    uploadedFile: null,
    termsAccepted: false,
  });

  const documentTypes = [
    "Choose document",
    "PAN Card",
    "Driving License",
    "Voter ID",
    "Passport",
    "Company ID Card",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleInputChange("uploadedFile", file);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const isFormValid = () => {
    if (verificationType === "aadhaar") {
      return formData.aadhaarNumber && formData.termsAccepted;
    } else {
      return (
        formData.documentType &&
        formData.documentType !== "Choose document" &&
        formData.documentNumber &&
        formData.uploadedFile &&
        formData.termsAccepted
      );
    }
  };

  return (
    <>
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        {/* <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack}
            className="flex items-center text-[#001242] hover:text-blue-600"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2 text-[16px] font-sarabun font-medium">Back</span>
          </button>
        </div> */}

        <div className="space-y-2">
          <h2 className="text-[18px] md:text-[18px] font-sarabun font-semibold text-[#959596]">
            Verify yourself
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[16px] font-sarabun font-semibold text-[#001242]">
              Get verified
            </span>
            <div className="bg-[#C8FFC8] w-[153px] px-3 py-1 rounded-[8px]">
              <span className="text-[14px] font-sarabun font-semibold text-[#036204] flex items-center gap-1">
                <Image
                  src="/assets/badge.png"
                  alt="Trusted employer badge"
                  width={13}
                  height={16}
                  className="w-[13px] h-[16px]"
                />
                Trusted employer
              </span>
            </div>
            <span className="text-[16px] font-sarabun font-semibold text-[#001242]">
              tag in minutes using instant verification.
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-[18px] font-sarabun font-semibold text-[#001242]">
            Select type of verification
          </h3>

          {/* Radio Options */}
          <div className="flex gap-8">
            {/* Using Aadhaar */}
            <div className="flex items-center gap-3">
              <div
                onClick={() => setVerificationType("aadhaar")}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                  verificationType === "aadhaar"
                    ? "border-[#1A98FF] bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {verificationType === "aadhaar" && (
                  <div className="w-3 h-3 bg-[#1A98FF] rounded-full"></div>
                )}
              </div>
              <span
                className="text-[16px] font-sarabun font-normal text-[#001242] cursor-pointer"
                onClick={() => setVerificationType("aadhaar")}
              >
                Using Aadhaar
              </span>
            </div>

            {/* Using documents */}
            <div className="flex items-center gap-3">
              <div
                onClick={() => setVerificationType("documents")}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                  verificationType === "documents"
                    ? "border-[#1A98FF] bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {verificationType === "documents" && (
                  <div className="w-3 h-3 bg-[#1A98FF] rounded-full"></div>
                )}
              </div>
              <span
                className="text-[16px] font-sarabun font-normal text-[#001242] cursor-pointer"
                onClick={() => setVerificationType("documents")}
              >
                Using documents
              </span>
            </div>
          </div>
        </div>

        {/* Aadhaar Form - Show when Aadhaar is selected */}
        {verificationType === "aadhaar" && (
          <div className="space-y-4 bg-[#F5F5F5] p-3 rounded-[12px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px]  font-sarabun font-semibold text-[#001242]">
                Enter your Aadhaar number
              </h3>
              <button className="bg-[#FBE8B5] text-[#FF9046] px-3 py-3 rounded-[8px] text-[14px] font-sarabun font-semibold">
                Instant verification
              </button>
            </div>

            <input
              type="text"
              placeholder="819098480895"
              value={formData.aadhaarNumber}
              onChange={(e) =>
                handleInputChange("aadhaarNumber", e.target.value)
              }
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
            />

            <p className="text-[14px] font-sarabun font-medium text-[#959596]">
              An OTP will be sent to the mobile number linked to Aadhaar
            </p>
          </div>
        )}

        {/* Document Form - Show when Documents is selected */}
        {verificationType === "documents" && (
          <div className="space-y-4 bg-[#F5F5F5] p-3 rounded-[12px]">
            <div>
              <h3 className="text-[16px] font-sarabun font-semibold text-[#001242] mb-2">
                Verification using documents
              </h3>
              <p className="text-[14px] font-sarabun font-normal text-[#001242]">
                Documents will be verified by the Hamara Jobs team and status
                will be updated post verification
              </p>
            </div>

            {/* Document Selection */}
            <div className="space-y-3">
              <h4 className="text-[16px] font-sarabun font-semibold text-[#001242]">
                Choose any one of the documents
              </h4>

              <div className="relative">
                <select
                  value={formData.documentType}
                  onChange={(e) =>
                    handleInputChange("documentType", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] appearance-none cursor-pointer"
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
              <div className="flex items-center justify-between">
                <h4 className="text-[16px] font-sarabun font-semibold text-[#001242]">
                  Enter document number
                </h4>
                <button className="bg-[#FFFFFF] border-2 border-[#036204] h-[45px] w-[120px] text-[#036204] px-3 py-1 rounded-[8px] text-[14px] font-sarabun font-medium">
                  Validate
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter document number"
                value={formData.documentNumber}
                onChange={(e) =>
                  handleInputChange("documentNumber", e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-3">
              <h4 className="text-[16px] font-sarabun font-semibold text-[#001242]">
                Upload your document
              </h4>

              <div className="border-2 border-dashed border-[#1A98FF] rounded-lg p-8 text-center bg-[#DAEEFF]">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/email-icon.png"
                      alt="Email icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-[16px] font-sarabun font-semibold text-[#001242]">
                      Upload your document
                    </h5>
                    <p className="text-[14px] font-sarabun font-normal text-[#6C757D]">
                      Drag and drop file here or{" "}
                      <label
                        htmlFor="file-upload"
                        className="text-[#1A98FF] font-semibold cursor-pointer underline"
                      >
                        Choose file
                      </label>
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  <div className="space-y-1 font-sarabun">
                    <p className="text-[14px] text-[#4A4B4B]">
                      *Supported formats:{" "}
                      <span className="text-[#001242] font-medium">
                        .pdf, .png, or .jpeg
                      </span>
                    </p>
                    <p className="text-[14px] text-[#4A4B4B]">
                      *Max file size:{" "}
                      <span className="text-[#001242] font-medium">5Mb</span>
                    </p>
                  </div>
                </div>
              </div>

              {formData.uploadedFile && (
                <p className="text-[14px] font-sarabun font-medium text-[#2D7D32]">
                  File uploaded: {formData.uploadedFile.name}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Terms and Conditions - Always visible */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) =>
              handleInputChange("termsAccepted", e.target.checked)
            }
            className="mt-1 w-4 h-4 text-[#002DA5] focus:ring-[#002DA5] border-gray-300 rounded"
          />
          <p className="text-[14px] font-sarabun font-normal text-[#001242]">
            I consent to verify my identity as per UIDAI guidelines by Hamara
            Jobs. I agree to the{" "}
            <a href="#" className="text-[#1A98FF] underline">
              Terms and Conditions
            </a>{" "}
            of Hamara Jobs.
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[50px]"></div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onBack}
            className="px-6 py-3 text-[#4A4B4B] font-sarabun text-[16px] font-semibold hover:underline"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[16px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default VerifyYourselfFlow;
