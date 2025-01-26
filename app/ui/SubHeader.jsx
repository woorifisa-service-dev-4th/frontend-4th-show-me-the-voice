import React from 'react';
import SelectDemo from './Select';


export default function SubHeader({ selectOptions }) {

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
          <input
            type="text"
            placeholder="Search contacts"
            className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 19.5L15.75 15.75"
              />
              <circle cx="11" cy="11" r="6" />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <SelectDemo defaultValue= {defaultValue}>
          {selectOptions}
        </SelectDemo>
      </div>
    </div>

  );
}
