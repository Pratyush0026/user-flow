// "use client";
// import React, { useState } from "react";
// import JobFormLayout from "./JobFormLayout";
// import BasicDetailsContent from "./BasicDetailsContent";
// import JobRequirementsForm from "./JobRequirementsForm";
// import ContactDetailsForm from "./ContactDetailsForm";

// const JobPostingForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleContinue = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return <BasicDetailsContent onContinue={handleContinue} />;
//       case 2:
//         return (
//           <JobRequirementsForm
//             onContinue={handleContinue}
//             onBack={handleBack}
//           />
//         );
//       case 3:
//         return (
//           <ContactDetailsForm onContinue={handleContinue} onBack={handleBack} />
//         );
//       case 4:
//         return (
//           <div>
//             {/* Form Header */}
//             <div className="p-3 border-b border-gray-200">
//               <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
//                 Verification
//               </h2>
//               <p className="text-[16px] font-me' font-sarabun text-[#959596] mt-1 select-none">
//                 Verify your details
//               </p>
//             </div>
//             <div className="p-6">
//               <p className="text-center text-gray-500">Verification form </p>
//             </div>
//           </div>
//         );
//       default:
//         return <BasicDetailsContent onContinue={handleContinue} />;
//     }
//   };

//   return (
//     <JobFormLayout
//       currentStep={currentStep}
//       onContinue={handleContinue}
//       onBack={handleBack}
//       showBackButton={currentStep > 1}
//     >
//       {renderStepContent()}
//     </JobFormLayout>
//   );
// };

// export default JobPostingForm;


"use client";
import React, { useState } from "react";
import JobFormLayout from "./JobFormLayout";
import BasicDetailsContent from "./BasicDetailsContent";
import JobRequirementsForm from "./JobRequirementsForm";
import ContactDetailsForm from "./ContactDetailsForm";
import VerificationForm from "./VerificationForm";
import BenefitsSidebar from "./BenefitsSidebar";

const JobPostingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state to collect all form information
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    basicDetails: {
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
      selectedBenefits: ["Incentives"],
      selectedApplicationSource: "Within 25 KM",
    },
    // Step 2: Job Requirements
    jobRequirements: {
      minimumEducation: "",
      experienceRequired: "Experienced",
      salaryFrom: "",
      salaryTo: "",
      genderPreference: "Male",
      additionalRequirements: [],
      suggestedSkills: ["Winning attitude", "Public speaking"],
      payDeposit: "Yes",
    },
    // Step 3: Contact Details
    contactDetails: {
      communicationPreference: "Call + Whatsapp",
      companyName: "",
      recruiterName: "",
      contactNumber: "",
      contactEmail: "",
    },
    // Step 4: Verification
    verification: {
      verificationType: "Send me verification link on email",
      email: "",
    },
  });

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      handleFormSubmission();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmission = () => {
    console.log("Complete Form Data:", formData);
    
    
    
    // Example API call structure:
    /*
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Job posted successfully:', result);
        // Redirect to success page or show success message
      } else {
        console.error('Failed to post job');
        // Handle error
      }
    } catch (error) {
      console.error('Error posting job:', error);
      // Handle network error
    }
    */
    
    alert("Form submitted successfully! Check console for form data.");
  };

  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        ...data,
      },
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicDetailsContent
            onContinue={handleContinue}
            formData={formData.basicDetails}
            updateFormData={(data) => updateFormData("basicDetails", data)}
          />
        );
      case 2:
        return (
          <JobRequirementsForm
            onContinue={handleContinue}
            onBack={handleBack}
            formData={formData.jobRequirements}
            updateFormData={(data) => updateFormData("jobRequirements", data)}
          />
        );
      case 3:
        return (
          <ContactDetailsForm
            onContinue={handleContinue}
            onBack={handleBack}
            formData={formData.contactDetails}
            updateFormData={(data) => updateFormData("contactDetails", data)}
          />
        );
      case 4:
        return (
          <VerificationForm
            onContinue={handleContinue}
            onBack={handleBack}
            formData={formData.verification}
            updateFormData={(data) => updateFormData("verification", data)}
          />
        );
      default:
        return (
          <BasicDetailsContent
            onContinue={handleContinue}
            formData={formData.basicDetails}
            updateFormData={(data) => updateFormData("basicDetails", data)}
          />
        );
    }
  };

  const getStepValidation = () => {
    // Add validation logic for each step
    switch (currentStep) {
      case 1:
        return (
          formData.basicDetails.jobTitle &&
          formData.basicDetails.city &&
          formData.basicDetails.locality &&
          formData.basicDetails.salaryPerMonth &&
          formData.basicDetails.noOfOpenings &&
          formData.basicDetails.workingDays &&
          formData.basicDetails.workingShift &&
          formData.basicDetails.jobDescription &&
          formData.basicDetails.jobDescription.length >= 50
        );
      case 2:
        return (
          formData.jobRequirements.minimumEducation &&
          formData.jobRequirements.salaryFrom &&
          formData.jobRequirements.salaryTo
        );
      case 3:
        return (
          formData.contactDetails.companyName &&
          formData.contactDetails.recruiterName &&
          formData.contactDetails.contactNumber &&
          formData.contactDetails.contactEmail
        );
      case 4:
        return (
          formData.verification.verificationType &&
          (formData.verification.verificationType === "Send me OTP on email" ||
            formData.verification.email)
        );
      default:
        return true;
    }
  };

  const isStepValid = getStepValidation();

  return (
    <JobFormLayout
      currentStep={currentStep}
      onContinue={handleContinue}
      onBack={handleBack}
      showBackButton={currentStep > 1}
      rightSidebarContent={currentStep === 4 ? <BenefitsSidebar /> : null}
      isStepValid={isStepValid}
    >
      {renderStepContent()}
    </JobFormLayout>
  );
};

export default JobPostingForm;