// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// function VerificationForm({ onContinue, onBack, formData, updateFormData }) {
//   const [localFormData, setLocalFormData] = useState({
//     verificationType: "Send me verification link on email",
//     email: "",
//     otp: "",
//     otpSent: false,
//     otpVerified: false,
//     companySelected: "",
//     employeeCount: "",
//     emailVerificationSent: false,
//     ...formData,
//   });

//   const companies = [
//     "Tata Steel",
//     "TCS",
//     "Infosys",
//     "Wipro",
//     "HCL Technologies",
//     "Tech Mahindra",
//     "Cognizant",
//     "Accenture",
//     "IBM",
//     "Microsoft",
//     "Google",
//     "Amazon",
//     "Apple",
//     "Meta",
//     "Netflix",
//     "Tesla",
//     "Salesforce",
//     "Oracle",
//     "SAP",
//     "Adobe",
//     "Uber",
//     "Airbnb",
//     "Spotify",
//     "Zoom",
//     "Slack",
//     "Reliance Industries",
//     "HDFC Bank",
//     "ICICI Bank",
//     "Bajaj Finance",
//     "Asian Paints",
//   ];

//   const [timer, setTimer] = useState(25);
//   const [isTimerActive, setIsTimerActive] = useState(false);
//   const [currentScreen, setCurrentScreen] = useState("verification"); // verification, company, emailSent

//   const handleInputChange = (field, value) => {
//     const newData = { ...localFormData, [field]: value };
//     setLocalFormData(newData);
//     updateFormData && updateFormData(newData);
//   };

//   const toggleVerificationType = (type) => {
//     const newData = {
//       ...localFormData,
//       verificationType: type,
//       otpSent: false,
//       otp: "",
//       otpVerified: false,
//     };
//     setLocalFormData(newData);
//     updateFormData && updateFormData(newData);

//     // Reset timer state
//     setIsTimerActive(false);
//     setTimer(25);
//   };

//   const sendOTP = () => {
//     // Here you would typically make an API call to send OTP
//     handleInputChange("otpSent", true);
//     setIsTimerActive(true);
//     setTimer(25);
//   };

//   const confirmOTP = () => {
//     // Here you would typically verify the OTP with backend
//     console.log("Confirming OTP:", localFormData.otp);
//     handleInputChange("otpVerified", true);

//     // Move to company confirmation screen after OTP verification
//     if (localFormData.verificationType === "Send me OTP on email") {
//       setCurrentScreen("company");
//     } else {
//       // For email verification link, go directly to email sent screen
//       setCurrentScreen("emailSent");
//     }
//   };

//   const confirmCompany = () => {
//     console.log("Company confirmed:", localFormData.companySelected);
//     console.log("Employee count:", localFormData.employeeCount);
//     setCurrentScreen("emailSent");
//     handleInputChange("emailVerificationSent", true);
//   };

//   const resendEmail = () => {
//     // Logic to resend verification email
//     console.log("Resending verification email");
//   };

//   const editEmail = () => {
//     // Go back to initial verification screen
//     setCurrentScreen("verification");
//     setLocalFormData({
//       ...localFormData,
//       otpSent: false,
//       otpVerified: false,
//       emailVerificationSent: false,
//     });
//   };

//   const verifyViaOTP = () => {
//     // Switch to OTP verification
//     const newData = {
//       ...localFormData,
//       verificationType: "Send me OTP on email",
//       otpSent: false,
//       otp: "",
//       otpVerified: false,
//     };
//     setLocalFormData(newData);
//     setCurrentScreen("verification");
//   };

//   // Timer countdown effect
//   useEffect(() => {
//     let interval = null;
//     if (isTimerActive && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((timer) => timer - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setIsTimerActive(false);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerActive, timer]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const getButtonText = () => {
//     if (localFormData.verificationType === "Send me OTP on email") {
//       if (!localFormData.otpSent) {
//         return "Confirm & send OTP";
//       } else {
//         return "Confirm OTP";
//       }
//     }
//     return "Confirm & send verification link";
//   };

//   const handleContinueClick = () => {
//     if (
//       localFormData.verificationType === "Send me OTP on email" &&
//       !localFormData.otpSent
//     ) {
//       sendOTP();
//     } else if (
//       localFormData.verificationType === "Send me OTP on email" &&
//       localFormData.otpSent &&
//       !localFormData.otpVerified
//     ) {
//       confirmOTP();
//     } else {
//       confirmOTP();
//     }
//   };

//   // Company Confirmation Screen
//   if (currentScreen === "company") {
//     return (
//       <>
//         {/* Form Header */}
//         <div className="p-6 border-b border-gray-200">
//           <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
//             Confirm company name
//           </h2>
//         </div>

//         <div className="p-6 space-y-6">
//           <div className="space-y-4">
//             <p className="text-[16px] font-sarabun font-normal text-[#959596]">
//               You have chosen a company with your email{" "}
//               <span className="text-[#001242] font-medium">
//                 {localFormData.email || "abc@tatagroup.com"}
//               </span>{" "}
//               Please confirm which company are you working for from the options
//               below:
//             </p>

