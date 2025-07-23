"use client";
import React, { useState } from "react";
import JobFormLayout from "./JobFormLayout";
import BasicDetailsContent from "./BasicDetailsContent";
import JobRequirementsForm from "./JobRequirementsForm";
import ContactDetailsForm from "./ContactDetailsForm";

const JobPostingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicDetailsContent onContinue={handleContinue} />;
      case 2:
        return (
          <JobRequirementsForm
            onContinue={handleContinue}
            onBack={handleBack}
          />
        );
     case 3:
  return (
    <ContactDetailsForm
      onContinue={handleContinue}
      onBack={handleBack}
    />
  );
      case 4:
        return (
          <div>
            {/* Form Header */}
            <div className="p-3 border-b border-gray-200">
              <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
                Verification
              </h2>
              <p className="text-[16px] font-me' font-sarabun text-[#959596] mt-1 select-none">
                Verify your details
              </p>
            </div>
            <div className="p-6">
              <p className="text-center text-gray-500">Verification form </p>
            </div>
          </div>
        );
      default:
        return <BasicDetailsContent onContinue={handleContinue} />;
    }
  };

  return (
    <JobFormLayout
      currentStep={currentStep}
      onContinue={handleContinue}
      onBack={handleBack}
      showBackButton={currentStep > 1}
    >
      {renderStepContent()}
    </JobFormLayout>
  );
};

export default JobPostingForm;