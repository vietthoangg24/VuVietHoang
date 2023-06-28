import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import './header.css'

const Header = () => {
  const activeClass = (params) => {
    return params.isActive ? "active-item" : "";
  };

  return (
    <SHeader>
      <h1>#todo</h1>
      <ul>
        <li>
          <NavLink to="/" className={activeClass}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" className={activeClass}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" className={activeClass}>
            Completed
          </NavLink>
        </li>
      </ul>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    margin-left: -16%;
  }

  ul {
    display: flex;
    gap: 10rem;
    list-style-type: none;
    height: 40px;
    width: 100%;
    border-bottom: 2px solid gainsboro;
    li {
      a {
        color: black;
        text-decoration: none;
        font-size: 20px;
      }
    }
  }

  .active-item {
    border-bottom: 5px solid rgb(60, 60, 251);
  }
`;
