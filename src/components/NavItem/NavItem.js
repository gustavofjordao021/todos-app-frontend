import React from "react";

// NavItem component takes 3 props: `pathURL`, `pathName`, and `menuType`. `pathURL` is the URL drilled down from the parent component that the button will route users onClick, `pathName` is the pathname visible to users, and `menuType` is the type of UI needed for the button.
const Navbar = (props) => {
  const { pathURL, pathName, menuType } = props;
  return (
    <>
      {menuType === "primary" ? (
        <a
          href={pathURL}
          className="text-black font-bold hover:bg-white hover:text-indigo-700 px-3 py-2 rounded-md text-sm "
        >
          <span className="z-20 relative">{pathName}</span>
          <div className="bg-indigo-300 absolute w-16 top-5 left-16 h-1 z-10"></div>          
        </a>
      ) : menuType === "secondary" ? (
        <a
          href={pathURL}
          className="text-black bg-white hover:bg-white hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          {pathName}
        </a>
      ) : menuType === "danger" ? (
        <a
          href={pathURL}
          className="text-white bg-red-600 hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium"
        >
          {pathName}
        </a>
      ) : (
        <a
          href={pathURL}
          className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {pathName}
        </a>
      )}
    </>
  );
};

export default Navbar;
