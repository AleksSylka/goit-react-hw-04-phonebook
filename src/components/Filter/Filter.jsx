import css from './filter.module.css';
import { useState } from "react";

export const Filter = (props) => {

    const [filter, setFilter] = useState('');

    const handleChange = event => {
        setFilter(event.currentTarget.value);
        props.onChange(event.currentTarget.value)
    }

    return (
        <label className={css["label-contacts"]}>Find contacts by name
            <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            className={css["input-contacts"]}
            required/>
        </label>)
}