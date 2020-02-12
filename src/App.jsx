import React from "react";

export default function App() {
  setTimeout(() => {
    getChunk().then(module => {
      module.default();
    });
  }, 5000);

  return <div>Hello World! Testuje drugie</div>;
}

function getChunk() {
  // const module = await import(/* webpackChunkName: "chunk" */ "./chunk");
  // console.log(module);

  return (module = import(/* webpackChunkName: "chunk" */ "./chunk"));
}
