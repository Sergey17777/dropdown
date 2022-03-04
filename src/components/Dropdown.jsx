import React, { useState } from "react";


import data from "../db/dataListItems";
import DropdownList from "./DropdownList";

export default function Dropdown() {
  const [statusMenu, setDropdown] = useState();
  

  let isOpen;
  statusMenu === true ? (isOpen = "open") : (isOpen = "");

  const onClickMenu = () => setDropdown(!statusMenu);

  
let classesMenu = "dropdown-wrapper " + isOpen
  return (
    <div className="container">
      <div className={classesMenu}>
        <button className="btn" onClick={onClickMenu}>
          <span className="btn-title">Account settings</span>
          <i className="material-icons">public</i>
        </button>
        {statusMenu && (<DropdownList dataMenu={data}/>)}
      </div>
    </div>
  );
}
