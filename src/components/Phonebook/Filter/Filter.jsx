import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'Redux/selectors';
import { setFilterValue } from 'Redux/phonebookSlice';
import { FilterInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FilterInput
      value={filter}
      onChange={onFilterChange}
      type="text"
      placeholder="Search..."
    />
  );
}

export default Filter;
