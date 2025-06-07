import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div>
      <Image
        src={"/cardImage/banner.jpg"}
        alt="images"
        width={200}
        height={300}
        className="w-full object-center"
      />
    </div>
  );
}

export default Banner;
