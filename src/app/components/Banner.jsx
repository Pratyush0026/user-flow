'use client'
import React from 'react';
import Image from 'next/image';

const HRBanner = ({
  onExploreClick = () => console.log('Explore HR clicked'),
  className = ""
}) => {
  return (
    <div 
      className={`w-full bg-[#F1264F] ${className}`}
      role="banner"
      aria-label="HR Tools Promotion"
    >
      {/* Desktop Version - Exact Figma Specs */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-[1440px] mx-auto px-12 py-3">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <p className="m-0">
            <span 
              className="text-white font-sarabun font-medium leading-normal"
              style={{
                fontSize: '20px',
                letterSpacing: '-0.3px'
              }}
            >
              Empower your HR team with the tools they need to enhance efficiency and{' '}
            </span>
            <span 
              className="text-[#F9DC8F] font-sarabun font-semibold leading-normal"
              style={{
                fontSize: '20px',
                letterSpacing: '-0.3px'
              }}
            >
              faster growth
            </span>
          </p>
        </div>

        {/* Right Side - Explore Button */}
        <button
          onClick={onExploreClick}
          className="flex items-center justify-center bg-white rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F1264F] transition-all duration-200"
          style={{
            height: '52px',
            padding: '0 24px',
            gap: '10px'
          }}
          aria-label="Explore Hamara HR tools"
        >
          <span 
            className="text-[#001242] font-sarabun font-medium leading-normal whitespace-nowrap"
            style={{
              fontSize: '16px',
              letterSpacing: '-0.3px'
            }}
          >
            Explore
          </span>
          
          <Image
            src="/assets/hamarahr-logo.png"
            alt="Hamara HR"
            width={138}
            height={24}
            className="object-contain"
            priority
          />
        </button>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:flex lg:hidden items-center justify-between w-full mx-auto px-12 py-3">
        <div className="flex-1 pr-4">
          <p className="m-0">
            <span className="text-white font-sarabun font-medium text-lg leading-normal tracking-[-0.3px]">
              Empower your HR team with the tools they need to enhance efficiency and{' '}
            </span>
            <span className="text-[#F9DC8F] font-sarabun font-semibold text-lg leading-normal tracking-[-0.3px]">
              faster growth
            </span>
          </p>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center justify-center bg-white rounded-xl hover:bg-gray-50 transition-all duration-200"
          style={{ height: '48px', padding: '0 20px', gap: '8px' }}
        >
          <span className="text-[#001242] font-sarabun font-medium text-[15px] leading-normal tracking-[-0.3px] whitespace-nowrap">
            Explore
          </span>
          <Image
            src="/assets/hamarahr-logo.png"
            alt="Hamara HR"
            width={120}
            height={21}
            className="object-contain"
          />
        </button>
      </div>

      {/* Mobile Version */}
      <div className="flex md:hidden flex-col items-center text-center w-full mx-auto px-4 py-3 gap-3">
        <div>
          <p className="m-0">
            <span className="text-white font-sarabun font-medium text-sm leading-normal tracking-[-0.3px]">
              Empower your HR team with the tools they need to enhance efficiency and{' '}
            </span>
            <span className="text-[#F9DC8F] font-sarabun font-semibold text-sm leading-normal tracking-[-0.3px]">
              faster growth
            </span>
          </p>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center justify-center bg-white rounded-xl hover:bg-gray-50 transition-all duration-200"
          style={{ height: '44px', padding: '0 16px', gap: '8px' }}
        >
          <span className="text-[#001242] font-sarabun font-medium text-sm leading-normal tracking-[-0.3px] whitespace-nowrap">
            Explore
          </span>
          <Image
            src="/assets/hamarahr-logo.png"
            alt="Hamara HR"
            width={100}
            height={17}
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default HRBanner;