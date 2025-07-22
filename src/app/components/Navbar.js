"use client"
import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

// Configure Tailwind CSS to include custom colors and fonts
// This configuration is typically in a tailwind.config.js file,
// but for a self-contained immersive, we'll include it here
// as a comment for context. In a real Next.js app, you'd configure
// your `tailwind.config.js` like this:
/*
module.exports = {
  theme: {
    extend: {
      colors: {
        'hamara-blue': '#007BFF', // Example blue color
        'hamara-light-blue': '#6B7280', // Example light blue/gray color
      },
      fontFamily: {
        sarabun: ['Sarabun', 'sans-serif'],
      },
    },
  },
};
*/

// Main Navbar component
const Navbar = ({ 
  userEmail = "Yash",
  companyName = "Billions careers pvt ltd.",
  userAvatar = "https://placehold.co/40x40/E0E0E0/000000?text=YA", // Placeholder for user avatar
  logoSrc = "https://placehold.co/100x50/007BFF/FFFFFF?text=Logo", // Placeholder for logo
  onDownloadApp = () => console.log('Download app clicked'),
  onNotificationClick = () => console.log('Notification clicked'),
  onProfileClick = () => console.log('Profile clicked')
}) => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.user-profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 font-inter">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <div 
            className="flex items-center gap-1.5"
            style={{ width: '141px', height: '74px' }}
          >
            {/* Logo placeholder - using Tailwind for a simple logo representation */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-600 font-bold text-xl leading-none">
                  Hamara
                </span>
                <span className="text-blue-600 font-bold text-xl leading-none">
                  Jobs
                </span>
              </div>
            </div>
          </div>
          
          {/* Powered by text */}
          <div className="ml-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="font-normal">Powered by</span>
            <span className="font-semibold text-gray-800">QUESS</span>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button
            onClick={onNotificationClick}
            className="relative p-2 hover:bg-gray-50 transition-colors rounded-xl flex items-center justify-center"
            style={{ 
              width: '40px', 
              height: '40px',
            }}
          >
            <Bell 
              size={20} 
              className="text-gray-600" 
            />
            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>

          {/* Download App Button */}
          <button
            onClick={onDownloadApp}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-semibold text-base"
            style={{
              width: '145px',
              height: '52px',
              letterSpacing: '-0.3px'
            }}
          >
            Download app
          </button>

          {/* User Profile Dropdown */}
          <div className="relative user-profile-dropdown">
            <button
              onClick={toggleDropdown} // Use toggleDropdown
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {/* User Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-white font-semibold text-sm">
                <img
                  src={userAvatar}
                  alt={userEmail}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.target.style.display = 'none'; // Hide the broken image
                    const parent = e.target.parentNode;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                          ${userEmail.charAt(0).toUpperCase()}
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              
              {/* User Info */}
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-gray-900 leading-tight">
                  {userEmail}
                </span>
                <span className="font-normal text-xs text-gray-600 leading-tight">
                  {companyName}
                </span>
              </div>
              
              {/* Dropdown Arrow */}
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu - Conditionally rendered based on state */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-white font-semibold text-base">
                      <img
                        src={userAvatar}
                        alt={userEmail}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const parent = e.target.parentNode;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-blue-600 text-white flex items-center justify-center font-semibold text-base">
                                ${userEmail.charAt(0).toUpperCase()}
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-gray-900">
                        {userEmail}
                      </span>
                      <span className="font-normal text-xs text-gray-600">
                        {companyName}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-50 rounded">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-50 rounded">
                    Account Settings
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-50 rounded">
                    Help & Support
                  </button>
                  <hr className="my-2" />
                  <button className="w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-50 rounded text-red-600">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // <--- This line was missing and caused the error!
