import React from "react";
import MiniUser from "./MiniUser";

const OwnersList = ({ owners }) => {
  return (
    <div className="owners-list">
      {owners.map((owners) => (
        <MiniUser owners={owners} />
      ))}
    </div>
  );
};

export default OwnersList;
