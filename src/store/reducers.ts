import Action from "./actions";
import { IState } from "../interfaces";

function reducers(state: IState, action: Action) {
  switch (action.type) {
    case "DO_OPERATION":
      return operationReducers(state, action);

    default:
      return state;
  }
}

function operationReducers(state: IState, action: Action) {
  switch (action.payload.type) {
    case undefined: {
      const number = parseFloat(state.number.toString() + action.payload.content);
      return { ...state, number };
    }

    case "operator": {
      let memory = state.number;
      if (state.operator !== "") {
        memory = eval(state.memory + state.operator + state.number);
      }
      const operator = action.payload.content.replace("÷", "/").replace("×", "*");
      return { ...state, number: 0, memory, operator };
    }

    case "result": {
      const number = eval(state.memory + state.operator + state.number);
      return { ...state, number, operator: "" };
    }

    default:
      return state;
  }
}

export default reducers;
