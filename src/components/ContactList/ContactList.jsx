import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import { List, Item, Button } from './ContactList.style';

const ContactList = () => {
  const contacts = useSelector(state => state.contact.contacts);

  const filter = useSelector(state => state.contact.filter);

  const dispatch = useDispatch();

  const renderContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {renderContactList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name} : {number}
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
