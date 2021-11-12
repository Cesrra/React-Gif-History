import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleAdd = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 3){
            setCategories(oldCategories => [inputValue, ...oldCategories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Put the next Category" 
            />
        </form>
    );
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default CategoryAdd;

