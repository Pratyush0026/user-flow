"use client";
import React from "react";
import Image from "next/image";

const StatsSection = ({ className = "" }) => {
  const statisticsData = [
    {
      icon: "jobs-icon.png", // Update with your actual icon names
      number: "5 Lakh +",
      description: "Jobs posted",
    },
    {
      icon: "interviews-icon.png", // Update with your actual icon names
      number: "1 Crore +",
      description: "Interviews aligned",
    },
    {
      icon: "fulfilled-icon.png", // Update with your actual icon names
      number: "70 %",
      description: "Jobs fulfilled within 24hrs",
    },
    {
      icon: "database-icon.png", // Update with your actual icon names
      number: "4 Lakh +",
      description: "Database searches",
    },
  ];

  return (
    <div className={`w-full bg-[#F5F5F5] ${className}`}>
      <div
        className="flex flex-col justify-center items-start w-full max-w-7xl mx-auto rounded-[72px] bg-[#F5F5F5]"
        style={{
          minHeight: "452px",
          padding: "56px 24px",
          gap: "40px",
        }}
      >
        {/* Text Section */}
        <div className="flex flex-col gap-4 w-full text-left">
          {/* Main Heading */}
          <h2
            className="font-poppins font-semibold text-hamara-dark leading-none"
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              letterSpacing: "normal",
            }}
          >
            Recruit with confidence
          </h2>

          {/* Subtitle */}
          <p
            className="font-sarabun font-normal text-hamara-gray leading-none"
            style={{
              fontSize: "clamp(24px, 4.5vw, 40px)",
              letterSpacing: "normal",
            }}
          >
            Get qualifying candidates for your job roles
          </p>
        </div>

        {/* Statistics Cards Container */}
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start bg-white rounded-3xl flex-1"
              style={{
                padding: "24px 32px",
                gap: "8px",
                minHeight: "140px",
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-2">
                <div
                  className="flex items-center justify-center bg-hamara-blue rounded-full"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <Image
                    src={`/assets/${stat.icon}`}
                    alt={stat.description}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Number */}
              <h3
                className="font-sarabun font-extrabold text-hamara-blue leading-none"
                style={{
                  fontSize: "clamp(28px, 5vw, 40px)",
                  letterSpacing: "-0.3px",
                }}
              >
                {stat.number}
              </h3>

              {/* Description */}
              <p
                className="font-sarabun font-normal text-hamara-dark leading-none"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  letterSpacing: "-0.3px",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .statistics-container {
            padding: 40px 48px !important;
            border-radius: 48px !important;
          }
        }

        @media (max-width: 768px) {
          .statistics-container {
            padding: 32px 24px !important;
            border-radius: 32px !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 640px) {
          .statistics-container {
            padding: 24px 16px !important;
            border-radius: 24px !important;
            gap: 24px !important;
          }

          .stat-card {
            padding: 20px 24px !important;
            min-height: 120px !important;
          }
        }

        @media (max-width: 480px) {
          .statistics-container {
            padding: 20px 12px !important;
            gap: 20px !important;
          }

          .stat-card {
            padding: 16px 20px !important;
            min-height: 100px !important;
          }
        }
      `}</style>
    </div>
  );
};

// Alternative version with more precise responsive control
const StatisticsSectionPrecise = ({ className = "" }) => {
  const statisticsData = [
    {
      icon: "jobs-icon.png",
      number: "5 Lakh +",
      description: "Jobs posted",
    },
    {
      icon: "interviews-icon.png",
      number: "1 Crore +",
      description: "Interviews aligned",
    },
    {
      icon: "fulfilled-icon.png",
      number: "70 %",
      description: "Jobs fulfilled within 24hrs",
    },
    {
      icon: "database-icon.png",
      number: "4 Lakh +",
      description: "Database searches",
    },
  ];

  return (
    <section className={`w-full py-8 lg:py-16 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
        <div
          className="flex flex-col justify-center items-start w-full rounded-[72px] bg-[#F5F5F5] statistics-container"
          style={{
            minHeight: "452px",
            padding: "56px 96px",
            gap: "40px",
          }}
        >
          {/* Text Section */}
          <div className="flex flex-col gap-4 w-full">
            {/* Main Heading */}
            <h2
              className="font-poppins font-semibold text-hamara-dark leading-none"
              style={{
                fontSize: "clamp(32px, 6vw, 56px)",
              }}
            >
              Recruit with confidence
            </h2>

            {/* Subtitle */}
            <p
              className="font-sarabun font-normal text-hamara-gray leading-none"
              style={{
                fontSize: "clamp(24px, 4.5vw, 40px)",
              }}
            >
              Get qualifying candidates for your job roles
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {statisticsData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start bg-white rounded-3xl stat-card hover:shadow-lg transition-shadow duration-300"
                style={{
                  padding: "24px 32px",
                  gap: "8px",
                  minHeight: "140px",
                }}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 mb-2">
                  <Image
                    src={`/assets/${stat.icon}`}
                    alt={stat.description}
                    width={60}
                    height={60}
                    className="object-contain"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>

                {/* Statistics Number */}
                <h3
                  className="font-sarabun font-extrabold text-hamara-blue leading-none"
                  style={{
                    fontSize: "clamp(28px, 5vw, 40px)",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {stat.number}
                </h3>

                {/* Description Text */}
                <p
                  className="font-sarabun font-normal text-hamara-dark leading-none"
                  style={{
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
