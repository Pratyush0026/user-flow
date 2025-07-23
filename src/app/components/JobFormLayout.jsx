"use client";
import React from "react";
import Image from "next/image";

const JobFormLayout = ({
  currentStep = 1,
  children,
  onContinue,
  onBack,
  showBackButton = false,
}) => {
  const steps = [
    { id: 1, label: "1. Basic details" },
    { id: 2, label: "2. Job requirements" },
    { id: 3, label: "3. Contact details" },
    { id: 4, label: "4. Verification" },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "Sarabun, sans-serif" }}
    >
      {/* AI Search Prompt Section */}
      <div
        className="bg-hamara-blue px-4 sm:px-6 lg:px-8 py-6"
        style={{
          height: "104px",
          borderBottomRightRadius: "60px",
          borderBottomLeftRadius: "60px",
        }}
      >
        <div className="max-w-6xl mx-auto h-full flex items-center">
          <div className="relative w-full">
            <div className="flex items-center bg-transparent rounded-full px-6 py-4">
              <Image
                src="/assets/star-icon.png"
                alt="Search"
                width={24}
                height={24}
                className="mr-4"
              />

              <input
                type="text"
                placeholder="I want candidates by skill or location..."
                className="flex-1 outline-none font-sarabun bg-transparent placeholder-[#C6C7C8]"
                style={{
                  fontSize: "32px",
                  fontWeight: "400",
                  lineHeight: "100%",
                  letterSpacing: "-0.3px",
                  caretColor: "#FF9046",
                  color: "#C6C7C8",
                }}
              />

              <div className="flex items-center gap-2.5 ml-6">
                <button
                  className="hover:bg-white/10 flex items-center justify-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/assets/voice-icon.png"
                    alt="Voice"
                    width={50}
                    height={50}
                  />
                </button>

                <button
                  className="hover:bg-white/10 flex items-center justify-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/assets/setting-icon.png"
                    alt="Filter"
                    width={50}
                    height={50}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 mt-10 select-none">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center justify-between"
            style={{
              height: "40px",
              width: "1024px",
              margin: "0 auto",
            }}
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step */}
                <div className="flex items-center select-none">
                  <div className="flex-shrink-0 select-none">
                    <Image
                      src={
                        step.id === currentStep || step.id < currentStep
                          ? "/assets/activestep-icon.png"
                          : "/assets/inactive-step-icon.png"
                      }
                      alt={
                        step.id === currentStep || step.id < currentStep
                          ? "Active Step"
                          : "Inactive Step"
                      }
                      width={40}
                      height={40}
                    />
                  </div>
                  <span
                    className="ml-3 font-sarabun whitespace-nowrap select-none"
                    style={{
                      fontWeight:
                        step.id === currentStep || step.id < currentStep
                          ? "500"
                          : "400",
                      fontSize: "16px",
                      lineHeight: "28px",
                      letterSpacing: "-0.3px",
                      color:
                        step.id === currentStep || step.id < currentStep
                          ? "#002DA5"
                          : "#6B7280",
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div
                    className="flex-1 mx-4 select-none"
                    style={{
                      height: "3px",
                      backgroundColor:
                        step.id < currentStep ? "#002DA5" : "#C6C7C8",
                      maxWidth: "120px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6">
            {/* Left Sidebar - Preview */}
            <div className="flex-shrink-0">
              <div
                className="bg-white shadow-sm border border-gray-200"
                style={{
                  width: "392px",
                  height: "493px",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/assets/star-icon.png"
                    alt="Preview"
                    width={20}
                    height={20}
                  />
                  <span className="font-sarabun font-medium text-sm text-gray-600">
                    Job Preview
                  </span>
                </div>

                {/* Preview Card */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form */}
            <div className="flex-1 min-w-0">
              <div
                className="bg-white shadow-sm border border-gray-200 w-full"
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                {children}

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-4 pt-4">
                  {showBackButton && (
                    <button
                      onClick={onBack}
                      className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-sarabun font-medium hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={onContinue}
                    className="bg-hamara-blue text-white px-8 py-3 rounded-lg font-sarabun font-medium hover:bg-blue-700 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFormLayout;
