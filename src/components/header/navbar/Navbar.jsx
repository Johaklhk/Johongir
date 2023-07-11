import React from "react";
import n from './Navbar.module.css'
import logo from './logo (1).png'
function Navbar() {
  return <div className={n.big}>
    <div className={n.box}>
      <div className={n.l}>
        <img src={logo} alt="" />
      </div>
    </div>
  </div>;
}

export default Navbar;
