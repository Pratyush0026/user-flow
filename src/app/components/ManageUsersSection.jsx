"use client";
import Image from "next/image";
import React from "react";

function ManageUsersSection({ users, onInviteRecruiter, onBack }) {
  return (
    <div className="space-y-6">
      {/* Current Users */}
      {users && users.length > 0 && (
        <div className="space-y-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-[12px] p-4 flex items-center justify-between"
            >
              <div className="space-y-1">
                <h3 className="text-[18px] md:text-[18px] font-sarabun font-semibold text-[#001242]">
                  {user.name}
                </h3>
                <p className="text-[16px] md:text-[16px] font-sarabun font-medium text-[#4A4B4B]">
                  {user.company}
                </p>
                <p className="text-[14px] font-sarabun font-normal text-[#959596]">
                  Joined date:{" "}
                  <span className="text-[#001242]">{user.joinDate}</span>
                </p>
              </div>

              <div className="bg-[#FBE8B5] px-3 py-1 rounded-[8px]">
                <span className="text-[12px] md:text-[14px] font-sarabun font-semibold text-[#FF9046]">
                  {user.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Manage Recruiters Section */}
      <div className="space-y-4">
        <h3 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#001242]">
          Manage recruiters
        </h3>

        {/* Empty State */}
        <div className="bg-[#F5F5F5] rounded-[12px] p-8 text-center space-y-6">
          {/* User Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-[#002DA5] rounded-full flex items-center justify-center">
              <Image
                src="/assets/user1-icon.png"
                alt="User Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Empty State Text */}
          <div className="space-y-2">
            <h4 className="text-[16px] md:text-[18px] font-sarabun font-semibold text-[#959596]">
              No users added
            </h4>
            <p className="text-[12px] md:text-[14px] font-sarabun font-medium text-[#001242] max-w-md mx-auto">
              Invite your team members today and manage your hiring effectively
            </p>
          </div>

          {/* Invite Button */}
          <button
            onClick={onInviteRecruiter}
            className=" border-2 border-[#002DA5] text-[#002DA5] px-6 py-3 rounded-[100px] font-sarabun font-semibold text-[14px] md:text-[16px] hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Invite recruiter
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[50px]"></div>

      {/* Bottom Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#4A4B4B] font-sarabun text-[14px] md:text-[16px] font-semibold hover:underline order-2 sm:order-1"
        >
          Back
        </button>

        <button className="bg-[#002DA5] text-white px-8 py-3 rounded-lg font-sarabun font-semibold text-[14px] md:text-[16px] hover:bg-blue-700 transition-colors order-1 sm:order-2">
          Post job
        </button>
      </div>
    </div>
  );
}

export default ManageUsersSection;
