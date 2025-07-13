import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        {/* Spinner */}
        <div className="w-20 h-20 mb-8 flex items-center justify-center">
          <svg className="animate-spin h-16 w-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">กำลังโหลด...</h1>
        <p className="text-lg text-gray-600 text-center max-w-md">โปรดรอสักครู่ ระบบกำลังเตรียมข้อมูลเพื่อประสบการณ์ที่ดีที่สุดสำหรับคุณ</p>
      </div>
    </div>
  );
} 