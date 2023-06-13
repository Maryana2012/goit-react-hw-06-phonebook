import { useSelector } from "react-redux";
import css from '../ContactList/ContactList.module.css'
import { contactsSelector, filterSelector } from "redux/selector";
import Contact from "components/Contact/Contact";

export default function ContactList() {
  const filtered = useSelector(filterSelector)
  const contact = useSelector(contactsSelector);
  
  const filteredContacts=contact.filter(el=>el.userName.toLowerCase().includes(filtered.toLowerCase()))
  
  return (<ul className={css.list}>
             {filteredContacts.map(element => <Contact key={element.id}
                id={element.id}
                name={element.userName}
                number={element.userNumber} /> )}
           </ul>)
}


