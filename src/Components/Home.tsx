import React from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
