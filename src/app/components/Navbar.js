'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = ({ 
  userEmail = "Yash",
  companyName = "Billions careers pvt ltd.",
  onDownloadApp = () => console.log('Download app clicked'),
  onNotificationClick = () => console.log('Notification clicked'),
  onProfileClick = () => console.log('Profile clicked')
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-full flex items-center justify-between">
        {/* Left Side*/}
        <div className="flex items-center">
         
          <div 
            className="flex items-center"
            style={{ width: '141px', height: '74px' }}
          >
            <Image
              src="/assets/hamara-logo.png"
              alt="Hamara Jobs - Powered by QUESS"
              width={141}
              height={74}
              className="object-contain ml-10"
              priority
            />
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notification Icon */}
          <button
            onClick={onNotificationClick}
            className="relative flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{ 
              width: '40px', 
              height: '40px',
              borderRadius: '12px'
            }}
          >
            <Image
              src="/assets/notification-icon.png"
              alt="Notifications"
              width={40}
              height={40}
              className="object-contain"
            />
            {/* Notification badge */}
            {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div> */}
          </button>

         
          <button
            onClick={onDownloadApp}
            className="hidden sm:flex items-center font-sarabun justify-center border-2 border-[#002DA5] text-[#002DA5] hover:bg-blue-50 transition-colors rounded-lg"
            style={{
              width: '145px',
              height: '52px',
              fontFamily: 'Sarabun',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-0.3px'
            }}
          >
            Download app
          </button>

          {/* Mobile Download Button  */}
          <button
            onClick={onDownloadApp}
            className="sm:hidden flex items-center justify-center border-2 border-hamara-blue text-hamara-blue hover:bg-blue-50 transition-colors rounded-lg p-2"
            style={{ width: '40px', height: '40px' }}
          >
            <Image
              src="/assets/download-icon.png"
              alt="Download"
              width={20}
              height={20}
              className="object-contain"
            />
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 bg-[#F5F5F5] rounded-full hover:bg-gray-50 transition-colors"
            >
              {/* User Avatar */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src="/assets/user-icon.png"
                  alt={userEmail}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                  
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-hamara-blue text-white flex items-center justify-center font-sarabun font-semibold text-sm rounded-full">
                        ${userEmail.charAt(0).toUpperCase()}
                      </div>
                    `;
                  }}
                />
              </div>
              
              {/* User Info -  */}
              <div className="hidden sm:flex flex-col items-start min-w-0">
                <span className="font-sarabun font-normal text-[14px] text-gray-900 leading-tight truncate max-w-[120px] lg:max-w-[200px]">
                  {userEmail}
                </span>
                <span className="font-sarabun font-semibold text-[16px] text-[#002DA5] leading-tight truncate max-w-[120px] lg:max-w-[200px]">
                  {companyName}
                </span>
              </div>
              
              {/* Dropdown Arrow */}
              <div className="hidden sm:block">
                <Image
                  src="/assets/dropdown-icon.png"
                  alt="Dropdown"
                  width={12}
                  height={12}
                  className={`object-contain transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64  rounded-lg shadow-lg border bg-white border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                      <Image
                        src="/assets/user-icon.png"
                        alt={userEmail}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-sarabun font-normal text-[14px] text-gray-900 truncate">
                        {userEmail}
                      </span>
                      <span className="font-sarabun font-semibold text-[16px] text-[#002DA5] truncate">
                        {companyName}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 font-normal text-[#001242] text-[16px] font-sarabun hover:bg-gray-50 rounded flex items-center gap-2">
                    <Image src="/assets/phone-black.png" alt="" width={16} height={16} />
                    Contact Sales
                  </button>
                  
                  <hr className=" h-3 text-[#EEEEEE]" />
                  <button className="w-full text-left px-3 py-2 font-normal text-[16px] font-sarabun hover:bg-gray-50 rounded text-[#FF3B2A] flex items-center gap-2">
                    <Image src="/assets/logout-icon.png" alt="" width={16} height={16} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sm:hidden mt-2 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="font-sarabun font-medium text-sm text-gray-900 truncate">
            {userEmail}
          </span>
          <span className="text-gray-400">•</span>
          <span className="font-sarabun font-normal text-xs text-hamara-light-blue truncate">
            {companyName}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;