const user = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("reduser user.js ADD_USER");
      console.log(state);
      return [
        ...state,
        {
          name: action.name,
          phone: action.phone,
          email: action.email
        }
      ];
    default:
      return state;
  }
};

export default user;
