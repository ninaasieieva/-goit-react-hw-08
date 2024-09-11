import { useDispatch } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";

import { MdDeleteForever } from "react-icons/md";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
  };

  return (
    <li className={css.item}>
      <p className={css.name}>
        <IoPersonSharp className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>
      <button className={css.delBtn} type="button" onClick={handleDelete}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default Contact;
