import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    links.map((newLink) => (
      <a href={'#' + newLink} key={newLink}>{newLink}</a>
    ))
  }</nav>;
}

export default NavBar;