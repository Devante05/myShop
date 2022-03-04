import React, { createContext, useReducer, useContext } from "react";
// Don't forget to import all of your actions!
import {
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_CURRENT_POST,
  ADD_USER,
  LOADING
} from "./actions.js";


const StoreContext = createContext();
const { Provider } = StoreContext;

const initialState = {
  user: {
    email: "",
    userName: "",
    lastLogin: ""
  },
  posts: [],
  currentPost: {
    _id: 0,
    username: "",
    plantName: "",
    location: "",
    cost: "",
    description: "",
    image: ""
  },
  favorites: [],
  loading: false
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log("Getting Post in GS", {action})
      return {
        ...state,
        user: {...action.user},
        loading: false
      };
    case GET_POSTS:
      console.log("Getting Post in GS", {action})
      return {
        ...state,
        posts: [...action.posts],
        loading: false
      };
    case ADD_POST:
      console.log("Adding Post in GS")
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false
      };
    case REMOVE_POST:
      console.log("Removing Post in GS")
      return {
        ...state,
        posts: state.posts.filter(item => item._id !== action._id),
        loading: false
      };
    case SET_CURRENT_POST:
      console.log("Setting Post in GS")
      return {
        ...state,
        currentPost: action.post,
        loading: false
      };
    case LOADING:
      console.log("Loading in GS")
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
