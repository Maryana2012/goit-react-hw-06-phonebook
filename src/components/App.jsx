import React from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from '../components/App.module.css'

export default function PhoneBook() {
  
  return (<>
    <h1 className={css.title}> PhoneBook</h1>
    <Form  /> 
    <div className={css.container}>
    <h2 className={css.subtitle}>Contacts</h2>
    <Filter  />
    <ContactList />  
    </div> 
  </>)
}





