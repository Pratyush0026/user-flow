"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroSection = ({
  onSearch = (query) => console.log("Search:", query),
  onVoiceSearch = () => console.log("Voice search clicked"),
  onFilterClick = () => console.log("Filter clicked"),
  onRecentClick = () => console.log("Recent clicked"),
  onSavedCandidatesClick = () => console.log("Saved candidates clicked"),
  onActiveCampaignsClick = () => console.log("Active campaigns clicked"),
  onShowAllJobsClick = () => console.log("Show all jobs clicked"),
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div
      className="relative z-0 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/Grid.png)",
        minHeight: "685px",
      }}
    >
      {/* Overlay above background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 45, 165, 0.9) 0%, rgba(0, 45, 165, 1) 48%, rgba(0, 17, 63, 1) 100%)",
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 pt-16 pb-12">
        {/* Hero Text Section */}
        <div className="text-start mb-12 lg:mb-16">
          {/* Hire Text */}
          <h1
            className="font-bold font-family-poppins  leading-none mb-4 lg:mb-6"
            style={{
              fontSize: "clamp(48px, 8vw, 90px)",
              color: "#F5C545",
              letterSpacing: "-0.3px",
            }}
          >
            Hire
          </h1>

          {/* Subtitle Text */}
          <h2
            className="font-normal leading-none"
            style={{
              fontSize: "clamp(32px, 6vw, 66px)",
              color: "#FFF",
              letterSpacing: "-0.3px",
            }}
          >
            Smartly, Affordably, Locally
          </h2>
        </div>

        {/* Search Section */}
        <div className="max-w-6xl mx-auto mb-8 lg:mb-12 px-4 sm:px-0">
          {/* AI Search Box */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <div
              className="flex items-center justify-between w-full rounded-2xl px-3 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 shadow-lg"
              style={{ minHeight: "clamp(60px, 10vw, 80px)" }}
            >
              {/* Left side - Star icon and input */}
              <div className="flex items-center flex-1 gap-2 sm:gap-4 min-w-0">
                {/* AI Star Icon */}
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="clamp(20px, 4vw, 24px)"
                    height="clamp(20px, 4vw, 24px)"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.7944 14.4059C14.2326 16.2433 12.3806 18.0957 10.5431 23.6572C10.3919 24.1144 9.74537 24.1144 9.59421 23.6572C7.75673 18.0954 5.90433 16.2434 0.342912 14.4059C-0.114304 14.2547 -0.114304 13.6082 0.342912 13.457C5.90464 11.6195 7.75666 9.76712 9.59421 4.2057C9.74539 3.74849 10.3919 3.74849 10.5431 4.2057C12.3806 9.76744 14.233 11.6195 19.7944 13.457C20.2516 13.6082 20.2516 14.2547 19.7944 14.4059Z"
                      fill="#F5C545"
                    />
                    <path
                      d="M23.8284 5.27217C21.0482 6.19031 20.1215 7.11704 19.2021 9.89845C19.1271 10.1271 18.8039 10.1271 18.7277 9.89845C17.8095 7.11824 16.8828 6.19157 14.1014 5.27217C13.8728 5.19719 13.8728 4.87395 14.1014 4.79774C16.8816 3.87959 17.8083 2.95286 18.7277 0.171458C18.8026 -0.0571528 19.1259 -0.0571528 19.2021 0.171458C20.1202 2.95166 21.047 3.87833 23.8284 4.79774C24.057 4.87271 24.057 5.19596 23.8284 5.27217Z"
                      fill="#F5C545"
                    />
                  </svg>
                </div>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="I want candidates by skill or location..."
                  className="flex-1 outline-none border-none bg-transparent font-sarabun min-w-0"
                  style={{
                    fontSize: "clamp(14px, 3.5vw, 32px)",
                    color: "#C6C7C8",
                    fontWeight: "400",
                    letterSpacing: "-0.3px",
                  }}
                />
              </div>

              {/* Right side - Action buttons */}
              <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
                {/* Voice Search Button */}
                <button
                  type="button"
                  onClick={onVoiceSearch}
                  className="flex items-center justify-center transition-colors duration-200 rounded-full"
                  style={{
                    width: "clamp(40px, 7vw, 60px)",
                    height: "clamp(40px, 7vw, 60px)",
                  }}
                  aria-label="Voice search"
                >
                  <Image
                    src="/assets/voice-icon.png"
                    alt="Voice search"
                    width={60}
                    height={60}
                    className="object-contain"
                    style={{
                      width: "clamp(32px, 5vw, 60px)",
                      height: "clamp(32px, 5vw, 60px)",
                    }}
                  />
                </button>

                {/* Filter Button */}
                <button
                  type="button"
                  onClick={onFilterClick}
                  className="flex items-center justify-center transition-colors duration-200 rounded-full"
                  style={{
                    width: "clamp(40px, 7vw, 60px)",
                    height: "clamp(40px, 7vw, 60px)",
                  }}
                  aria-label="Filter options"
                >
                  <Image
                    src="/assets/setting-icon.png"
                    alt="Filter options"
                    width={60}
                    height={60}
                    className="object-contain"
                    style={{
                      width: "clamp(32px, 5vw, 60px)",
                      height: "clamp(32px, 5vw, 60px)",
                    }}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Bottom Section - Recent and Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Recent Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onRecentClick}
              className="flex items-center justify-center gap-3 bg-transparent border border-white  hover:bg-opacity-10 transition-all duration-200 rounded-full"
              style={{
                width: "140px",
                height: "72px",
                padding: "16px 20px",
              }}
            >
              {/* Clock Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 0C16.0221 0 20.5 4.47705 20.5 10C20.5 15.5229 16.0221 20 10.5 20C4.97789 20 0.5 15.5229 0.5 10C0.5 4.47789 4.97789 0 10.5 0ZM9.53619 3.56737V10C9.53619 10.3561 9.73109 10.6678 10.0173 10.8347L14.176 13.2368C14.6374 13.5041 15.2278 13.3462 15.4943 12.8848C15.7632 12.4235 15.6061 11.833 15.1448 11.5657L11.4654 9.44154V3.56743C11.4654 3.03537 11.0345 2.60362 10.5016 2.60362C9.96785 2.60362 9.53777 3.03537 9.53777 3.56743L9.53619 3.56737Z"
                  fill="white"
                />
              </svg>

              <span className="text-white font-sarabun font-medium text-base">
                Recent
              </span>
            </button>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:flex-1">
            {/* Saved Candidates Card */}
            <div
              className="flex flex-col justify-between bg-white rounded-3xl cursor-pointer hover:shadow-lg transition-all duration-200 flex-1"
              style={{
                height: "139px",
                padding: "24px 32px",
              }}
              onClick={onSavedCandidatesClick}
            >
              {/* People Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="24"
                viewBox="0 0 37 24"
                fill="none"
              >
                <path
                  d="M16.4744 7.06198C16.4744 9.89277 14.1804 12.1887 11.3494 12.1887C8.51684 12.1887 6.22266 9.89299 6.22266 7.06198C6.22266 4.23096 8.51667 1.93701 11.3494 1.93701C14.1802 1.93701 16.4744 4.23101 16.4744 7.06198Z"
                  fill="#FF9046"
                />
                <path
                  d="M14.0922 13.7437H8.59956C3.85458 13.7437 0 17.5929 0 22.3432C0 23.258 0.742237 24.0002 1.65708 24.0002H21.0241C21.9389 24.0002 22.6812 23.258 22.6812 22.3432C22.6812 17.5982 18.8319 13.7437 14.0816 13.7437H14.0922Z"
                  fill="#FF9046"
                />
                <path
                  d="M30.022 5.12673C30.022 7.95753 27.728 10.2535 24.8953 10.2535C22.0645 10.2535 19.7703 7.95775 19.7703 5.12673C19.7703 2.29572 22.0643 0 24.8953 0C27.7279 0 30.022 2.29572 30.022 5.12673Z"
                  fill="#FF9046"
                />
                <path
                  d="M28.3563 11.8086H21.4417C20.1385 11.8086 18.9095 12.1314 17.822 12.6924C21.547 13.9524 24.2431 17.4824 24.2431 21.6268C24.2431 21.7718 24.2344 21.9185 24.2172 22.0601H33.8733C35.1817 22.0601 36.2415 21.0002 36.2415 19.6918C36.2415 15.3351 32.7116 11.8086 28.3583 11.8086L28.3563 11.8086Z"
                  fill="#FF9046"
                />
              </svg>

              {/* Text and Arrow */}
              <div className="flex items-center justify-between">
                <h3
                  className="font-sarabun font-normal"
                  style={{
                    fontSize: "20px",
                    color: "#222B45",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Saved
                  <br />
                  candidates
                </h3>

                {/* Arrow Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image
                    src="/assets/arrow-hero.png"
                    alt="Arrow"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Active Campaigns Card */}
            <div
              className="flex flex-col justify-between bg-white rounded-3xl cursor-pointer hover:shadow-lg transition-all duration-200 flex-1"
              style={{
                height: "139px",
                padding: "24px 32px",
              }}
              onClick={onActiveCampaignsClick}
            >
              {/* Campaign Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="25"
                viewBox="0 0 36 25"
                fill="none"
              >
                <path
                  d="M35.6659 6.44978V12.1678C35.656 14.48 33.7891 16.3514 31.4825 16.3613H30.0307L26.9153 23.7633C26.7217 24.2106 26.2821 24.4984 25.7964 24.5C25.6275 24.4984 25.4601 24.4622 25.3059 24.3948C25.0106 24.2681 24.7777 24.028 24.6595 23.7287C24.5414 23.4278 24.548 23.094 24.6759 22.798L27.4238 16.3596L26.2164 16.3613C26.0425 16.3317 25.8653 16.3317 25.6914 16.3613L21.3161 17.8167C20.8896 17.9696 20.4401 18.0453 19.9856 18.0453C19.1047 18.0403 18.2483 17.7591 17.5363 17.2378C16.4355 16.4632 15.7826 15.2002 15.7859 13.8517V4.69501C15.7826 3.34816 16.4355 2.08352 17.5363 1.31057C18.6257 0.508067 20.0349 0.286033 21.3161 0.713598L25.6734 2.16899C25.8522 2.20517 26.0376 2.20517 26.2164 2.16899H31.4661C32.5932 2.16405 33.6743 2.6163 34.465 3.42213C35.2557 4.22796 35.6889 5.31999 35.6659 6.44978ZM13.1085 5.16869C10.8282 5.16869 8.97934 7.02204 8.97934 9.30957C8.97934 11.5955 10.8282 13.4488 13.1085 13.4488C13.7861 13.4488 14.334 12.8995 14.334 12.2204V6.39711C14.334 5.71956 13.7861 5.16869 13.1085 5.16869ZM7.01889 9.30957C7.01889 8.63695 6.48245 8.091 5.81146 8.0811H1.89224C1.21633 8.0811 0.666748 8.63038 0.666748 9.30957C0.666748 9.98713 1.21633 10.5364 1.89224 10.5364H5.81146C6.13464 10.5364 6.4447 10.4065 6.67274 10.1763C6.89914 9.94602 7.02381 9.63353 7.01889 9.30957ZM6.91389 5.48443C7.39947 5.96627 8.18037 5.96627 8.66435 5.48443C9.14502 4.99932 9.14502 4.21652 8.66435 3.73136L5.91645 0.889627C5.43415 0.404512 4.64997 0.404512 4.16763 0.889627C3.68369 1.3731 3.68369 2.15919 4.16763 2.6427L6.91389 5.48443ZM6.91389 13.3255L4.16763 16.0094C3.92811 16.238 3.79195 16.5554 3.79195 16.8875C3.79195 17.2181 3.92811 17.5355 4.16763 17.764C4.39074 17.9992 4.70079 18.1324 5.024 18.1324C5.36031 18.1373 5.68185 18.0041 5.91645 17.764L8.64629 14.9568C9.13023 14.4734 9.13023 13.6873 8.64629 13.2038C8.16399 12.7186 7.37982 12.7186 6.89747 13.2038L6.91389 13.3255Z"
                  fill="#FF9046"
                />
              </svg>

              {/* Text and Arrow */}
              <div className="flex items-center justify-between">
                <h3
                  className="font-sarabun font-normal"
                  style={{
                    fontSize: "20px",
                    color: "#222B45",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Active
                  <br />
                  campaigns
                </h3>

                {/* Arrow Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image
                    src="/assets/arrow-hero.png"
                    alt="Arrow"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Show All Jobs Card */}
            <div
              className="flex flex-col justify-between bg-white rounded-3xl cursor-pointer hover:shadow-lg transition-all duration-200 flex-1"
              style={{
                height: "139px",
                padding: "24px 32px",
              }}
              onClick={onShowAllJobsClick}
            >
              {/* Jobs Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.36881 4.01289C6.13249 4.01625 5.10449 4.03574 4.26498 4.14861C3.2112 4.29029 2.32393 4.59338 1.61925 5.29807C0.914573 6.00276 0.61147 6.89002 0.4698 7.94381C0.333339 8.95878 0.333351 10.2493 0.333375 11.8504V16.6618C0.333351 18.2629 0.333339 19.5534 0.4698 20.5684C0.61147 21.6222 0.914573 22.5094 1.61925 23.2142C2.32393 23.9188 3.2112 24.222 4.26498 24.3636C5.27997 24.5 6.5705 24.5 8.17158 24.5H16.4952C18.0963 24.5 19.3868 24.5 20.4018 24.3636C21.4556 24.222 22.3428 23.9188 23.0476 23.2142C23.7522 22.5094 24.0553 21.6222 24.197 20.5684C24.3334 19.5534 24.3334 18.2629 24.3334 16.6618V11.8504C24.3334 10.2493 24.3334 8.95879 24.197 7.94381C24.0553 6.89002 23.7522 6.00276 23.0476 5.29807C22.3428 4.59338 21.4556 4.29029 20.4018 4.14861C19.5623 4.03574 18.5343 4.01625 17.298 4.01289C17.1488 2.04794 15.5072 0.5 13.5041 0.5H11.1626C9.15951 0.5 7.51792 2.04794 7.36881 4.01289ZM9.13461 4.0122H15.5322C15.3902 3.01933 14.5362 2.2561 13.5041 2.2561H11.1626C10.1305 2.2561 9.27663 3.01933 9.13461 4.0122Z"
                  fill="#FF9046"
                />
              </svg>

              {/* Text and Arrow */}
              <div className="flex items-center justify-between">
                <h3
                  className="font-sarabun font-normal"
                  style={{
                    fontSize: "20px",
                    color: "#222B45",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Show
                  <br />
                  all jobs
                </h3>

                {/* Arrow Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image
                    src="/assets/arrow-hero.png"
                    alt="Arrow"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
    </div>
  );
};

export default HeroSection;
