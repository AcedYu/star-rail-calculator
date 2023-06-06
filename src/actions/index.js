const increment = () => {
  return {
    type: "INCREMEMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const login = () => {
  return {
    type: "SIGN_IN"
  };
};

export default {
  increment,
  decrement,
  login
};
