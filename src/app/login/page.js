



// // app/login/page.js
// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// export default function LoginSignup() {
//   const [mobileNumber, setMobileNumber] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleGetOTP = async () => {
//     if (!mobileNumber) return
//     setIsLoading(true)
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false)
//       console.log('OTP requested for:', mobileNumber)
//     }, 1000)
//   }

//   const handleWorkEmailSignup = () => {
//     console.log('Work email signup clicked')
//   }

//   return (
//     <div className="min-h-screen flex px-20">
//       {/* Left Side - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
//         <Image 
//           src="/assets/login_bg_image.png" 
//           alt="Hamara Jobs Login Background" 
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
//         <div className="w-full max-w-md">
//           {/* Mobile Logo - Only visible on mobile */}
//           <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
//             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
//               <div className="w-8 h-8 border-2 border-white rounded-full relative">
//                 <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
//               </div>
//             </div>
//             <div className="text-blue-600">
//               <h1 className="text-2xl font-bold">Hamara Jobs</h1>
//             </div>
//           </div>

//           {/* Form Header */}
//           <div className="text-center mb-8">
            
//             <h1 className="text-2xl font-semibold text-hamara-dark mb-3 font-sarabun leading-none tracking-[-0.3px]">
//               Employer Login/Sign up
//             </h1>
//             <p className="text-hamara-gray font-sarabun font-medium text-base leading-none">
//               Enter your mobile number to register your account
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             <div>
//               <p className="text-hamara-dark font-sarabun font-medium text-base leading-none tracking-[-0.3px] mb-4">
//                 Please enter your mobile number to continue
//               </p>
              
//               {/* Mobile Input */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Image 
//                     src="/assets/phone_icon.png" 
//                     alt="Phone" 
//                     width={16} 
//                     height={24}
//                     className="opacity-60"
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   value={mobileNumber}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                   placeholder="Mobile number"
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray leading-none tracking-[-0.3px]"
//                 />
//               </div>
              
//               <p className="text-hamara-gray font-sarabun font-normal text-xs leading-none tracking-[-0.3px] mt-1">
//                 *We will send OTP for verification
//               </p>
//             </div>

//             {/* Get OTP Button */}
//             <button
//               onClick={handleGetOTP}
//               disabled={!mobileNumber || isLoading}
//               className="w-full bg-hamara-blue text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Sending...' : 'Get OTP'}
//             </button>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">Or</span>
//               </div>
//             </div>

//             {/* Work Email Button */}
//             <button
//               onClick={handleWorkEmailSignup}
//               className="w-full border border-hamara-blue text-hamara-blue py-3 px-6 rounded-full font-sarabun font-normal text-sm leading-none hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
//             >
//               <Image 
//                 src="/assets/letter_icon.png" 
//                 alt="Email" 
//                 width={22} 
//                 height={16}
//               />
//               Sign up with work email
//             </button>

//             {/* Login Link */}
//             <p className="text-center text-hamara-dark font-sarabun font-normal text-base leading-none tracking-[-0.3px]">
//               Already a user?{' '}
//               <span className="text-hamara-light-blue cursor-pointer hover:underline">
//                 Login here
//               </span>
//             </p>
//           </div>

//           {/* Footer Links */}
//           <div className="flex justify-center gap-8 mt-36">
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Privacy Policy
//             </a>
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }









// // app/login/page.js - Main Login Page
// 'use client'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'

// // Mobile OTP Verification Component
// const MobileOTPPage = ({ mobileNumber, onBack }) => {
//   const [otp, setOtp] = useState('')
//   const [timer, setTimer] = useState(25)
//   const [canResend, setCanResend] = useState(false)

