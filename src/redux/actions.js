export const setUser = (username) => {
  console.log("action: ", username);
  return {
    type: "SET_USER",
    value: username,
  };
};
