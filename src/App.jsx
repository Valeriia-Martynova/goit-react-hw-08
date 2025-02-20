import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import { FaAddressBook } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>
        <FaAddressBook />
        Phonebook
      </h1>
      <ContactForm />
      <h2>
        <RiContactsLine />
        Contacts
      </h2>
      <SearchBox />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}