//   // Timer effect
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer(prev => {
//           if (prev <= 1) {
//             setCanResend(true)
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//       return () => clearInterval(interval)
//     }
//   }, [timer])

//   const handleVerifyOTP = () => {
//     if (otp === '1234') { // Test OTP
//       alert('OTP Verified Successfully!')
//       // Redirect to dashboard
//     } else {
//       alert('Invalid OTP. Try 1234')
//     }
//   }

//   const handleResendOTP = () => {
//     setTimer(25)
//     setCanResend(false)
//     alert('OTP Resent!')
//   }

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
//   }

//   return (
//     <div className="min-h-screen flex px-20">
//       {/* Left Side - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
//         <Image 
//           src="/assets/login_bg_image.png" 
//           alt="Hamara Jobs Login Background" 
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Right Side - OTP Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
//         <div className="w-full max-w-md">
//           {/* Back Button */}
//           <button 
//             onClick={onBack}
//             className="flex items-center gap-2 mb-8 text-hamara-dark hover:text-hamara-blue transition-colors"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <span className="font-sarabun font-medium text-lg">Verify OTP</span>
//           </button>

//           {/* OTP Info */}
//           <div className="mb-8">
//             <p className="text-hamara-gray font-sarabun font-normal text-base mb-4">
//               Enter OTP sent to <span className="font-medium text-hamara-dark">{mobileNumber}</span>
//             </p>
            
//             {/* OTP Input */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter 4 digit OTP"
//                 maxLength="4"
//                 className="w-full px-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray"
//               />
//             </div>

//             {/* Timer */}
//             {!canResend && (
//               <p className="text-red-500 font-sarabun font-normal text-sm mb-4">
//                 {formatTime(timer)}
//               </p>
//             )}

//             {/* Resend OTP */}
//             {canResend && (
//               <p className="text-hamara-gray font-sarabun font-normal text-sm mb-4">
//                 Didn't receive OTP?{' '}
//                 <button 
//                   onClick={handleResendOTP}
//                   className="text-hamara-light-blue hover:underline"
//                 >
//                   Resend
//                 </button>
//               </p>
//             )}
//           </div>

//           {/* Verify Button */}
//           <button
//             onClick={handleVerifyOTP}
//             disabled={otp.length !== 4}
//             className="w-full bg-hamara-blue h-[56px] text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Verify now
//           </button>

//           {/* Footer Links */}
//           <div className="flex justify-center gap-8 mt-36">
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Privacy Policy
//             </a>
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Email Signup Component
// const EmailSignupPage = ({ userEmail, setUserEmail, onEmailLogin, isLoading, onBack }) => {
//   return (
//     <div className="min-h-screen flex px-20">
//       {/* Left Side - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
//         <Image 
//           src="/assets/login_bg_image.png" 
//           alt="Hamara Jobs Login Background" 
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Right Side - Email Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
//         <div className="w-full max-w-md">
//           {/* Form Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-semibold text-hamara-dark mb-3 font-sarabun leading-none tracking-[-0.3px]">
//               Employer Login/Sign up
//             </h1>
//             <p className="text-hamara-gray font-sarabun font-medium text-base leading-none">
//               Enter your work email to register your account
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             <div>
//               <label className="text-hamara-dark font-sarabun font-medium text-base leading-none tracking-[-0.3px] mb-4 block">
//                 Email <span className="text-red-500">*</span>
//               </label>
              
//               {/* Email Input */}
//               <input
//                 type="email"
//                 value={userEmail}
//                 onChange={(e) => setUserEmail(e.target.value)}
//                 placeholder="Enter your work email address"
//                 className="w-full px-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray leading-none tracking-[-0.3px]"
//               />
              
//               <p className="text-hamara-gray font-sarabun font-normal text-xs leading-none tracking-[-0.3px] mt-1">
//                 *We will send OTP for verification
//               </p>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={onEmailLogin}
//               disabled={!userEmail || isLoading}
//               className="w-full bg-hamara-blue h-[56px] text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Sending...' : 'Login'}
//             </button>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">Or</span>
//               </div>
//             </div>

//             {/* Mobile Number Button */}
//             <button
//               onClick={onBack}
//               className="w-full border h-[56px] border-hamara-blue text-hamara-blue py-3 px-6 rounded-full font-sarabun font-normal text-sm leading-none hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
//             >
//               <Image 
//                 src="/assets/phone_blue_icon.png" 
//                 alt="Phone" 
//                 width={16} 
//                 height={24}
//               />
//               Login with mobile number
//             </button>

//             {/* Login Link */}
//             <p className="text-center text-hamara-dark font-sarabun font-normal text-base leading-none tracking-[-0.3px]">
//               Already a user?{' '}
//               <span className="text-hamara-light-blue cursor-pointer hover:underline">
//                 Login here
//               </span>
//             </p>
//           </div>

//           {/* Footer Links */}
//           <div className="flex justify-center gap-8 mt-36">
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Privacy Policy
//             </a>
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Email OTP Verification Component
// const EmailOTPPage = ({ userEmail, onBack }) => {
//   const [otp, setOtp] = useState('')
//   const [timer, setTimer] = useState(25)
//   const [canResend, setCanResend] = useState(false)

//   // Timer effect
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer(prev => {
//           if (prev <= 1) {
//             setCanResend(true)
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)
//       return () => clearInterval(interval)
//     }
//   }, [timer])

//   const handleVerifyOTP = () => {
//     if (otp === '1234') { // Test OTP
//       alert('Email OTP Verified Successfully!')
//       // Redirect to dashboard
//     } else {
//       alert('Invalid OTP. Try 1234')
//     }
//   }

//   const handleResendOTP = () => {
//     setTimer(25)
//     setCanResend(false)
//     alert('OTP Resent to email!')
//   }

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
//   }

//   return (
//     <div className="min-h-screen flex px-20">
//       {/* Left Side - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
//         <Image 
//           src="/assets/login_bg_image.png" 
//           alt="Hamara Jobs Login Background" 
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Right Side - OTP Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
//         <div className="w-full max-w-md">
//           {/* Back Button */}
//           <button 
//             onClick={onBack}
//             className="flex items-center gap-2 mb-8 text-hamara-dark hover:text-hamara-blue transition-colors"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <span className="font-sarabun font-medium text-lg">Verify OTP</span>
//           </button>

//           {/* OTP Info */}
//           <div className="mb-8">
//             <p className="text-hamara-gray font-sarabun font-normal text-base mb-4">
//               Enter OTP sent to <span className="font-medium text-hamara-dark">{userEmail}</span>
//             </p>
            
//             {/* OTP Input */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter 4 digit OTP"
//                 maxLength="4"
//                 className="w-full px-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray"
//               />
//             </div>

//             {/* Timer */}
//             {!canResend && (
//               <p className="text-red-500 font-sarabun font-normal text-sm mb-4">
//                 {formatTime(timer)}
//               </p>
//             )}

//             {/* Resend OTP */}
//             {canResend && (
//               <p className="text-hamara-gray font-sarabun font-normal text-sm mb-4">
//                 Didn't receive OTP?{' '}
//                 <button 
//                   onClick={handleResendOTP}
//                   className="text-hamara-light-blue hover:underline"
//                 >
//                   Resend
//                 </button>
//               </p>
//             )}
//           </div>

//           {/* Verify Button */}
//           <button
//             onClick={handleVerifyOTP}
//             disabled={otp.length !== 4}
//             className="w-full bg-hamara-blue text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Verify now
//           </button>

//           {/* Footer Links */}
//           <div className="flex justify-center gap-8 mt-36">
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Privacy Policy
//             </a>
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Main Login Component
// export default function LoginSignup() {
//   const [mobileNumber, setMobileNumber] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [currentStep, setCurrentStep] = useState('login') // login, mobile-otp, email-signup, email-otp
//   const [userEmail, setUserEmail] = useState('')

//   const handleGetOTP = async () => {
//     if (!mobileNumber) return
//     setIsLoading(true)
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false)
//       setCurrentStep('mobile-otp')
//       console.log('OTP requested for:', mobileNumber)
//     }, 1000)
//   }

//   const handleWorkEmailSignup = () => {
//     setCurrentStep('email-signup')
//   }

//   const handleBackToLogin = () => {
//     setCurrentStep('login')
//   }

//   const handleEmailLogin = async () => {
//     if (!userEmail) return
//     setIsLoading(true)
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false)
//       setCurrentStep('email-otp')
//       console.log('OTP sent to email:', userEmail)
//     }, 1000)
//   }

//   const handleBackToEmail = () => {
//     setCurrentStep('email-signup')
//   }

//   // Render current step
//   if (currentStep === 'mobile-otp') {
//     return <MobileOTPPage mobileNumber={mobileNumber} onBack={handleBackToLogin} />
//   }

//   if (currentStep === 'email-signup') {
//     return (
//       <EmailSignupPage 
//         userEmail={userEmail}
//         setUserEmail={setUserEmail}
//         onEmailLogin={handleEmailLogin}
//         isLoading={isLoading}
//         onBack={handleBackToLogin}
//       />
//     )
//   }

//   if (currentStep === 'email-otp') {
//     return <EmailOTPPage userEmail={userEmail} onBack={handleBackToEmail} />
//   }

//   // Login Page (Default)
//   return (
//     <div className="min-h-screen flex px-20">
//       {/* Left Side - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
//         <Image 
//           src="/assets/login_bg_image.png" 
//           alt="Hamara Jobs Login Background" 
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
//         <div className="w-full max-w-md">
//           {/* Mobile Logo - Only visible on mobile */}
//           <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
//             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
//               <div className="w-8 h-8 border-2 border-white rounded-full relative">
//                 <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
//               </div>
//             </div>
//             <div className="text-blue-600">
//               <h1 className="text-2xl font-bold">Hamara Jobs</h1>
//             </div>
//           </div>

//           {/* Form Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-semibold text-hamara-dark mb-3 font-sarabun leading-none tracking-[-0.3px]">
//               Employer Login/Sign up
//             </h1>
//             <p className="text-hamara-gray font-sarabun font-medium text-base leading-none">
//               Enter your mobile number to register your account
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             <div>
//               <p className="text-hamara-dark font-sarabun font-medium text-base leading-none tracking-[-0.3px] mb-4">
//                 Please enter your mobile number to continue
//               </p>
              
//               {/* Mobile Input */}
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Image 
//                     src="/assets/phone_icon.png" 
//                     alt="Phone" 
//                     width={16} 
//                     height={24}
//                     className="opacity-60"
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   value={mobileNumber}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                   placeholder="Mobile number"
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray leading-none tracking-[-0.3px]"
//                 />
//               </div>
              
//               <p className="text-hamara-gray font-sarabun font-normal text-xs leading-none tracking-[-0.3px] mt-1">
//                 *We will send OTP for verification
//               </p>
//             </div>

//             {/* Get OTP Button */}
//             <button
//               onClick={handleGetOTP}
//               disabled={!mobileNumber || isLoading}
//               className="w-full bg-hamara-blue text-white h-[56px] py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Sending...' : 'Get OTP'}
//             </button>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">Or</span>
//               </div>
//             </div>

//             {/* Work Email Button */}
//             <button
//               onClick={handleWorkEmailSignup}
//               className="w-full border border-hamara-blue h-[56px] text-hamara-blue py-3 px-6 rounded-full font-sarabun font-normal text-sm leading-none hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
//             >
//               <Image 
//                 src="/assets/letter_icon.png" 
//                 alt="Email" 
//                 width={22} 
//                 height={16}
//               />
//               Sign up with work email
//             </button>

//             {/* Login Link */}
//             <p className="text-center text-hamara-dark font-sarabun font-normal text-base leading-none tracking-[-0.3px]">
//               Already a user?{' '}
//               <span className="text-hamara-light-blue cursor-pointer hover:underline">
//                 Login here
//               </span>
//             </p>
//           </div>

//           {/* Footer Links */}
//           <div className="flex justify-center gap-8 mt-36">
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Privacy Policy
//             </a>
//             <a 
//               href="#" 
//               className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
//             >
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }












