import ComingSoon from "@/components/core/ComingSoon";
import Header from "@/components/core/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-4">
        <Header title="Rental Management" />
      </div>
      <ComingSoon />
    </>
  );
};

export default page;
