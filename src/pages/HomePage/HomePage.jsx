import { FaAddressBook } from "react-icons/fa";
import c from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <h1>
        <FaAddressBook />
        Phonebook
      </h1>
    </div>
  );
};

export default HomePage;
