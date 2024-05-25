import React from "react";
import JoinSectionText from "./JoinSectionText";
import JoinSectionImage from "./JoinSectionImage";

const JoinGroupSection = () => {
  return (
    <div className="flex  h-fit lg:h-[60vh] flex-col-reverse lg:flex-row mt-12">
      <JoinSectionText />
      <JoinSectionImage />
    </div>
  );
};

export default JoinGroupSection;
