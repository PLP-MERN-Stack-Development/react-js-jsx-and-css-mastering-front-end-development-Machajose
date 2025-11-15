import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchUsers";
import Loader from "../components/Loader";
import Card from "../components/Card";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {users.map(user => (
        <Card key={user.id} title={user.name} body={user.email} />
      ))}
    </div>
  );
}
