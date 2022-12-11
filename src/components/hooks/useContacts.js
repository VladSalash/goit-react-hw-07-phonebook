import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';

import { useGetContactsQuery } from 'redux/services/contactsAPI';

import { createSelector } from '@reduxjs/toolkit';

const useContacts = () => {
  const filter = useSelector(selectFilter);

  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        return (
          contacts?.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: selectFilteredContacts(result, filter),
      };
    },
  });
};

export default useContacts;