// app/login/page.js - Complete Auth Flow (Register + Login)
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Mobile OTP Verification Component
const MobileOTPPage = ({ mobileNumber, onBack, isLoginFlow }) => {
  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(25)
  const [canResend, setCanResend] = useState(false)

  // Timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleVerifyOTP = () => {
    if (otp === '1234') { // Test OTP
      alert(`${isLoginFlow ? 'Login' : 'Registration'} OTP Verified Successfully!`)
      // Redirect to dashboard
    } else {
      alert('Invalid OTP. Try 1234')
    }
  }

  const handleResendOTP = () => {
    setTimer(25)
    setCanResend(false)
    alert('OTP Resent!')
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen flex px-20">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
        <Image 
          src="/assets/login_bg_image.png" 
          alt="Hamara Jobs Login Background" 
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center gap-2 mb-8 text-hamara-dark hover:text-hamara-blue transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-sarabun font-medium text-lg">Verify OTP</span>
          </button>

          {/* OTP Info */}
          <div className="mb-8">
            <p className="text-hamara-gray font-sarabun font-normal text-base mb-4">
              Enter OTP sent to <span className="font-medium text-hamara-dark">{mobileNumber}</span>
            </p>
            
            {/* OTP Input */}
            <div className="mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 4 digit OTP"
                maxLength="4"
                className="w-full px-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray"
              />
            </div>

            {/* Timer */}
            {!canResend && (
              <p className="text-red-500 font-sarabun font-normal text-sm mb-4">
                {formatTime(timer)}
              </p>
            )}

            {/* Resend OTP */}
            {canResend && (
              <p className="text-hamara-gray font-sarabun font-normal text-sm mb-4">
                Didn't receive OTP?{' '}
                <button 
                  onClick={handleResendOTP}
                  className="text-hamara-light-blue hover:underline"
                >
                  Resend
                </button>
              </p>
            )}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerifyOTP}
            disabled={otp.length !== 4}
            className="w-full bg-hamara-blue h-[56px] text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify now
          </button>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mt-36">
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Email Login/Signup Component
const EmailPage = ({ userEmail, setUserEmail, onEmailSubmit, isLoading, onBack, isLoginFlow }) => {
  return (
    <div className="min-h-screen flex px-20">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
        <Image 
          src="/assets/login_bg_image.png" 
          alt="Hamara Jobs Login Background" 
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Side - Email Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
        <div className="w-full max-w-md">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-hamara-dark mb-3 font-sarabun leading-none tracking-[-0.3px]">
              Employer Login/Sign up
            </h1>
            <p className="text-hamara-gray font-sarabun font-medium text-base leading-none">
              {isLoginFlow ? 'Enter your work email to log into your account' : 'Enter your work email to register your account'}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="text-hamara-dark font-sarabun font-medium text-base leading-none tracking-[-0.3px] mb-4 block">
                Email <span className="text-red-500">*</span>
              </label>
              
              {/* Email Input */}
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your work email address"
                className="w-full px-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray leading-none tracking-[-0.3px]"
              />
              
              <p className="text-hamara-gray font-sarabun font-normal text-xs leading-none tracking-[-0.3px] mt-1">
                *We will send OTP for verification
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={onEmailSubmit}
              disabled={!userEmail || isLoading}
              className="w-full bg-hamara-blue h-[56px] text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Login'}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Mobile Number Button */}
            <button
              onClick={onBack}
              className="w-full border h-[56px] border-hamara-blue text-hamara-blue py-3 px-6 rounded-full font-sarabun font-normal text-sm leading-none hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
            >
              <Image 
                src="/assets/phone_blue_icon.png" 
                alt="Phone" 
                width={16} 
                height={24}
              />
              {isLoginFlow ? 'Login with mobile number' : 'Sign up with mobile number'}
            </button>

            {/* Toggle Login/Register Link */}
            <p className="text-center text-hamara-dark font-sarabun font-normal text-base leading-none tracking-[-0.3px]">
              {isLoginFlow ? 'Not a user? ' : 'Already a user? '}
              <span className="text-hamara-light-blue cursor-pointer hover:underline">
                {isLoginFlow ? 'Register here' : 'Login here'}
              </span>
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mt-36">
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Email OTP Verification Component
const EmailOTPPage = ({ userEmail, onBack, isLoginFlow }) => {
  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(25)
  const [canResend, setCanResend] = useState(false)

  // Timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleVerifyOTP = () => {
    if (otp === '1234') { // Test OTP
      alert(`Email ${isLoginFlow ? 'Login' : 'Registration'} OTP Verified Successfully!`)
      // Redirect to dashboard
    } else {
      alert('Invalid OTP. Try 1234')
    }
  }

  const handleResendOTP = () => {
    setTimer(25)
    setCanResend(false)
    alert('OTP Resent to email!')
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen flex px-20">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
        <Image 
          src="/assets/login_bg_image.png" 
          alt="Hamara Jobs Login Background" 
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center gap-2 mb-8 text-hamara-dark hover:text-hamara-blue transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-sarabun font-medium text-lg">Verify OTP</span>
          </button>

          {/* OTP Info */}
          <div className="mb-8">
            <p className="text-hamara-gray font-sarabun font-normal text-base mb-4">
              Enter OTP sent to <span className="font-medium text-hamara-dark">{userEmail}</span>
            </p>
            
            {/* OTP Input */}
            <div className="mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 4 digit OTP"
                maxLength="4"
                className="w-full px-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray"
              />
            </div>

            {/* Timer */}
            {!canResend && (
              <p className="text-red-500 font-sarabun font-normal text-sm mb-4">
                {formatTime(timer)}
              </p>
            )}

            {/* Resend OTP */}
            {canResend && (
              <p className="text-hamara-gray font-sarabun font-normal text-sm mb-4">
                Didn't receive OTP?{' '}
                <button 
                  onClick={handleResendOTP}
                  className="text-hamara-light-blue hover:underline"
                >
                  Resend
                </button>
              </p>
            )}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerifyOTP}
            disabled={otp.length !== 4}
            className="w-full bg-hamara-blue text-white py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify now
          </button>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mt-36">
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Auth Component
export default function AuthFlow() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState('register') // register, register-mobile-otp, register-email, register-email-otp, login, login-mobile-otp, login-email, login-email-otp
  const [userEmail, setUserEmail] = useState('')

  // Determine if current flow is login
  const isLoginFlow = currentStep.startsWith('login')

  const handleGetOTP = async () => {
    if (!mobileNumber) return
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(isLoginFlow ? 'login-mobile-otp' : 'register-mobile-otp')
      console.log('OTP requested for:', mobileNumber)
    }, 1000)
  }

  const handleWorkEmailSignup = () => {
    setCurrentStep(isLoginFlow ? 'login-email' : 'register-email')
  }

  const handleBackToMain = () => {
    setCurrentStep(isLoginFlow ? 'login' : 'register')
  }

  const handleEmailSubmit = async () => {
    if (!userEmail) return
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(isLoginFlow ? 'login-email-otp' : 'register-email-otp')
      console.log('OTP sent to email:', userEmail)
    }, 1000)
  }

  const handleBackToEmail = () => {
    setCurrentStep(isLoginFlow ? 'login-email' : 'register-email')
  }

  const handleToggleFlow = () => {
    if (isLoginFlow) {
      setCurrentStep('register')
    } else {
      setCurrentStep('login')
    }
  }

  // Render current step
  if (currentStep === 'register-mobile-otp' || currentStep === 'login-mobile-otp') {
    return <MobileOTPPage mobileNumber={mobileNumber} onBack={handleBackToMain} isLoginFlow={isLoginFlow} />
  }

  if (currentStep === 'register-email' || currentStep === 'login-email') {
    return (
      <EmailPage 
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        onEmailSubmit={handleEmailSubmit}
        isLoading={isLoading}
        onBack={handleBackToMain}
        isLoginFlow={isLoginFlow}
      />
    )
  }

  if (currentStep === 'register-email-otp' || currentStep === 'login-email-otp') {
    return <EmailOTPPage userEmail={userEmail} onBack={handleBackToEmail} isLoginFlow={isLoginFlow} />
  }

  // Main Page (Register or Login)
  return (
    <div className="min-h-screen flex px-20">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative" style={{width: '735px', height: '730px', padding: '16px', left: '-30px' }}>
        <Image 
          src="/assets/login_bg_image.png" 
          alt="Hamara Jobs Login Background" 
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-12 bg-white mt-20">
        <div className="w-full max-w-md">
          {/* Mobile Logo - Only visible on mobile */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-blue-600">
              <h1 className="text-2xl font-bold">Hamara Jobs</h1>
            </div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-hamara-dark mb-3 font-sarabun leading-none tracking-[-0.3px]">
              Employer Login/Sign up
            </h1>
            <p className="text-hamara-gray font-sarabun font-medium text-base leading-none">
              {isLoginFlow ? 'Enter your mobile number to login to your account' : 'Enter your mobile number to register your account'}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <p className="text-hamara-dark font-sarabun font-medium text-base leading-none tracking-[-0.3px] mb-4">
                Please enter your mobile number to continue
              </p>
              
              {/* Mobile Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Image 
                    src="/assets/phone_icon.png" 
                    alt="Phone" 
                    width={16} 
                    height={24}
                    className="opacity-60"
                  />
                </div>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Mobile number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 bg-[#F5F5F5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sarabun font-medium text-sm text-hamara-gray placeholder-hamara-gray leading-none tracking-[-0.3px]"
                />
              </div>
              
              <p className="text-hamara-gray font-sarabun font-normal text-xs leading-none tracking-[-0.3px] mt-1">
                *We will send OTP for verification
              </p>
            </div>

            {/* Get OTP Button */}
            <button
              onClick={handleGetOTP}
              disabled={!mobileNumber || isLoading}
              className="w-full bg-hamara-blue text-white h-[56px] py-3 px-6 rounded-full font-sarabun font-medium text-sm leading-none hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Get OTP'}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Work Email Button */}
            <button
              onClick={handleWorkEmailSignup}
              className="w-full border border-hamara-blue h-[56px] text-hamara-blue py-3 px-6 rounded-full font-sarabun font-normal text-sm leading-none hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
            >
              <Image 
                src="/assets/letter_icon.png" 
                alt="Email" 
                width={22} 
                height={16}
              />
              {isLoginFlow ? 'Login with work email' : 'Sign up with work email'}
            </button>

            {/* Toggle Login/Register Link */}
            <p className="text-center text-hamara-dark font-sarabun font-normal text-base leading-none tracking-[-0.3px]">
              {isLoginFlow ? 'Not a user? ' : 'Already a user? '}
              <span 
                onClick={handleToggleFlow}
                className="text-hamara-light-blue cursor-pointer hover:underline"
              >
                {isLoginFlow ? 'Register here' : 'Login here'}
              </span>
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mt-36">
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-hamara-light-blue font-sarabun font-normal text-base leading-none underline hover:no-underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}