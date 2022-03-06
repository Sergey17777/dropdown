import React, { useState } from "react";
import PropTypes from "prop-types";
import DropdownItem from "./DropdownItem";

const USID = require("usid");
const usid = new USID();

export default function DropdownList(props) {
  const items = props.dataMenu;

  const [selected, setSelected] = useState(false);

  const onClickItem = (e) => {
    items.map((item) => {
      return item.name === e.target.textContent
        ? (item.status = true)
        : (item.status = false);
    });

    setSelected(!selected);
  };

  return (
    <ul className="dropdown">
      {items.map((prop) => {
        return (
          <DropdownItem key={usid.rand()} item={prop} onClick={onClickItem} />
        );
      })}
    </ul>
  );
}

DropdownItem.propTypes = {
  props: PropTypes.shape({
    dataMenu: PropTypes.array.isRequired,
  }),
};
