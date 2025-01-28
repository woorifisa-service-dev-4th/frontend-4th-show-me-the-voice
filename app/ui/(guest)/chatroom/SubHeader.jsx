'use client';

import React, { useState } from 'react';
import SelectDemo from '../../(host)/chatlist/Select';
import { useRouter } from 'next/navigation';


export default function SubHeader({ chatroomId}) {

  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

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


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const encodedQuery = encodeURIComponent(query);
    router.push(`?query=${encodedQuery}`);
  };



  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white mb-4">
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
          <input
            type="text"
            placeholder="Search contacts"
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
