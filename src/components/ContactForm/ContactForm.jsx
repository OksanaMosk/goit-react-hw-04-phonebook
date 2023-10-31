

import React from "react";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';
import { useState } from "react";


export default function ContactForm (onSubmit) {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
 
   
    
   const handleSubmit = event => {
        event.preventDefault();
        //  useEffect(() => {
        //     reset({
        //      setName: [''],
        //        setNumber: [''],
        //     })
        //  }, [reset])
       
     
    }

    
    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

    
        switch (name) {
            case 'text': {
                setText(value);
                return;
            }
            case 'number': {
                setNumber(value);
                return;
            }
            default:
                return;
        };
    }
    // const reset = (() => {
    //     setNumber: [''],
    //     setName: [''],
    // });

    const nameInputId = nanoid();
    const numberInputId = nanoid();
    
        return (
            <div className={css.contactForm}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <label htmlFor={nameInputId}>
                        <p className={css.inputName}>Name
                        </p>
                        <input type="text"
                            name="text"
                            id={nameInputId}
                            value={text}
                            onChange={handleInputChange}
                            className={css.formInput}
                            placeholder="Name"
                            autoComplete="on"
                            autoFocus
                            required>
                        </input>
                    </label>
                      <label htmlFor={numberInputId}>
                        <p className={css.inputName}>Number
                        </p>
                        <input type="tel"
                            name="number"
                            id={numberInputId}
                            value={number}
                            onChange={handleInputChange}
                            className={css.formInput} 
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                            placeholder="000-00-00"
                            autoComplete="on"
                            autoFocus
                            required>
                        </input>
                    </label>
                    <button type="submit" className={css.submitButton}>Add contact  
                    </button>
             </form>
            </div>
        )

};



