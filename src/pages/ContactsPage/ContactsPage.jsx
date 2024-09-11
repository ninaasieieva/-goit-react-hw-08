import { ErrorMessage } from "formik";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";

import { selectAuthIsRefreshing } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully🎉");
      });
  }, [dispatch]);

  if (isRefreshing) return <p>User is refreshing, please wait</p>;

  return (
    <div>
      <div className="container">
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {error && (
          <ErrorMessage message="Failed to load contacts. Please try again later." />
        )}
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
