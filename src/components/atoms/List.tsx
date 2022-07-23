import React from "react";

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
