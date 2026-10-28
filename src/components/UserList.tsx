import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { ThunkDispatch } from "redux-thunk";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/action-creaters/user";
import type { RootState } from "../store";
import type { UserAction } from "../types/user";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch() as ThunkDispatch<RootState, unknown, UserAction>;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;