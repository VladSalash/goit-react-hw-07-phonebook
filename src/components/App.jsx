import ContactForm from './Contact/ContactForm/ContactForm';
import ContactList from './Contact/ContactList/ContactList';
import Filter from './Contact/Filter/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter title="Find contact by name" /> */}
      <ContactList />
    </div>
  );
};

export default App;
