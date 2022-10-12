import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction={"row"}
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      background: "#000",
    }}
    alignItems={"center"}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
