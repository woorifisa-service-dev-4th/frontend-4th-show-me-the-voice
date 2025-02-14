'use client';

import React, { useState } from 'react';
import SelectDemo from '../../(host)/chatlist/Select';
import { useRouter } from 'next/navigation';
import Search from './Search';



export default function SubHeader({ chatroomId}) {

  const selectOptions = {
    default: "Default",
    popular: "Popular",
    recent: "Recent",
  };

  const optionsArray = Object.entries(selectOptions).map(([value, label]) => ({
    value,
    label,
  }));

  const defaultValue = optionsArray[0].value;


  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-2">
        <button className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="relative">
          <Search placeholder="검색어를 입력하세요"></Search>
        </div>
      </div>

      <div>
        <SelectDemo defaultValue={defaultValue}>
          {selectOptions}
        </SelectDemo>
      </div>
    </div>

  );
}
