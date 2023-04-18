import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Nav = () => {
  const navigater = useNavigate()
  let localData = localStorage.getItem("user");
  return (
    <div className="navMain">
      
      {!localData ? (<>
        <Link to={"/"} className="imgRoute">
        <img src={logo} alt="logo" className="logo" />
      </Link>
        <ul className="navUl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Get Start</Link>
          </li>
        </ul>
        </>
      ) : (
        <>
        
        <img src={logo} alt="logo" className="logo" />
      
        <ul className="navUl">
          <li
            className="logoutBtn"
            onClick={() => {
              localStorage.removeItem("user");
              navigater('/')
              
            }}
          >
            Logout
          </li>
          <li
            className="logoutBtn"
            onClick={() => {
              localStorage.removeItem("notes");              
              setTimeout(() => {
                location.reload();
              }, 200);

            }}
          >
            Clear All
          </li>
        </ul>
        </>
      )}
    </div>
  );
};

export default Nav;
