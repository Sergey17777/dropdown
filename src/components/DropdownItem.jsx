import React from "react";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

export default function DropdownItem(props) {
  
  const { item } = props;
  let highlight;

  item.status === true
    ? (highlight = { color: "#507cfb" })
    : (highlight = { color: "inherit" });

  return (
    <li
      key={usid.rand()}
      data-status={item.status}
      className="menu-item"
      onClick={props.onClick}
    >
      <a className="menu-link" href="#dropdown" style={highlight}>
        {item.name}
      </a>
    </li>
  );
}

DropdownItem.propTypes = {
    item:PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
})
}