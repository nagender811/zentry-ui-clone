import React from "react";

const Button = ({ title, rightIcon, leftIcon, containerClass, id }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-genral text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
