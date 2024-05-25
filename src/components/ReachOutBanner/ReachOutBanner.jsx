import React from "react";
import ReactOutImage from "./ReachOutImage";
import ReachOutText from "./ReachOutText";
const ReachOutBanner = () => {
  return (
    <div className="flex   h-fit lg:h-[60vh] flex-col lg:flex-row mt-12">
      <ReactOutImage />
      <ReachOutText />
    </div>
  );
};

export default ReachOutBanner;
