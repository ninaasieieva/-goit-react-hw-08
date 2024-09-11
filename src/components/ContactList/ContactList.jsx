import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.length === 0 && (
          <li>
            <ErrorMessage message="No contacts available. Please add some contacts." />
          </li>
        )}
        {Array.isArray(filteredContacts) &&
          filteredContacts.map(({ id, name, number }) => (
            <Contact key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
