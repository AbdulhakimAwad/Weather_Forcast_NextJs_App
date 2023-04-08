import React from "react";
import loading from "../public/loading.gif";
import Image from "next/image";
function Loading() {
  return (
    <div>
      <Image className=" w-[200px] block " src={loading} alt="loading..." />
    </div>
  );
}

export default Loading;
