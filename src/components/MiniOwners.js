import React from "react";
import Tags from "./Tags";
import OwnersList from "./OwnersList";

const MiniOwners = () => {
  return (
    <div className="mini-owners">
      <h1>Mini Owners</h1>
      <Tags />
      <OwnersList />
    </div>
  );
};

export default MiniOwners;
