import css from "./HomePage.module.css";
import { FaAddressBook } from "react-icons/fa";
import { TfiCommentsSmiley } from "react-icons/tfi";

const HomePage = () => {
  return (
    <div className={css.title}>
      <h1>
        Welcome to the Contacts Book App <FaAddressBook />
      </h1>
      <p className={css.text}>
        Make your life easier <TfiCommentsSmiley />
      </p>
    </div>
  );
};

export default HomePage;
