

import { useDispatch, useSelector } from "react-redux";

import { addContact, newName, newNumber } from "redux/slice";
import css from '../Form/Form.module.css'

export default function Form() {
  // const id = useSelector((state)=>state.id)
  // const name = useSelector((state) => state.userName);
  // const number = useSelector((state) => state.userNumber);
  // console.log('name',name);
  // console.log('number',number);
  
  
  // const handleChangeName = (event) => {
    //   const name = event.target.value;
    //   return name;
    // dispatch({type: 'newName', payload: newName })
    
  // }
  
  // const handleChangeNumber = (event) => {
    //   const number = event.target.value;
    //   return number;
    // console.log(newNumber);
    // dispatch({type: 'newNumber', payload: newNumber })
    
    // }
    const dispatch = useDispatch();
  const handleSubmit = (event) => {

    event.preventDefault(); 
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  }
  
  const contact = useSelector((state) => state.contact)
  console.log(contact);
 
  
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChangeName=(event)=>{
  //   setName(event.target.value);
  // }
  // const handleChangeNumber=(event)=>{
  //   setNumber(event.target.value);
  // }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (props.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase()))
  //   {
  //     alert(`is already in contacts`)
  //     setName('');
  //     setNumber('');
  //   } else {
  //     const user = {
  //       id: nanoid(),
  //       name: name,
  //       number:number
  //     }
  //     props.onSubmit(user)
  //     setName('');
  //     setNumber('');
  //   }
  // }

  return (<form className={css.form__container}
    onSubmit={handleSubmit}
  >
    <label htmlFor="" className={css.label}> Name</label>
    <input className={css.input}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
          //  value={name}
      // onChange={handleChangeName}
    />
     <label htmlFor="" className={css.label}>Number </label>
        <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={number}
      // onChange={handleChangeNumber}
    />
       
          <button type="submit">Add contact</button>
  </form>)
}
