
import css from './ContactElement.module.css';

const ContactElement = ({ id, name, number, onRemoveContact }) => {

  return (
      
  <li key={id}>
          <p>{name + ':  ' + number}</p>
        {
          <button className={css.buttonDelete}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(id)}
          >
            delete
          </button>
        }
      </li>
  )
};



export default ContactElement;
