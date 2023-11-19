import { FilterInputStyle, FilterStyle, TextToDo } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { onChangeFilter } from 'redux/filterSlice';

export const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = (evt) => {
        const normalizeValue = evt.target.value.toLowerCase();
        dispatch(onChangeFilter(normalizeValue));
    }
    return (
        <FilterStyle>
          <TextToDo>Find contacts by name</TextToDo>
            <FilterInputStyle
            type="text"
            value={value}
            placeholder="Please, enter a name"
            onChange={onChange}
            />
        </FilterStyle>
    )
}


