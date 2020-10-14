type Action = {
  type: "DO_OPERATION";
  payload: {
    content: string;
    type: string | undefined;
  };
};

export default Action;
