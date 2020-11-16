import React, { useState } from "react";
import Tags from "../components/Tags";
import OwnersList from "../components/OwnersList";

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
