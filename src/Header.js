import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ReactComponent as LinkedIn } from "./icons/linkedin.svg";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedIn />

        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search"/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" /> 
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />        
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQHpQOJCYmlpUA/profile-displayphoto-shrink_100_100/0/1566804216535?e=1638403200&v=beta&t=SJuhpFQlfM3wfBvwTnZuB0v8x1Wih2430XyJNYw5J78" title="Me"></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
