import { useDispatch } from 'react-redux';
import { setValueFilter } from '../../redux/filtersSlice';
import { Container, FilterInput } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(setValueFilter(event.target.value));
  };

  return (
    <Container>
      <label>
        Find contacts by name
        <br />
        <FilterInput
          type="text"
          name="filter"
          autoComplete="off"
          required
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
