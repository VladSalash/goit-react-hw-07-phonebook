import { useState } from 'react';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useVisibleItem = () => {
  const [isVisible, setVisible] = useState(true);

  const handleVisible = event => {
    if (event.target.tagName === 'BUTTON') {
      setVisible(!isVisible);
    }
    return toast.info(`Contact deleted from your 📱`);
  };

  return [isVisible, handleVisible];
};

export default useVisibleItem;
