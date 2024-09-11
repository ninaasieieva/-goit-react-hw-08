import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getContacts = async () => {
  const { data } = await axios.get("contacts");
  return data;
};

export const apiAddContact = async (contact) => {
  const { data } = await axios.post("contacts", contact);
  return data;
};

export const apiDeleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
