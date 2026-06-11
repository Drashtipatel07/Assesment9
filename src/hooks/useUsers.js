import { useState, useEffect } from "react";
import { getUsers, saveUsers } from "../utils/storage";

function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  useEffect(() => {
    saveUsers(users);
  }, [users]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const deleteUser = (id) => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );
  };

  return {
    users,
    addUser,
    deleteUser,
    updateUser,
  };
}

export default useUsers;