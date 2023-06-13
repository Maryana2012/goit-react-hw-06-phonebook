import { useDispatch} from "react-redux";
import css from '../Contact/Contact.module.css';
import { deleteContact } from "redux/contactSlice";

export default function Contact({id,name, number}) {
  const dispatch = useDispatch();
    
  const handleDelete = () => dispatch(deleteContact(id));
    
    return (<li className={css.item} key={id}> {name}: {number}
               <button type='button' onClick={handleDelete}>delete</button></li>)
}



