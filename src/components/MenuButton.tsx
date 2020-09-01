import * as React from "react";

type MenuButtonProps = {
  label: string;
  active: boolean;
};

function MenuButton(props: MenuButtonProps) {
  return (
    <div
      className="menu-button"
      style={{
        background: props.active ? "#221C47" : "#rgba(34,28,71,0.4)",
        color: props.active ? "white" : "rgba(255, 255, 255, 0.5)",
      }}
      // onMouseOver
    >
      {props.label}
    </div>
  );
}

export default MenuButton;
