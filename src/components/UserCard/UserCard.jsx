import { Link } from "react-router-dom";
import "./UserCard.css";
import { routes } from "../../utils/routes";

function UserCard(props) {
  const { user } = props;
  return (
    <Link to={routes.profile} className="card user-card col">
      <div className="el-card-item">
        <div className="el-card-avatar el-overlay-1">
          <img src={user.avatar} alt="user" />
          <div className="el-overlay"></div>
        </div>
        <div className="el-card-content">
          <p className="m-b-0 fw-bold user-name">{user.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