//             {/* Company Selection */}
//             {/* <div className="space-y-4">
//               <div>
//                 <label className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Which company are you working for?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div
//                     onClick={() =>
//                       handleInputChange("companySelected", "Tata Steel")
//                     }
//                     className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                       localFormData.companySelected === "Tata Steel"
//                         ? "border-[#1A98FF] bg-white"
//                         : "border-gray-300 bg-white"
//                     }`}
//                   >
//                     {localFormData.companySelected === "Tata Steel" && (
//                       <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                     )}
//                   </div>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                     Tata Steel
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div
//                     onClick={() => handleInputChange("companySelected", "TCS")}
//                     className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                       localFormData.companySelected === "TCS"
//                         ? "border-[#1A98FF] bg-white"
//                         : "border-gray-300 bg-white"
//                     }`}
//                   >
//                     {localFormData.companySelected === "TCS" && (
//                       <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                     )}
//                   </div>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242]">
//                     TCS
//                   </span>
//                 </div>
//               </div>
//             </div> */}

//             {/* Company Selection */}
//             <div className="space-y-4">
//               <div>
//                 <label className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Which company are you working for?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//               </div>

//               {/* Scrollable container */}
//               <div
//                 className="max-h-48 overflow-y-auto   rounded-lg p-3"
//                 style={{
//                   scrollbarWidth: "thin",
//                   scrollbarColor: "#002DA5 #f1f1f1",
//                 }}
//               >
//                 <div className="space-y-3">
//                   {companies.map((company, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div
//                         onClick={() =>
//                           handleInputChange("companySelected", company)
//                         }
//                         className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors ${
//                           localFormData.companySelected === company
//                             ? "border-[#1A98FF] bg-white"
//                             : "border-gray-300 bg-white hover:border-gray-400"
//                         }`}
//                       >
//                         {localFormData.companySelected === company && (
//                           <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                         )}
//                       </div>
//                       <span
//                         className="text-[16px] font-sarabun font-semibold text-[#4A4B4B] cursor-pointer flex-1"
//                         onClick={() =>
//                           handleInputChange("companySelected", company)
//                         }
//                       >
//                         {company}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Optional: Helper text */}
//               {/* <div className="text-sm text-gray-500">
//                 Scroll to see more companies or contact support if your company
//                 is not listed.
//               </div> */}
//             </div>

//             {/* Employee Count */}
//             <div className="space-y-4">
//               <div>
//                 <label className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Number of employees? <span className="text-red-500">*</span>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "0 - 50",
//                   "51 - 100",
//                   "101 - 300",
//                   "301 - 500",
//                   "501 - 1000",
//                   "1000 above",
//                 ].map((range) => (
//                   <button
//                     key={range}
//                     onClick={() => handleInputChange("employeeCount", range)}
//                     className={`px-4 py-2 rounded-full border text-[14px] font-sarabun font-normal transition-colors ${
//                       localFormData.employeeCount === range
//                         ? "border-[#001242] bg-[#001242] text-white"
//                         : "border-gray-500 font-semibold text-[#4A4B4B] hover:border-[#001242]"
//                     }`}
//                   >
//                     {range}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Spacer */}
//           <div className="flex-1 min-h-[100px]"></div>

//           {/* Bottom Buttons */}
//           <div className="flex items-center justify-end gap-4">
//             <button
//               onClick={() => setCurrentScreen("verification")}
//               className="text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={confirmCompany}
//               disabled={
//                 !localFormData.companySelected || !localFormData.employeeCount
//               }
//               className="bg-[#002DA5] h-[56px] text-white px-5 py-3 rounded-[12px] font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//             >
//               Confirm & verify
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Email Verification Sent Screen
//   if (currentScreen === "emailSent") {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[500px] p-6 text-center">
//         {/* Email Verification Icon */}
//         <div className="mb-8">
//           <img
//             src="/assets/confirm.png"
//             alt="Email notification illustration"
//             width={246}
//             height={246}
//             className="object-contain"
//           />
//         </div>

//         {/* Main heading */}
//         <h2 className="text-[28px] font-family-sarabun font-semibold text-[#001242] mb-3">
//           Check your inbox to verify your email
//         </h2>

//         {/* Description */}
//         <p className="text-[16px] font-sarabun font-normal text-[#959596] mb-8 max-w-2xl">
//           To confirm it's yours and verify your account, click on the link we
//           sent to :{" "}
//           <span className="text-[#001242] font-medium">
//             {localFormData.email || "abc@tatagroup.com"}
//           </span>
//         </p>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-4 mb-6">
//           <button
//             onClick={editEmail}
//             className="text-[#4A4B4B] font-sarabun text-[16px] font-medium hover:underline"
//           >
//             Edit email
//           </button>
//           <button
//             onClick={resendEmail}
//             className="bg-[#002DA5] text-white px-6 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors"
//           >
//             Resend
//           </button>
//         </div>

//         {/* Alternative verification */}
//         <p className="text-[16px] font-sarabun font-normal text-[#959596]">
//           Having trouble with verification link?{" "}
//           <button
//             onClick={verifyViaOTP}
//             className="text-[#036204] text-[16px] font-family-sarabun font-semibold hover:underline"
//           >
//             Verify via OTP
//           </button>
//         </p>
//       </div>
//     );
//   }

