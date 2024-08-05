import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import logo from "../../assets/letswhy_logo.svg"; // import your logo image
import Login from "../../views/login";
import SignUp from "../../views/signup";
import UserProfile from "./userProfile";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalVisible(!isLoginModalVisible);
    setIsSignupModalVisible(false);
  };

  const toggleSignupModal = () => {
    setIsSignupModalVisible(!isSignupModalVisible);
    setIsLoginModalVisible(false);
  };

  const handleLogout = () => {
    alert("signing off");
    setUser(null);
  };

  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center px-16 py-2 z-[999]">
      <img src={logo} alt="Logo" className="h-12" />
      {user ? (
        <span className="grid gap-8 grid-flow-col place-items-center">
          <Login
            openModal={isLoginModalVisible}
            toggleLoginModal={toggleLoginModal}
            toggleSignupModal={toggleSignupModal}
          />
          <SignUp
            openModal={isSignupModalVisible}
            toggleLoginModal={toggleLoginModal}
            toggleSignupModal={toggleSignupModal}
          />
        </span>
      ) : (
        <UserProfile user={user} onLogout={handleLogout} />
      )}
    </header>
  );
};

export default Header;
