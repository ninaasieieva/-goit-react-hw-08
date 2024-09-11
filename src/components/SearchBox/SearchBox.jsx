import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.search}
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
