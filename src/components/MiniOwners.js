import React, { useState } from "react";
import Tags from "./Tags";
import OwnersList from "./OwnersList";

import data from "../ownersData";

const MiniOwners = () => {
  //State
  const [owners, setOwners] = useState(data());
  return (
    <div className="mini-owners">
      <h1>Mini Owners</h1>
      <Tags />
      <OwnersList owners={owners} />
    </div>
  );
};

export default MiniOwners;
