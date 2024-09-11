import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import LogoutModal from "../LogoutModal/LogoutModal";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    setModalOpen(true);
  };

  const confirmLogout = () => {
    dispatch(apiLogout());
    setModalOpen(false);
  };

  const cancelLogout = () => {
    setModalOpen(false);
  };

  // const handleLogout = () => {
  //   dispatch(apiLogout());
  // };
  return (
    <div className={css.container}>
      <div className={css.text}>
        <p>Welcome, {user.name}!</p>
        <p>Email: {user.email}</p>
      </div>
      <button type="button" className={css.button} onClick={handleLogout}>
        Log out <IoIosLogOut />
      </button>
      <LogoutModal
        isOpen={isModalOpen}
        onRequestClose={cancelLogout}
        onConfirm={confirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </div>
  );
};

export default UserMenu;
