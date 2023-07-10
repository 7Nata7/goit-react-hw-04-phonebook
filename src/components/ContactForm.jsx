import css from './ContactForm.module.css'
import React, { useState } from 'react';
import PropTypes from "prop-types";

export const ContactForm = ({ title, onAddContact}) => {
const [name, setName] = useState("");
const [number, setNumber] = useState("");


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if (name === "name") {
      setName(value); 
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

    return (
      <div>
        <h1 className={css.title_main}>{title}</h1>
        <form className={css.section} onSubmit={handleSubmit}>
          <label>
            <p className={css.label}>Name</p>
            <input
              className={css.input}
              onChange={handleInputChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <p className={css.label}>Number</p>
            <input
              className={css.input}
              onChange={handleInputChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.add_btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
