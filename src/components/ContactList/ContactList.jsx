import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectors";

import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <div className={c.contactList}>
      {contacts.map((data) => (
        <Contact
          key={data.id}
          data={data}
          handleDelete={() => dispatch(deleteContact(data.id))}
        />
      ))}
    </div>
  );
};

export default ContactList;
