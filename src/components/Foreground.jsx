import React, { useRef, useState } from "react";

import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "lorem ipsuim dir hola laho sen maksuda",
      fileSize: "0.9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem ipsuim dir hola laho sen maksuda",
      fileSize: "0.9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "lorem ipsuim dir hola laho sen maksuda",
      fileSize: "0.9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem ipsuim dir hola laho sen maksuda",
      fileSize: "0.9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];

  return (
    <div
      ref={ref} 
      className="fixed p-5 top-0 left-0 z-10 w-full h-screen flex flex-wrap gap-5 "
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
