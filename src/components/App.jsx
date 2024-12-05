import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import defaultContactList from '../defaultContactList.json'

function getDefaultContactList() {
  const contactListStr = localStorage.getItem("my-phonebook");
  if (contactListStr === null)
    return defaultContactList;
  return JSON.parse(contactListStr);
}

function App() {
  const [contactList, setContactList] = useState(getDefaultContactList);

  function deleteContact(id) {
    setContactList(contactList.filter(itm => { return itm.id != id }))
  }
  function addContact({ name, number }) {
    setContactList(contactList.concat([{
      id: nanoid(),
      name: name,
      number: number
    }]))
  }
  function searchContacts(name) {
    return contactList.filter(itm => { return itm.name.search(RegExp(name, 'i')) >= 0 })
  }

  useEffect(() => {
    localStorage.setItem("my-phonebook", JSON.stringify(contactList))
  }, [contactList])

  const [searchName, setSearchName] = useState('');

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNew={addContact} />
      <SearchBox searchName={searchName} onChange={setSearchName} />
      <ContactList contactList={searchContacts(searchName)} onDelete={deleteContact} />
    </div>
  )
}

export default App
