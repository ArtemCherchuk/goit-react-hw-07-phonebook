export const selectContacts = state => state.contactsStore.contacts.items;
export const selectIsLoading = state => state.contactsStore.contacts.isLoading;
export const selectError = state => state.contactsStore.contacts.error;
export const selectFilter = state => state.contactsStore.filter;
