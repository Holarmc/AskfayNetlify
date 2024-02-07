import React from "react";

function Aside() {
  return (
    <React.Fragment>
      <label className="w-8 h-px block cursor-pointer md:hidden">
        <input type="checkbox" className="peer sr-only" />
        <span
          className="
          relative
          z-30
          w-8 
          h-0.5 
          block 
          bg-black01
          rounded-full 
          transition-all 
          duration-150         
          
          before:absolute 
          before:w-8 
          before:h-0.5 
          before:bg-black01 
          before:rounded-full 
          before:-translate-y-2 
          before:transition-all 
          before:duration-150
          
          after:absolute 
          after:w-8 
          after:h-0.5 
          after:bg-black01 
          after:rounded-full 
          after:translate-y-2 
          after:transition-all 
          after:duration-150
          
          peer-checked:bg-transparent
          peer-checked:before:translate-y-0
          peer-checked:before:rotate-45
          peer-checked:after:translate-y-0
          peer-checked:after:-rotate-45
          "
        ></span>

        {/* <div className="h-dvh w-screen flex items-center  justify-start absolute top-0 left-0"> */}
        <div className="z-20 fixed top-0 -left-full h-screen w-full sm:w-9/12 bg-light shadow-2xl peer-checked:left-0 peer:transition ease-out delay-150 duration-300">
          <nav role="navigation">
            <ul className="p-6">
              <li>Services</li>
              <li>Shop</li>
              <li>Community</li>
              <li>Articles</li>
              <li>Visual media</li>
              <li>Bookmarks</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
        <div className="z-10 fixed top-0 left-0 h-screen w-screen bg-gray900 bg-opacity-0 peer-checked:bg-opacity-30 peer-checked:transition duration-200 "></div>
        {/* </div> */}
      </label>
    </React.Fragment>
  );
}

export default Aside;
