import React from "react";

const Navbar = (props) => {
  const { pathURL, pathName } = props;
  return (
    <a
      href={pathURL}
      class="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {pathName}
    </a>
  );
};

export default Navbar;
