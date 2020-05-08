import React from 'react';
import ListItem from "../ListItem/ListItem";
import InputSearch from "../InputForm/InputSearch";
import styles from './list.module.css'

const List = ({contacts, filterList, filter, getFilterValue,deleteItem}) => {
    return (
        <>
            {contacts.length >= 2 ?
                <>
                <h3 className={styles.title}>Contacts</h3>
                <InputSearch
                    filter={filter}
                    getFilterValue={getFilterValue}
                />
                </>
                :<></>}
            <ul>
                {filterList.map(contact => <ListItem key={contact.id}
                                                     deleteItem={deleteItem}
                                                     contact={contact}/>)}
            </ul>
        </>
    );


}
export default List;