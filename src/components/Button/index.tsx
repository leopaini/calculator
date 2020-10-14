import React from "react";
import cx from "classnames";
import { useDispatch } from "../../store";
import { IButtonProps } from "../../interfaces";

import styles from "./styles.module.css";

const Button: React.FunctionComponent<IButtonProps> = ({ content, type }) => {
  const dispatch = useDispatch();
  const buttonStyles = cx(styles.button, {
    [styles.operator]: type === "operator",
    [styles.function]: type === "function"
  });

  const handleClick = () => {
    dispatch({ type: "DO_OPERATION", payload: { content, type } });
  };

  return (
    <div className={buttonStyles} onClick={handleClick}>
      {content}
    </div>
  );
};

export default Button;
