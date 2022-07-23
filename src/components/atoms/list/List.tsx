import React from "react";

// we dont need to export a type; we do with interfaces
type Props = {
  children: JSX.Element | JSX.Element[];
};

const List: React.FC<Props> = ({ children }) => {
  return (
    <ul
      style={{
        padding: "0",
      }}
    >
      {children}
    </ul>
  );
};

export default List;
