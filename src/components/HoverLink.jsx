import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const HoverLink = ({
    href = "#",
    children,
    underline = false,
    className = "",
    target = "_self",
    withDot = false,
    active = false
  }) => {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={clsx(
          "relative group flex items-center transition-colors duration-300",
          active ? "text-purple-400" : "text-white-400 hover:text-purple-400",
          className
        )}
      >
        {withDot && (
          <span
            className={clsx(
              "inline-block w-2.5 h-2.5 mr-3 rounded-full transition-transform duration-300",
              active ? "bg-teal-400 scale-100" : "bg-white-600 group-hover:scale-110"
            )}
          />
        )}
        {children}
        {underline && (
          <span
            className={clsx(
              "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
              active ? "w-full bg-teal-400" : "w-0 group-hover:w-full bg-teal-400"
            )}
          />
        )}
      </a>
    );
  };
  

HoverLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  underline: PropTypes.bool,
  className: PropTypes.string,
  target: PropTypes.string,
  withDot: PropTypes.bool,
};

export default HoverLink;
