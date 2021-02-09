import React from "react";
import Handle from "./Handle";
import { ResizableBox } from "react-resizable";

export default function ResizableContainer(props) {
  return (
    <ResizableBox
      handle={
        <div>
          <Handle />
        </div>
      }
      style={{
        borderRadius: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
      width={200}
      height={200}
      {...props}
    ></ResizableBox>
  );
}
