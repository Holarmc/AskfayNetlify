import { Form } from "@remix-run/react";

import Input from "./Input";

const Search = () => {
  return (
    <div className="flex flex-row w-full">
      <form class="group relative w-full">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-pink"
          aria-hidden="true"
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#121212"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.9304 20.6888C19.4604 22.2888 20.6704 22.4488 21.6004 21.0488C22.4504 19.7688 21.8904 18.7188 20.3504 18.7188C19.2104 18.7088 18.5704 19.5988 18.9304 20.6888Z"
            stroke="#121212"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          class="focus:ring-2 focus:ring-pink focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-4 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="search term"
          placeholder="What are you looking for?"
        />
      </form>
    </div>
  );
};

export default Search;
