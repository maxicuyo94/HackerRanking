
let initialState = {
  user: {},
  isadmin:false
};

const login = (state = initialState, action) => {

  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      }
    case "GET_ADMIN":
      return {
        ...state,
        user: action.payload,
        isadmin:true
      }
    default:
      return state;
  }
}

export default login;
