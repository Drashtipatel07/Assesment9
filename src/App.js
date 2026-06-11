import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import useUsers from "./hooks/useUsers";

function App() {
  const {
    users,
    addUser,
    deleteUser,
    updateUser,
  } = useUsers();

  const [editingUser, setEditingUser] = useState(null);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      <div className="stats">
        Total Users: {users.length}
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      <UserList
        users={filteredUsers}
        onEdit={setEditingUser}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default App;