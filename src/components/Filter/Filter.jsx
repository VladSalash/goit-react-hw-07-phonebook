import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contactsSlice';

import { Label, Input } from './Filter.style';

const Filter = () => {
  const filterValue = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={onFilter} />
    </Label>
  );
};

export default Filter;
