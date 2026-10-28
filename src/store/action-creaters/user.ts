import { UserActionTypes, UserAction } from "../../types/user";
import type { ThunkAction } from "redux-thunk";
import type { RootState } from "../index";
import axios from "axios";

export const fetchUsers =
  (): ThunkAction<Promise<void>, RootState, unknown, UserAction> =>
  async (dispatch) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setTimeout(() => {
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
      }, 1000);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };