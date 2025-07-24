"use client";
import React, { useState } from "react";
import Image from "next/image";

function BenefitsSidebar() {
  const [showWhyVerification, setShowWhyVerification] = useState(false);

  const toggleWhyVerification = () => {
    setShowWhyVerification(!showWhyVerification);
  };

  const benefits = [
    {
      icon: "/assets/benefit-1.png",
      text: "Make jobs live immediately",
    },
    {
      icon: "/assets/benefit-2.png",
      text: "Start receiving applications within 1 hour",
    },
    {
      icon: "/assets/benefit-3.png",
      text: "Get unlimited access to our database of candidates",
    },
    {
      icon: "/assets/benefit-4.png",
      text: "Become verified employer to candidates",
    },
  ];

  return (
    <div className="space-y-4" style={{ width: "300px" }}>
      {/* Box 1: Header */}
      <div className="bg-white border border-gray-200 rounded-[12px] p-3">
        <div className="flex items-center gap-3">
          <Image src="/assets/free-tag.png" alt="Star" width={40} height={40} />
          <div>
            <span className="text-[16px] font-sarabun font-normal text-[#001242]">
              Post all jobs for{" "}
            </span>
            <span className="text-[16px] font-sarabun font-normal text-[#FF9046]">
              free
            </span>
            <span className="text-[16px] font-sarabun font-normal text-[#001242]">
              {" "}
              on
            </span>
            <br />
            <span className="text-[16px] font-sarabun font-normal text-[#001242]">
              Hamara Jobs
            </span>
          </div>
        </div>
      </div>

      {/* Box 2: Coins Only */}
      <div className="bg-white  border border-gray-200 rounded-[24px] p-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image src="/assets/coin.png" alt="Coins" width={80} height={80} />
          </div>

          <div>
            <span className="text-[16px] font-sarabun font-normal text-[#001242]">
              Get{" "}
            </span>
            <span className="text-[16px] font-sarabun font-semibold text-[#FF9046]">
              500 free coins
            </span>
            <span className="text-[16px] font-sarabun font-normal text-[#001242]">
              {" "}
              as
            </span>
          </div>
          <div>
            <span className="text-[16px] font-sarabun font-normal text-[#001242]">
              welcome gift!
            </span>
          </div>
          <p className="text-[14px] font-sarabun font-normal text-[#959596]">
            Unlock candidates using these coins
          </p>
        </div>
      </div>

      {/* Box 3: Why Verification + Benefits List */}

      {/* Why Verification Dropdown Button */}
      <div>
        <button
          onClick={toggleWhyVerification}
          className="w-full bg-[#CCD5ED] text-[#002DA5] px-4 py-3 rounded-[12px] font-sarabun font-medium flex items-center justify-between hover:bg-[#B5C4FF] transition-colors"
        >
          <div className="flex items-center gap-3">
            {/* Question mark icon in blue circle */}
            <Image
              src="/assets/question.png"
              alt="Question"
              width={40}
              height={40}
            />
            <span className="text-[16px] font-sarabun font-medium">
              Why verification ?
            </span>
          </div>
          <Image
            src="/assets/dropdown-icon.png"
            alt="Toggle"
            width={14}
            height={14}
            className={`transition-transform ${
              showWhyVerification ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Content - 4 Benefits List */}
        {showWhyVerification && (
          <div className=" pt-3 space-y-5 bg-white">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 px-5">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={benefit.icon}
                    alt="Benefit"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-[16px] font-sarabun font-normal text-[#001242] leading-6">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BenefitsSidebar;
