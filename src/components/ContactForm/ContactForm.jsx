// import { addContact } from 'redux/contactsSlice';
import { addContact } from 'redux/operations';

import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Wrapper, Input, Label, Span, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();
  const matchContact = contacts.find(contact => contact.name === name);

  const onNameChange = event => setName(event.target.value);
  const onNumberChange = event => setNumber(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (matchContact) {
      return toast.warn(`${name} is already in contacts`);
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    reset();

    return toast.success(`${name} added in your phonebook 📱`);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label>
        <Span>First Name</Span>
        <Input
          type="text"
          name="name "
          value={name}
          onChange={onNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Phone Number</Span>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit"> Add contact </Button>
    </Wrapper>
  );
}

export default ContactForm;
