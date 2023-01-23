import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountMenu from "../../components/accountMenu";


const DashBoard = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [day, setDay] = useState(
    new Date().toLocaleString("default", { weekday: "long" })
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString());
      setDay(new Date().toLocaleString("default", { weekday: "long" }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="wrapper">
        <nav className="navbar">
          <div className="logo">POS</div>
          <div className="date_and_time">
            {date} {time} {day}
          </div>

          <ol className="nav_list_right">
            <li>
              <Link to="/dashBoard">Home</Link>
            </li>
            <li>
              <Link to=" ">Products</Link>
            </li>
            <li>
              <Link to=" ">Sales</Link>
            </li>

            <li>
              <Link to=" ">
                <ShoppingCartOutlined />
              </Link>
            </li>
            <li>
              <Link to=" ">
                <AccountMenu/>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default DashBoard;
