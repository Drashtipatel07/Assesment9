import Button from "./Button";

function UserItem({ user, onEdit, onDelete }) {
  return (
    <div className="card">
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <div className="actions">
        <Button
          className="edit"
          onClick={() => onEdit(user)}
        >
          Edit
        </Button>

        <Button
          className="delete"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default UserItem;