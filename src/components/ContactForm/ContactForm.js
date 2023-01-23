import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../services/api';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/selectors';

import {
  FormContact,
  AddContact,
  NameInput,
  TelInput,
} from './ContactForm.styled';

export function ContactForm() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (
      contacts.find(
        item =>
          item.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(
        `A contact with the name ${form.elements.name.value} already exists.`
      );
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        phone: form.elements.phone.value,
      })
    );

    form.reset();
  };

  NameInput.id = nanoid();
  TelInput.id = nanoid();
  return (
    <FormContact onSubmit={handleSubmit}>
      <label htmlFor={NameInput.id}>Name</label>
      <NameInput
        type="text"
        name="name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={NameInput.id}
      />
      <label htmlFor={TelInput.id}>Number</label>
      <TelInput
        type="tel"
        name="phone"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={TelInput.id}
      />
      <AddContact type="submit" value="Add contact" />
    </FormContact>
  );
}
