

// "use client";
// import React from "react";

// function ManualKYCVerification({ onBack, onVerifyYourself, onVerifyCompany }) {
//   return (
//     <>
//       {/* Form Header */}
//       <div className="p-6 border-b border-gray-200">
//         <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
//           Verify now
//         </h2>
//         <p className="text-[16px] font-sarabun font-normal text-[#959596] mt-1">
//           Please complete the verification of your company to get more benefits
//         </p>
//       </div>

//       <div className="p-2">
//         {/* Verification Cards Container */}
//         <div className="flex justify-between gap-3 mb-8 items-end">
//           {/* Verify Yourself Card */}
//           <div
//             className="bg-[#F5F5F5] rounded-[12px] flex flex-col"
//             style={{
//               width: "470px",
//               height: "360px",
//               paddingTop: "16px",
//               paddingRight: "24px",
//               paddingBottom: "16px",
//               paddingLeft: "24px",
//             }}
//           >
//             <div className="flex-1">
//               <h3 className="text-[20px] p-2 border-b border-[#C6C7C8]  font-sarabun font-semibold text-[#001242] mb-4">
//                 Verify yourself
//               </h3>

//               <div className="space-y-3">
//                 {/* Document Required */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Document required
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     Aadhaar / PAN /<br />
//                     Company ID Card
//                   </span>
//                 </div>

//                 {/* Verification Time */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Verification time
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     Instant
//                   </span>
//                 </div>

//                 {/* Job Limit */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Job limit
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     3 jobs
//                   </span>
//                 </div>

//                 {/* Database Limit */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Database limit
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     10 candidate unlocks
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Verify Yourself Button */}
//             <button
//               onClick={onVerifyYourself}
//               className="bg-[#002DA5] text-white rounded-[100px] font-sarabun font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors"
//               style={{
//                 width: "330px",
//                 height: "45px",
//                 gap: "12px",
//                 padding: "12px",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 lineHeight: "100%",
//                 letterSpacing: "-0.3px",
//               }}
//             >
//               Verify yourself
//               <img
//                 src="/assets/button_arrow.png"
//                 alt="Arrow"
//                 className="mt-1 h-[12px] w-[12px]"
//               />
//             </button>
//           </div>

//           {/* Verify Your Company Card */}
//           <div
//             className="bg-[#F5F5F5] rounded-[12px] flex flex-col"
//             style={{
//               width: "470px",
//               height: "360px",
//               paddingTop: "16px",
//               paddingRight: "24px",
//               paddingBottom: "16px",
//               paddingLeft: "24px",
//             }}
//           >
//             <div className="flex-1">
//               <h3 className="text-[20px] font-sarabun pb-4 border-b border-[#C6C7C8] font-semibold text-[#001242] mb-4">
//                 Verify your company
//               </h3>

//               <div className="space-y-3">
//                 {/* Document Required */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Document required
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     GST / CIN / DIN /<br />
//                     Company PAN
//                   </span>
//                 </div>

//                 {/* Verification Time */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Verification time
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     Upto 4 hours
//                     <br />
//                     (excluding weekends)
//                   </span>
//                 </div>

//                 {/* Job Limit */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Job limit
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     Unlimited
//                   </span>
//                 </div>

//                 {/* Database Limit */}
//                 <div className="flex items-center">
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] flex-1">
//                     Database limit
//                   </span>
//                   <span className="text-[16px] font-sarabun font-normal text-[#001242] mx-4">
//                     :
//                   </span>
//                   <span className="text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
//                     Unlimited
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Verify Company Button */}
//             <button
//               onClick={onVerifyCompany}
//               className="bg-[#FF9046] text-white rounded-[100px] font-sarabun font-semibold flex items-center justify-center hover:bg-orange-600 transition-colors"
//               style={{
//                 width: "330px",
//                 height: "45px",
//                 gap: "12px",
//                 padding: "12px",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 lineHeight: "100%",
//                 letterSpacing: "-0.3px",
//               }}
//             >
//               Verify company
//               <img
//                 src="/assets/button_arrow.png"
//                 alt="Arrow"
//                 className="mt-1 h-[12px] w-[12px]"
//               />
//             </button>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="flex justify-start">
//           <button
//             onClick={onBack}
//             className="text-[#001242] font-sarabun text-[16px] font-medium hover:underline"
//           >
//             Back to email verification
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ManualKYCVerification;


"use client";
import React from "react";

