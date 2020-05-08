import React from "react";
import styles from './inputForm.module.css'


export function InputForm({handleChange, contact, number}) {
    return (
        <div>
            <h2 className={styles.title} >Name</h2>
            <input
                name='contact'
                placeholder="Please put the name"
                onChange={handleChange}
                value={contact}
                type="text"
            />
            <h2 className={styles.subtitle}>Number</h2>
            <input
                name='number'
                placeholder="Please put the number"
                onChange={handleChange}
                value={number}
                type="number"
            />
        </div>
    )
}



