import React from "react";

const Navbar = (props) => {
  const { pathURL, pathName, menuType } = props;
  return (
    <>
      {menuType === "main" ? (
        <a
          href={pathURL}
          className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {pathName}
        </a>
      ) : (
        <a
          href={pathURL}
          className="text-gray-800 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {pathName}
        </a>
      )}
    </>
  );
};

export default Navbar;
