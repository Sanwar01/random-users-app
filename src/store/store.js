import usersReducer from "../reducers/users";
import {createStore} from "redux";

const store = createStore(usersReducer);

store.subscribe(() => {
  console.log('store data:', store.getState());
})

export default store;
