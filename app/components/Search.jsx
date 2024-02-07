import { Form } from "@remix-run/react";

import Input from "./Input";

const Search = () => {
  return (
    <div className="flex flex-row w-full bg-pink">
      <Form id="search-form p" role="search">
        <div className="relative box-border w-full pl-8 bg-search bg-no-repeat bg-leftx-topy bg-auto">
          <input
            id="q"
            aria-label="search contacts"
            placeholder="search"
            type="search"
            name="q"
          />
        </div>
        <div
          className="w-4 h-4 absolute left-2.5 top-3 bg-spinner"
          aria-hidden
          hidden={true}
        />
      </Form>
    </div>
  );
};

export default Search;
