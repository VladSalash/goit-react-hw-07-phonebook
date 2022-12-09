import { useDeleteContactMutation } from 'redux/contactsAPI';
import PropTypes from 'prop-types';

import useVisibleItem from 'Hooks/useVisibleItem';

import { motion, AnimatePresence } from 'framer-motion';
import settingsAnimation from './settingsAnimation';

import Loader from '../Loader/Loader';
import { Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [isVisible, handleVisible] = useVisibleItem();

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.li
            variants={settingsAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleVisible}
            key={id}
          >
            <b>{name}</b>: {number}
            <Button
              type="button"
              onClick={() => deleteContact(id)}
              // disabled={isDeleting}
            >
              {/* {isDeleting && <Loader size={12} />} */}
            </Button>
          </motion.li>
        )}
      </AnimatePresence>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
