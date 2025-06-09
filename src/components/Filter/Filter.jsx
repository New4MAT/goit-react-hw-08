import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        Find contacts by name or number
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={css.filterInput}
          placeholder="Enter name or number"
        />
      </label>
    </div>
  );
};

export default Filter;
