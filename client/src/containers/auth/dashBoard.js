import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Avatar from "@mui/material/Avatar";
import image from "../../image/profile.jpg";
import { useState, useEffect } from "react";

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
              <a href="/dashBoard">Home</a>
            </li>
            <li>
              <a href=" ">Products</a>
            </li>
            <li>
              <a href=" ">Sales</a>
            </li>

            <li>
              <a href=" ">
                <ShoppingCartOutlined />
              </a>
            </li>
            <li>
              <a href=" ">
                <Avatar src={image} alt="Profile" />
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default DashBoard;
