import "./Users.css";
import UserCard from "../UserCard/UserCard";
import { usersList } from "../../utils/constants";

function Users() {
  return (
    <div className="container mb-5 mt-5 py-5 users">
      <div className="row el-element-overlay m-4 justify-content-center">
        <div className="row row-cols-auto user-card-container">
          {usersList.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
