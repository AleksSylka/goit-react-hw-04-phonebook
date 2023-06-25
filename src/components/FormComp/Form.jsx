import React from "react";
import { nanoid } from 'nanoid';
import css from './form.module.css'
import { useState } from "react";

export const Form = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const {name, value} = event.target
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const formSubmit = (event) => {
    event.preventDefault();
    const nameInputId = nanoid();
    let obj = {name: name, number: number, id: nameInputId}
    props.onSubmit(obj)
    setName('');
    setNumber('');
  }

  return (
        <form onSubmit={formSubmit} className={css['form-contacts']}>
        <label className={css["label-contacts"]}>Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            className={css["input-contacts"]}
            required/>
        </label>
        <label className={css["label-contacts"]}>Number 
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleChange}
              className={css["input-contacts"]}
              required/>
        </label>
        <button type="submit" className={css["btn"]}>Add Contact</button>
      </form>
        )

}