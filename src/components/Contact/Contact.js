import PropTypes from 'prop-types';
import { deleteContact } from '../../services/api';
import { useDispatch } from 'react-redux';

import { ContactItem, DeleteContact } from './Contact.styled';

export function Contact({ contact }) {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  return (
    <ContactItem key={id}>
      {name}
      {': '}
      {phone}
      <DeleteContact type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </DeleteContact>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
