import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
        ${active ? "bg-blue-50 text-black" : " bg-[#b91c1c]"}
        hover:scale-95 transition-all duration-200
        `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
