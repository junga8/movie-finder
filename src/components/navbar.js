import React, { Component } from "react";
import Search from "./search";
import { Link, Router, Switch, Route } from "react-router-dom";
import search from "./search";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="/search" className="brand-logo">
          Movie Finder
        </a>
      </div>
    </nav>
  );
};

export default Nav;
