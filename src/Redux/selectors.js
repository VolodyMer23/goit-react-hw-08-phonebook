export const getFilter = state => state.phonebook.filter;
export const getContacts = state => state.phonebook.contacts.items;
export const getError = state => state.phonebook.contacts.error;
export const getLoading = state => state.phonebook.contacts.isLoading;
