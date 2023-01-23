import { ContactList } from './ContactList/ContactList';
import { selectError, selectIsLoading } from '../redux/selectors';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'services/api';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        paddingLeft: '24px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
