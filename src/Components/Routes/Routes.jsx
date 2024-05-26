import { Navitems } from "../Navbar/NavitemsData";
import "./Routes.css";
import { Link } from "react-router-dom";

const Routes = ({ type, setCollapse, collapse }) => {
  const handleClick = () => {
    if (type === "navbar") return;
    setCollapse(false);
  };

  return (
    <div className={`collapseroutes routes`}>
      {collapse && (
        <button className="navclose" onClick={() => setCollapse(false)}>
          Close
        </button>
      )}

      <ul>
        {Navitems?.map((data) => (
          <li key={data.id} className="collapse" onClick={handleClick}>
            <Link
              to={data.to}
              style={{
                textDecoration: "none",
                color: "var(--secondary-color)",
              }}
            >
              {data.route}
            </Link>
          </li>
        ))}
      </ul>

      <span className="bookings" onClick={handleClick}>
        <Link
          to="/mybookings"
          style={{ textDecoration: "none", color: "white" }}
        >
          My Bookings
        </Link>
      </span>
    </div>
  );
};

export default Routes;
