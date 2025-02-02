'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search( {placeholder}) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const  handleSearch = useDebouncedCallback((terms) =>  {
        const params = new URLSearchParams(searchParams);
        if(terms && terms.trim() !== '') {
            params.set('query', terms);
        }else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
        className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )
}