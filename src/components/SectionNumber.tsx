import * as React from "react";
import { DotGrid } from "../components/SvgIcons";

type SectionNumberProps = {
  num: string
};

function SectionNumber(props: SectionNumberProps) {
  return (
    <div className="number-container">
      <div className="square"></div>
      <div className="number">
        <strong>{props.num}</strong>
      </div>
      <div className="dot-grid-svg">
        <DotGrid />
      </div>
    </div>
  );
}

export default SectionNumber;
