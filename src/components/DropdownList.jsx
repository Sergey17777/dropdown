import React, { useState } from "react";
import PropTypes from "prop-types";
import DropdownItem from "./DropdownItem";

const USID = require("usid");
const usid = new USID();

export default function DropdownList(props) {
  const items = props.dataMenu;
  console.log(props);

  const [selected, setSelected] = useState(false);

  const onClickItem = (e) => {
    items.map((item) => {
      return item.name === e.target.textContent
        ? (item.status = true)
        : (item.status = false);
    });

    setSelected(!selected);
  };

  const ul = [];
  items.map((prop) => {
    const li = (
      <DropdownItem key={usid.rand()} item={prop} onClick={onClickItem} />
    );

    return ul.push(li);
  });

  return <ul className="dropdown">{ul}</ul>;
}

DropdownItem.propTypes = {
  props: PropTypes.shape({
    dataMenu: PropTypes.array.isRequired,
  }),
};