function ManualKYCVerification({ 
  onBack, 
  onVerifyYourself, 
  onVerifyCompany,
  isVerifyYourselfCompleted = false 
}) {
  return (
    <>
      {/* Form Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <h2 className="text-[20px] md:text-[24px] font-sarabun font-semibold text-[#001242] select-none">
          Verify now
        </h2>
        <p className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#959596] mt-1">
          Please complete the verification of your company to get more benefits
        </p>
      </div>

      <div className="p-2 md:p-4">
        {/* Verification Cards Container */}
        <div className={`flex ${isVerifyYourselfCompleted ? 'justify-center' : 'justify-between'} gap-3 mb-6 md:mb-8 items-end flex-col md:flex-row`}>
          
          {/* Verify Yourself Card - Hide when completed */}
          {!isVerifyYourselfCompleted && (
            <div className="bg-[#F5F5F5] rounded-[12px] flex flex-col w-full md:w-[470px] h-[320px] md:h-[360px] p-4 md:p-6">
              <div className="flex-1">
                <h3 className="text-[18px] md:text-[20px] p-2 border-b border-[#C6C7C8] font-sarabun font-semibold text-[#001242] mb-4">
                  Verify yourself
                </h3>

                <div className="space-y-3">
                  {/* Document Required */}
                  <div className="flex items-start md:items-center">
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                      Document required
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                      :
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                      Aadhaar / PAN /<br />
                      Company ID Card
                    </span>
                  </div>

                  {/* Verification Time */}
                  <div className="flex items-center">
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                      Verification time
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                      :
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                      Instant
                    </span>
                  </div>

                  {/* Job Limit */}
                  <div className="flex items-center">
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                      Job limit
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                      :
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                      3 jobs
                    </span>
                  </div>

                  {/* Database Limit */}
                  <div className="flex items-center">
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                      Database limit
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                      :
                    </span>
                    <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                      10 candidate unlocks
                    </span>
                  </div>
                </div>
              </div>

              {/* Verify Yourself Button */}
              <button
                onClick={onVerifyYourself}
                className="bg-[#002DA5] text-white rounded-[100px] font-sarabun font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors w-full md:w-[330px] h-[45px] text-[14px] md:text-[16px] gap-2 md:gap-3 mx-auto"
              >
                Verify yourself
                <img
                  src="/assets/button_arrow.png"
                  alt="Arrow"
                  className="h-[10px] w-[10px] md:h-[12px] md:w-[12px]"
                />
              </button>
            </div>
          )}

          {/* Verify Your Company Card */}
          <div className={`bg-[#F5F5F5] rounded-[12px] flex flex-col w-full ${isVerifyYourselfCompleted ? 'md:w-[600px]' : 'md:w-[470px]'} h-[320px] md:h-[360px] p-4 md:p-6`}>
            <div className="flex-1">
              <h3 className="text-[18px] md:text-[20px] font-sarabun pb-4 border-b border-[#C6C7C8] font-semibold text-[#001242] mb-4">
                Verify your company
              </h3>

              <div className="space-y-3">
                {/* Document Required */}
                <div className="flex items-start md:items-center">
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                    Document required
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                    :
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                    GST / CIN / DIN /<br />
                    Company PAN
                  </span>
                </div>

                {/* Verification Time */}
                <div className="flex items-start md:items-center">
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                    Verification time
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                    :
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                    Upto 4 hours
                    <br />
                    (excluding weekends)
                  </span>
                </div>

                {/* Job Limit */}
                <div className="flex items-center">
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                    Job limit
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                    :
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                    Unlimited
                  </span>
                </div>

                {/* Database Limit */}
                <div className="flex items-center">
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] flex-1">
                    Database limit
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-normal text-[#001242] mx-2 md:mx-4">
                    :
                  </span>
                  <span className="text-[14px] md:text-[16px] font-sarabun font-medium text-[#001242] text-right flex-1">
                    Unlimited
                  </span>
                </div>
              </div>
            </div>

            {/* Verify Company Button */}
            <button
              onClick={onVerifyCompany}
              className="bg-[#FF9046] text-white rounded-[100px] font-sarabun font-semibold flex items-center justify-center hover:bg-orange-600 transition-colors w-full md:w-[330px] h-[45px] text-[14px] md:text-[16px] gap-2 md:gap-3 mx-auto"
            >
              Verify company
              <img
                src="/assets/button_arrow.png"
                alt="Arrow"
                className="h-[10px] w-[10px] md:h-[12px] md:w-[12px]"
              />
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-start">
          <button
            onClick={onBack}
            className="text-[#001242] font-sarabun text-[14px] md:text-[16px] font-medium hover:underline"
          >
            Back to email verification
          </button>
        </div>
      </div>
    </>
  );
}

export default ManualKYCVerification;