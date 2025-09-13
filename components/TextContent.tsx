import React from "react";
interface ParagaphTextProps {
  anotherDescription?: string;
}
function ParagraphText({ anotherDescription }: ParagaphTextProps) {
  return (
    <>
      <p className="mb-5 text-sm lg:text-sm">{anotherDescription}</p>
    </>
  );
}

export default ParagraphText;
