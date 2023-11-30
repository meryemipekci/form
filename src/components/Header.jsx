import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Forum</h1>
      <NavLink to={"/"}>Gonderiler</NavLink>
      <NavLink to={"/add-post"}>Gonderi Ekle</NavLink>
    </header>
  );
};

export default Header;
