import React from "react";

const Card = ({ children, css }) => {
  return <div className={css}>{children}</div>;
};

export default Card;
