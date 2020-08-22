import * as React from "react";

type TagProps = {
  label: string
}

function Tag(props: TagProps) {


  return (
    <div className="tag">
      {props.label}
    </div>
  );
}

export default Tag;
