import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">BasicQ</Link>
        </li>
        <li>
          <Link to="/dependentQ">DependentQ</Link>
        </li>
        <li>
          <Link to="/cachedQ">CachedQ</Link>
        </li>
        <li>
          <Link to="/staledTimeQ">StaledTimeQ</Link>
        </li>
        <li>
          <Link to="/parallelQ">ParallelQ</Link>
        </li>
        <li>
          <Link to="/paginationQ">PaginationQ</Link>
        </li>
      </ul>
      <br />
      <br />
    </>
  );
};
