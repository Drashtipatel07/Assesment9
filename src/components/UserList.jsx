import UserItem from "./UserItem";

function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="empty">
        <h2>No Users Found</h2>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default UserList;