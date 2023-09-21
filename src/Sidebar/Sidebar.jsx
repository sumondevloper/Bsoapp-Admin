import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/bso.png';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Set isOpen to true by default

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = () => {
    setIsOpen(true);
  };
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <i className="fa-solid fa-chart-line"></i>
    },
    {
      path: "/orders",
      name: "Customer",
      icon: <i className="fa-solid fa-truck"></i>
    },
    {
      path: "/campaign",
      name: "Campaign",
      icon: <i className="fa-solid fa-rectangle-ad"></i>
    },
    {
      path: "/customer",
      name: "Order",
      icon: <i className="fa-solid fa-user-plus"></i>
    },
    {
      path: "/team",
      name: "Team",
      icon: <i className="fa-solid fa-user"></i>
    },
    {
      path: "/schedule",
      name: "Schedule",
      icon: <i className="fa-solid fa-calendar-days"></i>
    },
    {
      path: "/reports",
      name: "Integration",
      icon: <i className="fa-solid fa-chart-simple"></i>
    },
    {
      path: "/integrations",
      name: "Report & Analytics",
      icon: <i className="fa-solid fa-code"></i>
    },
    {
      path: "/planes",
      name: "Plan & Validity",
      icon: <i className="fa-solid fa-globe"></i>
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <i className="fa-solid fa-right-to-bracket"></i>
    },
  ];

  return (
    <div className="maincontainer">
      <ul className="firstul">
        <li><i className="fa-solid fa-circle-question"></i><Link to={'#'}>Help</Link></li>
        <li><i className="fa-solid fa-bell"></i><Link to={'#'}>Notification(0)</Link></li>
        <li><i className="fa-solid fa-envelope"></i><Link to={'#'}>Message(0)</Link></li>
        <li><i className="fa-solid fa-building"></i><Link to={'#'}>Service Sarkar</Link></li>
        <li className='log'><i className="fa-solid fa-circle-user"></i><Link to={'#'}>bsoapp@gmail.com</Link></li>
      </ul>
      <div className="container-btn">
        <button className='butt'><i className="fa-solid fa-circle-user"></i></button>
      </div>
      <div className="container">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="top-nav">
            <button className="toggle-button" onClick={toggleSidebar}>
              {isOpen ? <i className="fas fa-bars"></i> : <i className="fas fa-xmark"></i>}
            </button>
            <img src={Logo} alt="logo" />
            <h4>Admin</h4>
          </div>
          {menuItems.map((item, index) => (
            <ul key={index} className="mainul">
              <li className="mainli">
                <Link to={item.path} onClick={handleMenuItemClick}>{item.icon}</Link>
                <Link to={item.path} className="link" onClick={handleMenuItemClick}>
                  {item.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
