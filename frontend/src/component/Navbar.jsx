// import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Link to="/Login">Profile</Link>,
          "Settings",
          "Send email",
          "Drafts",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Link to="/Login">
                    <AccountCircleRoundedIcon />
                  </Link>
                ) : (
                  <SettingsRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // const [showMoreLinks, setShowMoreLinks] = useState(false);

  // const handleToggleModal = () => {
  //   setShowMoreLinks(!showMoreLinks);
  // };

  // const handleCloseModal = () => {
  //   setShowMoreLinks(false);
  // };

  return (
    <nav className=" fixed top-0 left-0 z-50 w-full text-2xl flex justify-between font-medium p-4 bg-white">
      <div className="flex justify-start">
        <img className="w-60 flex ml-6" src="/assets/logo.svg" alt="" />
      </div>
      <div className=" flex justify-center gap-12">
        <Link className=" hover:border-b-2 border-black" to={"/"}>
          Home
        </Link>
        <Link className=" hover:border-b-2 border-black" to={"/Product"}>
          Products
        </Link>
        <Link className=" hover:border-b-2 border-black" to={"/About"}>
          About
        </Link>
      </div>
      {/* <div className="flex gap-6">
        <img
          className="w-[20px] cursor-pointer"
          src="/assets/user.svg"
          alt=""
        />
        <img
          className="w-[20px] cursor-pointer"
          src="/assets/shopping-cart.svg"
          alt=""
        />
        <img
          className="w-[20px] cursor-pointer"
          src="/assets/menu-burger.svg"
          alt=""
        />
      </div> */}
      <div className="">
        <React.Fragment key={"right"}>
          <Button onClick={toggleDrawer("right", true)}>
            <MenuRoundedIcon />
          </Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      </div>

      {/* <div className="relative font-thin">
        <button onClick={handleToggleModal}>•••</button>
        {showMoreLinks && (
          <div className="absolute top-8 right-1 w-40 bg-white border border-gray-300 shadow-lg rounded-lg">
            <div className="bg-white p-9 gap-3 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2"
                onClick={handleCloseModal}
              >
                ✖
              </button>
              <ul>
                <li>
                  <Link to="/Login" onClick={handleCloseModal}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/BlogPost" onClick={handleCloseModal}>
                    Blog post
                  </Link>
                </li>
                <li>
                  <Link to="/PlaceOrder" onClick={handleCloseModal}>
                    Your Order
                  </Link>
                </li>
                <li>
                  <Link to="/CartPage" onClick={handleCloseModal}>
                    Your Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