//   // Original Verification Screen
//   return (
//     <>
//       {/* Form Header */}
//       <div className="p-6 border-b border-gray-200">
//         <div className="flex items-center justify-start gap-3">
//           <div>
//             <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
//               Let's verify your company email id
//             </h2>
//           </div>
//           <div className="flex items-center gap-2 h-[34px] w-[61px] bg-[#FDF3DA] px-3 py-1 rounded-full">
//             <span className="text-[14px] font-sarabun font-normal text-[#FF9046]">
//               Faster
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 space-y-8">
//         {/* Verification Options */}
//         <div className="space-y-6">
//           {/* Send verification link option */}
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 mt-1">
//               <div
//                 onClick={() =>
//                   toggleVerificationType("Send me verification link on email")
//                 }
//                 className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                   localFormData.verificationType ===
//                   "Send me verification link on email"
//                     ? "border-[#1A98FF] bg-white"
//                     : "border-gray-300 bg-white"
//                 }`}
//               >
//                 {localFormData.verificationType ===
//                   "Send me verification link on email" && (
//                   <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                 )}
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Send me verification link on email
//                 </span>
//                 <Image
//                   src="/assets/info.png"
//                   alt="Info"
//                   width={17}
//                   height={17}
//                   className="cursor-pointer"
//                 />
//               </div>
//               {localFormData.verificationType ===
//                 "Send me verification link on email" && (
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   value={localFormData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//                 />
//               )}
//             </div>
//           </div>

//           {/* Send OTP option */}
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 mt-1">
//               <div
//                 onClick={() => toggleVerificationType("Send me OTP on email")}
//                 className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                   localFormData.verificationType === "Send me OTP on email"
//                     ? "border-[#1A98FF] bg-white"
//                     : "border-gray-300 bg-white"
//                 }`}
//               >
//                 {localFormData.verificationType === "Send me OTP on email" && (
//                   <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                 )}
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Send me OTP on email
//                 </span>
//                 <Image
//                   src="/assets/info.png"
//                   alt="Info"
//                   width={17}
//                   height={17}
//                   className="cursor-pointer"
//                 />
//               </div>

//               {/* Show email input if OTP option is selected but OTP not sent yet */}
//               {localFormData.verificationType === "Send me OTP on email" &&
//                 !localFormData.otpSent && (
//                   <input
//                     type="email"
//                     placeholder="Enter email address"
//                     value={localFormData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//                   />
//                 )}

//               {/* Show OTP sent message and input when OTP is sent */}
//               {localFormData.verificationType === "Send me OTP on email" &&
//                 localFormData.otpSent && (
//                   <div className="space-y-3">
//                     <p className="text-[16px] font-sarabun font-normal text-[#001242]">
//                       <span className="text-[#959596]">Enter OTP sent to</span>{" "}
//                       {localFormData.email || "abc@tatagroup.com"}
//                     </p>
//                     <input
//                       type="text"
//                       placeholder="Enter 4 digit OTP"
//                       value={localFormData.otp}
//                       onChange={(e) => handleInputChange("otp", e.target.value)}
//                       maxLength="4"
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//                     />
//                     {isTimerActive && (
//                       <p className="text-[14px] font-sarabun font-medium text-[#FF4444]">
//                         {formatTime(timer)}
//                       </p>
//                     )}
//                   </div>
//                 )}
//             </div>
//           </div>
//         </div>

//         {/* Spacer to push content down */}
//         <div className="flex-1 min-h-[200px]"></div>

//         {/* Bottom Section */}
//         <div className="flex items-center justify-between">
//           {/* Manual KYC verification link */}
//           <div>
//             <button className="text-[#1A98FF] font-sarabun text-[16px] font-medium underline hover:no-underline">
//               Manual KYC verification
//             </button>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-4">
//             {localFormData.verificationType === "Send me OTP on email" &&
//               localFormData.otpSent && (
//                 <button
//                   onClick={onBack}
//                   className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-gray-300 transition-colors"
//                 >
//                   Back
//                 </button>
//               )}

//             {/* Main Action Button */}
//             <button
//               onClick={handleContinueClick}
//               className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors"
//             >
//               {getButtonText()}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VerificationForm;


// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import ManualKYCVerification from "./ManualKYCVerification"; 
// import VerifyYourselfFlow from "./VerifyYourselfFlow"; 

// function VerificationForm({ onContinue, onBack, formData, updateFormData }) {
//   const [localFormData, setLocalFormData] = useState({
//     verificationType: "Send me verification link on email",
//     email: "",
//     otp: "",
//     otpSent: false,
//     otpVerified: false,
//     companySelected: "",
//     employeeCount: "",
//     emailVerificationSent: false,
//     ...formData,
//   });

//   const companies = [
//     "Tata Steel",
//     "TCS",
//     "Infosys",
//     "Wipro",
//     "HCL Technologies",
//     "Tech Mahindra",
//     "Cognizant",
//     "Accenture",
//     "IBM",
//     "Microsoft",
//     "Google",
//     "Amazon",
//     "Apple",
//     "Meta",
//     "Netflix",
//     "Tesla",
//     "Salesforce",
//     "Oracle",
//     "SAP",
//     "Adobe",
//     "Uber",
//     "Airbnb",
//     "Spotify",
//     "Zoom",
//     "Slack",
//     "Reliance Industries",
//     "HDFC Bank",
//     "ICICI Bank",
//     "Bajaj Finance",
//     "Asian Paints",
//   ];

//   const [timer, setTimer] = useState(25);
//   const [isTimerActive, setIsTimerActive] = useState(false);
//   // ADD THIS LINE: Add currentScreen state with 'manualKYC' option
//   const [currentScreen, setCurrentScreen] = useState("verification"); // verification, company, emailSent, manualKYC
// // verification, company, emailSent, manualKYC, verifyYourself
//   const handleInputChange = (field, value) => {
//     const newData = { ...localFormData, [field]: value };
//     setLocalFormData(newData);
//     updateFormData && updateFormData(newData);
//   };

//   const toggleVerificationType = (type) => {
//     const newData = {
//       ...localFormData,
//       verificationType: type,
//       otpSent: false,
//       otp: "",
//       otpVerified: false,
//     };
//     setLocalFormData(newData);
//     updateFormData && updateFormData(newData);

//     // Reset timer state
//     setIsTimerActive(false);
//     setTimer(25);
//   };

//   const sendOTP = () => {
//     handleInputChange("otpSent", true);
//     setIsTimerActive(true);
//     setTimer(25);
//   };

//   const confirmOTP = () => {
//     console.log("Confirming OTP:", localFormData.otp);
//     handleInputChange("otpVerified", true);

//     if (localFormData.verificationType === "Send me OTP on email") {
//       setCurrentScreen("company");
//     } else {
//       setCurrentScreen("emailSent");
//     }
//   };

//   const confirmCompany = () => {
//     console.log("Company confirmed:", localFormData.companySelected);
//     console.log("Employee count:", localFormData.employeeCount);
//     setCurrentScreen("emailSent");
//     handleInputChange("emailVerificationSent", true);
//   };

//   const resendEmail = () => {
//     console.log("Resending verification email");
//   };

//   const editEmail = () => {
//     setCurrentScreen("verification");
//     setLocalFormData({
//       ...localFormData,
//       otpSent: false,
//       otpVerified: false,
//       emailVerificationSent: false,
//     });
//   };

//   const verifyViaOTP = () => {
//     const newData = {
//       ...localFormData,
//       verificationType: "Send me OTP on email",
//       otpSent: false,
//       otp: "",
//       otpVerified: false,
//     };
//     setLocalFormData(newData);
//     setCurrentScreen("verification");
//   };

//   // ADD THESE FUNCTIONS: Manual KYC handlers
//   const handleManualKYCClick = () => {
//     setCurrentScreen("manualKYC");
//   };

//   const handleBackToEmailVerification = () => {
//     setCurrentScreen("verification");
//   };

// const handleVerifyYourself = () => {
//   setCurrentScreen("verifyYourself");
// };

//   const handleVerifyCompany = () => {
//     // Handle verify company flow - you can add your logic here
//     console.log("Verify company clicked");
//     // Example: navigate to verify company form
//     // setCurrentScreen("verifyCompany"); // if you have this screen
//   };

//   // Timer countdown effect
//   useEffect(() => {
//     let interval = null;
//     if (isTimerActive && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((timer) => timer - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setIsTimerActive(false);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerActive, timer]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const getButtonText = () => {
//     if (localFormData.verificationType === "Send me OTP on email") {
//       if (!localFormData.otpSent) {
//         return "Confirm & send OTP";
//       } else {
//         return "Confirm OTP";
//       }
//     }
//     return "Confirm & send verification link";
//   };

//   const handleContinueClick = () => {
//     if (
//       localFormData.verificationType === "Send me OTP on email" &&
//       !localFormData.otpSent
//     ) {
//       sendOTP();
//     } else if (
//       localFormData.verificationType === "Send me OTP on email" &&
//       localFormData.otpSent &&
//       !localFormData.otpVerified
//     ) {
//       confirmOTP();
//     } else {
//       confirmOTP();
//     }
//   };

//   // ADD THIS: Manual KYC Screen
//   if (currentScreen === "manualKYC") {
//     return (
//       <ManualKYCVerification
//         onBack={handleBackToEmailVerification}
//         onVerifyYourself={handleVerifyYourself}
//         onVerifyCompany={handleVerifyCompany}
//       />
//     );
//   }


//   // ADD THIS: Verify Yourself Screen
// if (currentScreen === "verifyYourself") {
//   return (
//     <VerifyYourselfFlow
//       onBack={() => setCurrentScreen("manualKYC")}
//     />
//   );
// }

//   // Company Confirmation Screen
//   if (currentScreen === "company") {
//     return (
//       <>
//         <div className="p-6 border-b border-gray-200">
//           <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
//             Confirm company name
//           </h2>
//         </div>

//         <div className="p-6 space-y-6">
//           <div className="space-y-4">
//             <p className="text-[16px] font-sarabun font-normal text-[#959596]">
//               You have chosen a company with your email{" "}
//               <span className="text-[#001242] font-medium">
//                 {localFormData.email || "abc@tatagroup.com"}
//               </span>{" "}
//               Please confirm which company are you working for from the options
//               below:
//             </p>

//             <div className="space-y-4">
//               <div>
//                 <label className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Which company are you working for?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//               </div>

//               <div
//                 className="max-h-48 overflow-y-auto rounded-lg p-3"
//                 style={{
//                   scrollbarWidth: "thin",
//                   scrollbarColor: "#002DA5 #f1f1f1",
//                 }}
//               >
//                 <div className="space-y-3">
//                   {companies.map((company, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div
//                         onClick={() =>
//                           handleInputChange("companySelected", company)
//                         }
//                         className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors ${
//                           localFormData.companySelected === company
//                             ? "border-[#1A98FF] bg-white"
//                             : "border-gray-300 bg-white hover:border-gray-400"
//                         }`}
//                       >
//                         {localFormData.companySelected === company && (
//                           <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                         )}
//                       </div>
//                       <span
//                         className="text-[16px] font-sarabun font-semibold text-[#4A4B4B] cursor-pointer flex-1"
//                         onClick={() =>
//                           handleInputChange("companySelected", company)
//                         }
//                       >
//                         {company}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Number of employees? <span className="text-red-500">*</span>
//                 </label>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "0 - 50",
//                   "51 - 100",
//                   "101 - 300",
//                   "301 - 500",
//                   "501 - 1000",
//                   "1000 above",
//                 ].map((range) => (
//                   <button
//                     key={range}
//                     onClick={() => handleInputChange("employeeCount", range)}
//                     className={`px-4 py-2 rounded-full border text-[14px] font-sarabun font-normal transition-colors ${
//                       localFormData.employeeCount === range
//                         ? "border-[#001242] bg-[#001242] text-white"
//                         : "border-gray-500 font-semibold text-[#4A4B4B] hover:border-[#001242]"
//                     }`}
//                   >
//                     {range}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex-1 min-h-[100px]"></div>

//           <div className="flex items-center justify-end gap-4">
//             <button
//               onClick={() => setCurrentScreen("verification")}
//               className="text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={confirmCompany}
//               disabled={
//                 !localFormData.companySelected || !localFormData.employeeCount
//               }
//               className="bg-[#002DA5] h-[56px] text-white px-5 py-3 rounded-[12px] font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//             >
//               Confirm & verify
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Email Verification Sent Screen
//   if (currentScreen === "emailSent") {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[500px] p-6 text-center">
//         <div className="mb-8">
//           <img
//             src="/assets/confirm.png"
//             alt="Email notification illustration"
//             width={246}
//             height={246}
//             className="object-contain"
//           />
//         </div>

//         <h2 className="text-[28px] font-family-sarabun font-semibold text-[#001242] mb-3">
//           Check your inbox to verify your email
//         </h2>

//         <p className="text-[16px] font-sarabun font-normal text-[#959596] mb-8 max-w-2xl">
//           To confirm it's yours and verify your account, click on the link we
//           sent to :{" "}
//           <span className="text-[#001242] font-medium">
//             {localFormData.email || "abc@tatagroup.com"}
//           </span>
//         </p>

//         <div className="flex items-center gap-4 mb-6">
//           <button
//             onClick={editEmail}
//             className="text-[#4A4B4B] font-sarabun text-[16px] font-medium hover:underline"
//           >
//             Edit email
//           </button>
//           <button
//             onClick={resendEmail}
//             className="bg-[#002DA5] text-white px-6 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors"
//           >
//             Resend
//           </button>
//         </div>

//         <p className="text-[16px] font-sarabun font-normal text-[#959596]">
//           Having trouble with verification link?{" "}
//           <button
//             onClick={verifyViaOTP}
//             className="text-[#036204] text-[16px] font-family-sarabun font-semibold hover:underline"
//           >
//             Verify via OTP
//           </button>
//         </p>
//       </div>
//     );
//   }

//   // Original Verification Screen
//   return (
//     <>
//       <div className="p-6 border-b border-gray-200">
//         <div className="flex items-center justify-start gap-3">
//           <div>
//             <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
//               Let's verify your company email id
//             </h2>
//           </div>
//           <div className="flex items-center gap-2 h-[34px] w-[61px] bg-[#FDF3DA] px-3 py-1 rounded-full">
//             <span className="text-[14px] font-sarabun font-normal text-[#FF9046]">
//               Faster
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 space-y-8">
//         <div className="space-y-6">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 mt-1">
//               <div
//                 onClick={() =>
//                   toggleVerificationType("Send me verification link on email")
//                 }
//                 className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                   localFormData.verificationType ===
//                   "Send me verification link on email"
//                     ? "border-[#1A98FF] bg-white"
//                     : "border-gray-300 bg-white"
//                 }`}
//               >
//                 {localFormData.verificationType ===
//                   "Send me verification link on email" && (
//                   <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                 )}
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Send me verification link on email
//                 </span>
//                 <Image
//                   src="/assets/info.png"
//                   alt="Info"
//                   width={17}
//                   height={17}
//                   className="cursor-pointer"
//                 />
//               </div>
//               {localFormData.verificationType ===
//                 "Send me verification link on email" && (
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   value={localFormData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//                 />
//               )}
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 mt-1">
//               <div
//                 onClick={() => toggleVerificationType("Send me OTP on email")}
//                 className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                   localFormData.verificationType === "Send me OTP on email"
//                     ? "border-[#1A98FF] bg-white"
//                     : "border-gray-300 bg-white"
//                 }`}
//               >
//                 {localFormData.verificationType === "Send me OTP on email" && (
//                   <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
//                 )}
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="text-[16px] font-sarabun font-medium text-[#001242]">
//                   Send me OTP on email
//                 </span>
//                 <Image
//                   src="/assets/info.png"
//                   alt="Info"
//                   width={17}
//                   height={17}
//                   className="cursor-pointer"
//                 />
//               </div>

//               {localFormData.verificationType === "Send me OTP on email" &&
//                 !localFormData.otpSent && (
//                   <input
//                     type="email"
//                     placeholder="Enter email address"
//                     value={localFormData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//                   />
//                 )}

//               {localFormData.verificationType === "Send me OTP on email" &&
//                 localFormData.otpSent && (
//                   <div className="space-y-3">
//                     <p className="text-[16px] font-sarabun font-normal text-[#001242]">
//                       <span className="text-[#959596]">Enter OTP sent to</span>{" "}
//                       {localFormData.email || "abc@tatagroup.com"}
//                     </p>
//                     <input
//                       type="text"
//                       placeholder="Enter 4 digit OTP"
//                       value={localFormData.otp}
//                       onChange={(e) => handleInputChange("otp", e.target.value)}
//                       maxLength="4"
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
//                     />
//                     {isTimerActive && (
//                       <p className="text-[14px] font-sarabun font-medium text-[#FF4444]">
//                         {formatTime(timer)}
//                       </p>
//                     )}
//                   </div>
//                 )}
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 min-h-[200px]"></div>

//         <div className="flex items-center justify-between">
//           <div>
//             {/* UPDATE THIS LINE: Change the onClick handler */}
//             <button 
//               onClick={handleManualKYCClick}
//               className="text-[#1A98FF] font-sarabun text-[16px] font-medium underline hover:no-underline"
//             >
//               Manual KYC verification
//             </button>
//           </div>

//           <div className="flex items-center gap-4">
//             {localFormData.verificationType === "Send me OTP on email" &&
//               localFormData.otpSent && (
//                 <button
//                   onClick={onBack}
//                   className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-gray-300 transition-colors"
//                 >
//                   Back
//                 </button>
//               )}

//             <button
//               onClick={handleContinueClick}
//               className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors"
//             >
//               {getButtonText()}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VerificationForm;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ManualKYCVerification from "./ManualKYCVerification"; 
import VerifyYourselfFlow from "./VerifyYourselfFlow"; 
import VerifyCompanyFlow from "./VerifyCompanyFlow";

function VerificationForm({ onContinue, onBack, formData, updateFormData }) {
  const [localFormData, setLocalFormData] = useState({
    verificationType: "Send me verification link on email",
    email: "",
    otp: "",
    otpSent: false,
    otpVerified: false,
    companySelected: "",
    employeeCount: "",
    emailVerificationSent: false,
    isVerifyYourselfCompleted: false, // NEW: Track completion
    ...formData,
  });

  const companies = [
    "Tata Steel",
    "TCS",
    "Infosys",
    "Wipro",
    "HCL Technologies",
    "Tech Mahindra",
    "Cognizant",
    "Accenture",
    "IBM",
    "Microsoft",
    "Google",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
    "Tesla",
    "Salesforce",
    "Oracle",
    "SAP",
    "Adobe",
    "Uber",
    "Airbnb",
    "Spotify",
    "Zoom",
    "Slack",
    "Reliance Industries",
    "HDFC Bank",
    "ICICI Bank",
    "Bajaj Finance",
    "Asian Paints",
  ];

  const [timer, setTimer] = useState(25);
  const [isTimerActive, setIsTimerActive] = useState(false);
  // Updated currentScreen with verifyCompany option
  const [currentScreen, setCurrentScreen] = useState("verification"); // verification, company, emailSent, manualKYC, verifyYourself, verifyCompany

  const handleInputChange = (field, value) => {
    const newData = { ...localFormData, [field]: value };
    setLocalFormData(newData);
    updateFormData && updateFormData(newData);
  };

  const toggleVerificationType = (type) => {
    const newData = {
      ...localFormData,
      verificationType: type,
      otpSent: false,
      otp: "",
      otpVerified: false,
    };
    setLocalFormData(newData);
    updateFormData && updateFormData(newData);

    // Reset timer state
    setIsTimerActive(false);
    setTimer(25);
  };

  const sendOTP = () => {
    handleInputChange("otpSent", true);
    setIsTimerActive(true);
    setTimer(25);
  };

  const confirmOTP = () => {
    console.log("Confirming OTP:", localFormData.otp);
    handleInputChange("otpVerified", true);

    if (localFormData.verificationType === "Send me OTP on email") {
      setCurrentScreen("company");
    } else {
      setCurrentScreen("emailSent");
    }
  };

  const confirmCompany = () => {
    console.log("Company confirmed:", localFormData.companySelected);
    console.log("Employee count:", localFormData.employeeCount);
    setCurrentScreen("emailSent");
    handleInputChange("emailVerificationSent", true);
  };

  const resendEmail = () => {
    console.log("Resending verification email");
  };

  const editEmail = () => {
    setCurrentScreen("verification");
    setLocalFormData({
      ...localFormData,
      otpSent: false,
      otpVerified: false,
      emailVerificationSent: false,
    });
  };

  const verifyViaOTP = () => {
    const newData = {
      ...localFormData,
      verificationType: "Send me OTP on email",
      otpSent: false,
      otp: "",
      otpVerified: false,
    };
    setLocalFormData(newData);
    setCurrentScreen("verification");
  };

  // Manual KYC handlers
  const handleManualKYCClick = () => {
    setCurrentScreen("manualKYC");
  };

  const handleBackToEmailVerification = () => {
    setCurrentScreen("verification");
  };

  const handleVerifyYourself = () => {
    setCurrentScreen("verifyYourself");
  };

  // NEW: Handle verify yourself completion
  const handleVerifyYourselfComplete = () => {
    handleInputChange("isVerifyYourselfCompleted", true);
    setCurrentScreen("manualKYC");
  };

  // NEW: Handle verify company
  const handleVerifyCompany = () => {
    setCurrentScreen("verifyCompany");
  };

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getButtonText = () => {
    if (localFormData.verificationType === "Send me OTP on email") {
      if (!localFormData.otpSent) {
        return "Confirm & send OTP";
      } else {
        return "Confirm OTP";
      }
    }
    return "Confirm & send verification link";
  };

  const handleContinueClick = () => {
    if (
      localFormData.verificationType === "Send me OTP on email" &&
      !localFormData.otpSent
    ) {
      sendOTP();
    } else if (
      localFormData.verificationType === "Send me OTP on email" &&
      localFormData.otpSent &&
      !localFormData.otpVerified
    ) {
      confirmOTP();
    } else {
      confirmOTP();
    }
  };

  // Manual KYC Screen
  if (currentScreen === "manualKYC") {
    return (
      <ManualKYCVerification
        onBack={handleBackToEmailVerification}
        onVerifyYourself={handleVerifyYourself}
        onVerifyCompany={handleVerifyCompany}
        isVerifyYourselfCompleted={localFormData.isVerifyYourselfCompleted}
      />
    );
  }

  // Verify Yourself Screen
  if (currentScreen === "verifyYourself") {
    return (
      <VerifyYourselfFlow
        onBack={() => setCurrentScreen("manualKYC")}
        onComplete={handleVerifyYourselfComplete}
      />
    );
  }

  // NEW: Verify Company Screen
  if (currentScreen === "verifyCompany") {
    return (
      <VerifyCompanyFlow
        onBack={() => setCurrentScreen("manualKYC")}
      />
    );
  }

  // Company Confirmation Screen
  if (currentScreen === "company") {
    return (
      <>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
            Confirm company name
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <p className="text-[16px] font-sarabun font-normal text-[#959596]">
              You have chosen a company with your email{" "}
              <span className="text-[#001242] font-medium">
                {localFormData.email || "abc@tatagroup.com"}
              </span>{" "}
              Please confirm which company are you working for from the options
              below:
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-[16px] font-sarabun font-medium text-[#001242]">
                  Which company are you working for?{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <div
                className="max-h-48 overflow-y-auto rounded-lg p-3"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#002DA5 #f1f1f1",
                }}
              >
                <div className="space-y-3">
                  {companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        onClick={() =>
                          handleInputChange("companySelected", company)
                        }
                        className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors ${
                          localFormData.companySelected === company
                            ? "border-[#1A98FF] bg-white"
                            : "border-gray-300 bg-white hover:border-gray-400"
                        }`}
                      >
                        {localFormData.companySelected === company && (
                          <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
                        )}
                      </div>
                      <span
                        className="text-[16px] font-sarabun font-semibold text-[#4A4B4B] cursor-pointer flex-1"
                        onClick={() =>
                          handleInputChange("companySelected", company)
                        }
                      >
                        {company}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[16px] font-sarabun font-medium text-[#001242]">
                  Number of employees? <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "0 - 50",
                  "51 - 100",
                  "101 - 300",
                  "301 - 500",
                  "501 - 1000",
                  "1000 above",
                ].map((range) => (
                  <button
                    key={range}
                    onClick={() => handleInputChange("employeeCount", range)}
                    className={`px-4 py-2 rounded-full border text-[14px] font-sarabun font-normal transition-colors ${
                      localFormData.employeeCount === range
                        ? "border-[#001242] bg-[#001242] text-white"
                        : "border-gray-500 font-semibold text-[#4A4B4B] hover:border-[#001242]"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[100px]"></div>

          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setCurrentScreen("verification")}
              className="text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
            >
              Cancel
            </button>
            <button
              onClick={confirmCompany}
              disabled={
                !localFormData.companySelected || !localFormData.employeeCount
              }
              className="bg-[#002DA5] h-[56px] text-white px-5 py-3 rounded-[12px] font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Confirm & verify
            </button>
          </div>
        </div>
      </>
    );
  }

  // Email Verification Sent Screen
  if (currentScreen === "emailSent") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] p-6 text-center">
        <div className="mb-8">
          <img
            src="/assets/confirm.png"
            alt="Email notification illustration"
            width={246}
            height={246}
            className="object-contain"
          />
        </div>

        <h2 className="text-[28px] font-family-sarabun font-semibold text-[#001242] mb-3">
          Check your inbox to verify your email
        </h2>

        <p className="text-[16px] font-sarabun font-normal text-[#959596] mb-8 max-w-2xl">
          To confirm it's yours and verify your account, click on the link we
          sent to :{" "}
          <span className="text-[#001242] font-medium">
            {localFormData.email || "abc@tatagroup.com"}
          </span>
        </p>

        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={editEmail}
            className="text-[#4A4B4B] font-sarabun text-[16px] font-medium hover:underline"
          >
            Edit email
          </button>
          <button
            onClick={resendEmail}
            className="bg-[#002DA5] text-white px-6 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors"
          >
            Resend
          </button>
        </div>

        <p className="text-[16px] font-sarabun font-normal text-[#959596]">
          Having trouble with verification link?{" "}
          <button
            onClick={verifyViaOTP}
            className="text-[#036204] text-[16px] font-family-sarabun font-semibold hover:underline"
          >
            Verify via OTP
          </button>
        </p>
      </div>
    );
  }

  // Original Verification Screen
  return (
    <>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-start gap-3">
          <div>
            <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
              Let's verify your company email id
            </h2>
          </div>
          <div className="flex items-center gap-2 h-[34px] w-[61px] bg-[#FDF3DA] px-3 py-1 rounded-full">
            <span className="text-[14px] font-sarabun font-normal text-[#FF9046]">
              Faster
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div
                onClick={() =>
                  toggleVerificationType("Send me verification link on email")
                }
                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                  localFormData.verificationType ===
                  "Send me verification link on email"
                    ? "border-[#1A98FF] bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {localFormData.verificationType ===
                  "Send me verification link on email" && (
                  <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[16px] font-sarabun font-medium text-[#001242]">
                  Send me verification link on email
                </span>
                <Image
                  src="/assets/info.png"
                  alt="Info"
                  width={17}
                  height={17}
                  className="cursor-pointer"
                />
              </div>
              {localFormData.verificationType ===
                "Send me verification link on email" && (
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={localFormData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
                />
              )}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div
                onClick={() => toggleVerificationType("Send me OTP on email")}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                  localFormData.verificationType === "Send me OTP on email"
                    ? "border-[#1A98FF] bg-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {localFormData.verificationType === "Send me OTP on email" && (
                  <div className="w-4 h-4 bg-[#1A98FF] rounded-full"></div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[16px] font-sarabun font-medium text-[#001242]">
                  Send me OTP on email
                </span>
                <Image
                  src="/assets/info.png"
                  alt="Info"
                  width={17}
                  height={17}
                  className="cursor-pointer"
                />
              </div>

              {localFormData.verificationType === "Send me OTP on email" &&
                !localFormData.otpSent && (
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={localFormData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
                  />
                )}

              {localFormData.verificationType === "Send me OTP on email" &&
                localFormData.otpSent && (
                  <div className="space-y-3">
                    <p className="text-[16px] font-sarabun font-normal text-[#001242]">
                      <span className="text-[#959596]">Enter OTP sent to</span>{" "}
                      {localFormData.email || "abc@tatagroup.com"}
                    </p>
                    <input
                      type="text"
                      placeholder="Enter 4 digit OTP"
                      value={localFormData.otp}
                      onChange={(e) => handleInputChange("otp", e.target.value)}
                      maxLength="4"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002DA5] focus:border-[#002DA5] outline-none font-sarabun text-[16px] placeholder-gray-400"
                    />
                    {isTimerActive && (
                      <p className="text-[14px] font-sarabun font-medium text-[#FF4444]">
                        {formatTime(timer)}
                      </p>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[200px]"></div>

        <div className="flex items-center justify-between">
          <div>
            <button 
              onClick={handleManualKYCClick}
              className="text-[#1A98FF] font-sarabun text-[16px] font-medium underline hover:no-underline"
            >
              Manual KYC verification
            </button>
          </div>

          <div className="flex items-center gap-4">
            {localFormData.verificationType === "Send me OTP on email" &&
              localFormData.otpSent && (
                <button
                  onClick={onBack}
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
              )}

            <button
              onClick={handleContinueClick}
              className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[14px] hover:bg-blue-700 transition-colors"
            >
              {getButtonText()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerificationForm;