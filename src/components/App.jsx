import ContactForm from './Contact/ContactForm/ContactForm';
import ContactList from './Contact/ContactList/ContactList';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
