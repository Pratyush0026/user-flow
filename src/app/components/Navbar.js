'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = ({ 
  // User authentication state
  isLoggedIn = false,
  userEmail = "Yash",
  companyName = "Billions careers pvt ltd.",
  
  // Event handlers
  onDownloadApp = () => console.log('Download app clicked'),
  onNotificationClick = () => console.log('Notification clicked'),
  onProfileClick = () => console.log('Profile clicked'),
  onLoginClick = () => console.log('Login clicked'),
  onSignUpClick = () => console.log('SignUp clicked'),
  onContactSales = () => console.log('Contact sales clicked'),
  onLogout = () => console.log('Logout clicked'),
  
  // Optional customization
  showDownloadButton = true,
  notificationCount = 0
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-3 relative z-40">
        <div className="max-w-full flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="flex items-center flex-shrink-0">
            <div 
              className="flex items-center"
              style={{ width: '141px', height: '74px' }}
            >
              <Image
                src="/assets/hamara-logo.png"
                alt="Hamara Jobs - Powered by QUESS"
                width={141}
                height={74}
                className="object-contain ml-2 sm:ml-4 lg:ml-10"
                priority
              />
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Download App Button - Always visible */}
            {showDownloadButton && (
              <>
                {/* Desktop Download Button */}
                <button
                  onClick={onDownloadApp}
                  className="hidden sm:flex items-center justify-center border-2 border-[#002DA5] text-[#002DA5] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 rounded-lg"
                  style={{
                    width: '145px',
                    height: '52px',
                    fontFamily: 'Sarabun, sans-serif',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.3px'
                  }}
                  aria-label="Download mobile app"
                >
                  Download app
                </button>

                {/* Mobile Download Button */}
                <button
                  onClick={onDownloadApp}
                  className="sm:hidden flex items-center justify-center border-2 border-[#002DA5] text-[#002DA5] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 rounded-lg"
                  style={{ width: '40px', height: '40px' }}
                  aria-label="Download mobile app"
                >
                  <Image
                    src="/assets/download-icon.png"
                    alt="Download"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
              </>
            )}

            {/* Conditional Rendering based on login status */}
            {isLoggedIn ? (
              // Logged In State
              <>
                {/* Notification Icon */}
                <button
                  onClick={onNotificationClick}
                  className="relative flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    borderRadius: '12px'
                  }}
                  aria-label={`Notifications${notificationCount > 0 ? ` (${notificationCount} unread)` : ''}`}
                >
                  <Image
                    src="/assets/notification-icon.png"
                    alt="Notifications"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  {/* Notification badge */}
                  {notificationCount > 0 && (
                    <div className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-medium leading-none">
                        {notificationCount > 99 ? '99+' : notificationCount}
                      </span>
                    </div>
                  )}
                </button>

                {/* User Profile Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 bg-[#F5F5F5] rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    {/* User Avatar */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src="/assets/user-icon.png"
                        alt={`${userEmail} profile picture`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div class="w-full h-full bg-[#002DA5] text-white flex items-center justify-center font-semibold text-sm rounded-full">
                              ${userEmail.charAt(0).toUpperCase()}
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    {/* User Info - Hidden on mobile */}
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
                        alt=""
                        width={12}
                        height={12}
                        className={`object-contain transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 rounded-lg shadow-lg border bg-white border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                            <Image
                              src="/assets/user-icon.png"
                              alt={`${userEmail} profile picture`}
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
                        <button 
                          onClick={() => {
                            onContactSales();
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 font-normal text-[#001242] text-[16px] font-sarabun hover:bg-gray-50 focus:bg-gray-50 focus:outline-none rounded flex items-center gap-2 transition-colors duration-200"
                        >
                          <Image src="/assets/phone-black.png" alt="" width={16} height={16} />
                          Contact Sales
                        </button>
                        
                        <hr className="my-1 border-[#EEEEEE]" />
                        
                        <button 
                          onClick={() => {
                            onLogout();
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 font-normal text-[16px] font-sarabun hover:bg-red-50 focus:bg-red-50 focus:outline-none rounded text-[#FF3B2A] flex items-center gap-2 transition-colors duration-200"
                        >
                          <Image src="/assets/logout-icon.png" alt="" width={16} height={16} />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Not Logged In State - Only the yellow Login/Signup button
              <>
                {/* Desktop Login/Sign Up Button */}
                <button
                  onClick={onSignUpClick}
                  className="hidden sm:flex items-center justify-center bg-[#FFB800] text-[#002DA5] hover:bg-[#e6a600] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 rounded-lg"
                  style={{
                    width: '240px',
                    height: '52px',
                    fontFamily: 'Sarabun, sans-serif',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.3px',
                    padding:'12px'
                  }}
                >
                  Login/Sign up as employer
                </button>

                {/* Mobile Login/Sign Up Button */}
                <button
                  onClick={onSignUpClick}
                  className="sm:hidden flex items-center justify-center bg-[#FFB800] text-[#002DA5] hover:bg-[#e6a600] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 rounded-lg"
                  style={{ width: '40px', height: '40px' }}
                  aria-label="Login or Sign up as employer"
                >
                  <Image
                    src="/assets/user-plus-icon.png"
                    alt="Login/Signup"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile User Info - Only shown when logged in */}
        {isLoggedIn && (
          <div className="sm:hidden mt-2 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="font-sarabun font-medium text-sm text-gray-900 truncate">
                {userEmail}
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-sarabun font-normal text-xs text-[#002DA5] truncate">
                {companyName}
              </span>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-25 sm:hidden"
          onClick={() => setIsDropdownOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;