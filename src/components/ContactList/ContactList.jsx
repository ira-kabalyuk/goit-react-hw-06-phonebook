import { useSelector } from 'react-redux';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
 // const name = useSelector((store) => store.sssName);

  return (
    <div>
      {contacts.length > 0 ? (
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
              <span>{name}</span>
              <span>{number}</span>
              <button className={styles.button} onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>contact not found &#129335;</p>
      )}
    </div>
  );
};

export { ContactList };
