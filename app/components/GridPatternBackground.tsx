import React from "react";
import { GridPattern } from "./GridPattern";

export default function GridPatternBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[300px] overflow-hidden -z-10 rotate-180">
        <GridPattern className="w-full h-auto" />
      </div>

      <div className="absolute top-0 left-0 w-[90%] h-32 bg-[#7059F2]/10 blur-3xl -z-40" />
      <div className="absolute bottom-0 left-0 w-[90%] h-32 bg-[#7059F2]/10 blur-3xl -z-40" />

      <div className="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden -z-10">
        <GridPattern className="w-full h-auto" />
      </div>
    </>
  );
}
