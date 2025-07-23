"use client";
import React, { useState } from "react";
import Image from "next/image";

const JobRequirementsForm = ({ onContinue, onBack }) => {
  const [formData, setFormData] = useState({
    minimumEducation: "",
    experienceRequired: "Experienced",
    salaryFrom: "",
    salaryTo: "",
    genderPreference: "Male",
    additionalRequirements: [],
    suggestedSkills: ["Winning attitude", "Public speaking"],
    payDeposit: "Yes",
  });

  const [expandedSections, setExpandedSections] = useState({
    basicJobDetails: true,
  });

  const [showCustomSkillInput, setShowCustomSkillInput] = useState(false);

  const [customRequirement, setCustomRequirement] = useState("");
  const [customSkill, setCustomSkill] = useState("");

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

  const toggleExperience = (experience) => {
    setFormData((prev) => ({
      ...prev,
      experienceRequired: experience,
    }));
  };

  const toggleGenderPreference = (gender) => {
    setFormData((prev) => ({
      ...prev,
      genderPreference: gender,
    }));
  };

  const toggleAdditionalRequirement = (requirement) => {
    setFormData((prev) => ({
      ...prev,
      additionalRequirements: prev.additionalRequirements.includes(requirement)
        ? prev.additionalRequirements.filter((r) => r !== requirement)
        : [...prev.additionalRequirements, requirement],
    }));
  };

  const addCustomRequirement = () => {
    if (customRequirement.trim()) {
      toggleAdditionalRequirement(customRequirement.trim());
      setCustomRequirement("");
    }
  };

  const toggleSuggestedSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      suggestedSkills: prev.suggestedSkills.includes(skill)
        ? prev.suggestedSkills.filter((s) => s !== skill)
        : [...prev.suggestedSkills, skill],
    }));
  };

  const addCustomSkill = () => {
    if (customSkill.trim()) {
      toggleSuggestedSkill(customSkill.trim());
      setCustomSkill("");
    }
  };

  const togglePayDeposit = (option) => {
    setFormData((prev) => ({
      ...prev,
      payDeposit: option,
    }));
  };

  return (
    <>
      {/* Form Header */}
      <div className="p-3 border-b border-gray-200">
        <h2 className="text-[24px] font-sarabun font-semibold text-[#001242] select-none">
          Job requirements
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
              {/* Minimum Education */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Minimum education<span className="text-red-500"> *</span>
                </label>
                <select
                  value={formData.minimumEducation}

                  onChange={(e) =>
                    handleInputChange("minimumEducation", e.target.value)
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
                  <option value="10th">10th Pass</option>
                  <option value="12th">12th Pass</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                </select>
              </div>

              {/* Experience Required */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Experience required<span className="text-red-500"> *</span>
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleExperience("Experienced")}
                    className={`px-4 py-2 h-[42px] w-[120px] rounded-lg font-sarabun text-sm font-medium select-none ${
                      formData.experienceRequired === "Experienced"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Experienced
                  </button>
                  <button
                    onClick={() => toggleExperience("Fresher")}
                    className={`px-4 py-2 h-[42px] w-[120px] rounded-lg font-sarabun text-sm font-medium select-none ${
                      formData.experienceRequired === "Fresher"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Fresher
                  </button>
                </div>
              </div>

              {/* Salary per month */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Salary per month<span className="text-red-500"> *</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Min. age"
                      value={formData.salaryFrom}
                      onChange={(e) =>
                        handleInputChange("salaryFrom", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-[16px] font-sarabun text-[#959596] mr-4">
                      To
                    </span>
                    <input
                      type="text"
                      placeholder="Max. age"
                      value={formData.salaryTo}
                      onChange={(e) =>
                        handleInputChange("salaryTo", e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Gender preferences */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Gender preferences<span className="text-red-500"> *</span>
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleGenderPreference("Male")}
                    className={`px-4 py-2 h-[42px] w-[80px] rounded-lg font-sarabun text-sm font-medium ${
                      formData.genderPreference === "Male"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => toggleGenderPreference("Female")}
                    className={`px-4 py-2 h-[42px] w-[80px] rounded-lg font-sarabun text-sm font-medium ${
                      formData.genderPreference === "Female"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Female
                  </button>
                  <button
                    onClick={() => toggleGenderPreference("Any")}
                    className={`px-4 py-2 h-[42px] w-[80px] rounded-lg font-sarabun text-sm font-medium ${
                      formData.genderPreference === "Any"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Any
                  </button>
                </div>
              </div>

              {/* Additional requirements */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Additional requirements
                </label>
                <div className="flex gap-2 flex-wrap mb-3">
                  {[
                    "Aadhar card",
                    "Bank proof",
                    "Bike",
                    "Driving license",
                    "Education proof",
                    "PAN card",
                  ].map((requirement) => (
                    <button
                      key={requirement}
                      onClick={() => toggleAdditionalRequirement(requirement)}
                      className={`px-3 py-1 h-[42px] rounded-full text-sm font-sarabun select-none border ${
                        formData.additionalRequirements.includes(requirement)
                          ? "bg-[#002DA5] text-white border-[#002DA5]"
                          : "bg-white text-[#002DA5] border-[#002DA5] hover:bg-gray-50"
                      }`}
                    >
                      {requirement}
                      {formData.additionalRequirements.includes(
                        requirement
                      ) && <span className="ml-1 text-[16px]">×</span>}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Enter other requirements"
                  value={customRequirement}
                  onChange={(e) => setCustomRequirement(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addCustomRequirement();
                    }
                  }}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
                />
              </div>

              {/* Suggested skills */}
           <div>
  <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
    Suggested skills
  </label>
  <div className="flex gap-2 flex-wrap mb-3">
    {formData.suggestedSkills.map((skill) => (
      <button
        key={skill}
        onClick={() => toggleSuggestedSkill(skill)}
        className="px-3 py-1 h-[42px] rounded-full text-sm font-sarabun select-none bg-[#002DA5] text-white"
      >
        {skill}
        <span className="ml-1 text-[16px]">×</span>
      </button>
    ))}
    {["Decision making", "Problem solving", "Work smartly"].map(
      (skill) => (
        <button
          key={skill}
          onClick={() => toggleSuggestedSkill(skill)}
          className={`px-3 py-1 h-[42px] rounded-full text-sm font-sarabun select-none border ${
            formData.suggestedSkills.includes(skill)
              ? "bg-[#002DA5] text-white border-[#002DA5]"
              : "bg-white text-[#002DA5] border-[#002DA5] hover:bg-gray-50"
          }`}
        >
          {skill}
          {formData.suggestedSkills.includes(skill) && (
            <span className="ml-1 text-[16px]">×</span>
          )}
        </button>
      )
    )}
    
    {/* More skill button - only show when input is not visible */}
    {!showCustomSkillInput && (
      <button
        onClick={() => setShowCustomSkillInput(true)}
        className="flex items-center justify-center gap-1 px-3 py-1 h-[42px] rounded-full text-sm select-none border border-[#FF9046] font-sarabun hover:bg-[#F5D982] transition-colors"
        style={{
          backgroundColor: "#FBE8B5",
          fontWeight: "600",
          fontSize: "14px",
          color: "#FF9046",
        }}
      >
        <span className="text-[16px]">+</span>
        <span className="whitespace-nowrap">More skill</span>
      </button>
    )}
  </div>
  
  {/* Input field - only show when More skill is clicked */}
  {showCustomSkillInput && (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Enter other requirements"
        value={customSkill}
        onChange={(e) => setCustomSkill(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addCustomSkill();
            setShowCustomSkillInput(false);
          }
        }}
        className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-hamara-blue focus:border-hamara-blue outline-none font-sarabun text-sm"
        style={{ width: "calc(100% - 107px)" }}
        autoFocus
      />
      <button
        onClick={() => {
          addCustomSkill();
          setShowCustomSkillInput(false);
        }}
        className="flex items-center justify-center gap-1 text-sm select-none border border-[#FF9046] rounded-lg font-sarabun hover:bg-[#F5D982] transition-colors"
        style={{
          minWidth: "99px",
          width: "99px",
          height: "42px",
          backgroundColor: "#FBE8B5",
          padding: "8px",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#FF9046",
        }}
      >
        <span className="text-[16px]">+</span>
        <span className="whitespace-nowrap">More skill</span>
      </button>
    </div>
  )}
</div>

              {/* Pay deposit question */}
              <div>
                <label className="block text-[16px] font-sarabun font-semibold text-[#001242] mb-2 select-none">
                  Does the candidate need to pay any deposit amount to get this
                  job?
                  <span className="text-red-500"> *</span>
                </label>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => togglePayDeposit("Yes")}
                    className={`px-4 py-2 h-[42px] w-[80px] rounded-lg font-sarabun text-sm font-medium select-none ${
                      formData.payDeposit === "Yes"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => togglePayDeposit("No")}
                    className={`px-4 py-2 h-[42px] w-[80px] rounded-lg font-sarabun text-sm font-medium select-none ${
                      formData.payDeposit === "No"
                        ? "bg-[#002DA5] text-white"
                        : "bg-[#CCD5ED] text-[#6681C9] hover:bg-[#B8C7E6]"
                    }`}
                  >
                    No
                  </button>
                </div>
                <div className="bg-[#FBE8B5] rounded-lg p-3 flex items-start gap-2 select-none">
                  <img
                    src="/assets/warning.png"
                    alt="Warning"
                    className="mt-0.5"
                    style={{
                      width: "18px",
                      height: "16px",
                      transform: "rotate(0deg)",
                      opacity: 1,
                    }}
                  />
                  <p className="text-[14px] font-sarabun font-normal text-[#001242] select-none">
                    If found asking for deposit money without declaring it here,
                    your account will be disabled.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobRequirementsForm;
