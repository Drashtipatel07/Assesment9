import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import Button from "./Button";

function UserForm({
  addUser,
  updateUser,
  editingUser,
  setEditingUser,
}) {
  const [name, setName] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    nameRef.current.focus();

    if (editingUser) {
      setName(editingUser.name);
      emailRef.current.value = editingUser.email;
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: editingUser ? editingUser.id : Date.now(),
      name,
      email: emailRef.current.value,
    };

    if (editingUser) {
      updateUser(user);
      setEditingUser(null);
    } else {
      addUser(user);
    }

    setName("");
    emailRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        ref={nameRef}
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Input
        ref={emailRef}
        type="email"
        placeholder="Enter Email"
        required
      />

      <Button className="add">
        {editingUser ? "Update User" : "Add User"}
      </Button>
    </form>
  );
}

export default UserForm;