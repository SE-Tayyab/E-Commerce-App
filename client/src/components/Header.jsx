import React from "react";
import Logo from "./logo";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <header className="h-16 p-3 shadow-md">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div className="">
          <Logo h={50} w={100} />
        </div>

        <div className="flex w-1/2 items-center justify-between">
          <div>
            <input type="text" placeholder="Search products here" />
            <div>
              <CiSearch />
            </div>
          </div>
          <div>hello</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
