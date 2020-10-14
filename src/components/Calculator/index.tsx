import React from "react";
import Button from "../Button";
import { useState } from "../../store";
import styles from "./styles.module.css";

export interface ICalculatorProps {}

const Calculator: React.FunctionComponent<ICalculatorProps> = () => {
  const state = useState();

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{state.number}</div>
      <div className={styles.buttons}>
        <Button content="7" />
        <Button content="8" />
        <Button content="9" />
        <Button content="÷" type="operator" />
        <Button content="4" />
        <Button content="5" />
        <Button content="6" />
        <Button content="×" type="operator" />
        <Button content="1" />
        <Button content="2" />
        <Button content="3" />
        <Button content="-" type="operator" />
        <Button content="0" />
        <Button content="AC" type="function" />
        <Button content="=" type="result" />
        <Button content="+" type="operator" />
      </div>
    </div>
  );
};

export default Calculator;
