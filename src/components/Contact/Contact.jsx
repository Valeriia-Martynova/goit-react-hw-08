import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import c from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, handleDelete }) => {
  return (
    <ul className={c.contactItem}>
      <li className={c.item}>
        <FaUser className={c.icon} />
        {name}
      </li>
      <li className={c.item}>
        <FaPhoneAlt className={c.icon} />
        {number}
      </li>
      <button className={c.btnDelete} onClick={() => handleDelete(id)}>
        <MdDelete className={c.iconDelete} />
        Delete
      </button>
    </ul>
  );
};

export default Contact;
