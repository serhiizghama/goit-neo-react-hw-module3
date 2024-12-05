import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

function ContactList({ contactList = [], onDelete }) {
  return (
    <div className={css.contacts}>
      {contactList.map(itm => {
        return (<Contact key={itm.id} onDelete={onDelete} {...itm} />)
      })}
    </div>)
}

export default ContactList
