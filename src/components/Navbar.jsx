import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark   ">
        <div className="container-fluid">
          <a className="navbar-brand text-info " href="/">
            <img
              src="/logo192.png"
              alt="Logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top "
            />
            StockCart
          </a>
        </div>
      </nav>
    </>
  );
}
