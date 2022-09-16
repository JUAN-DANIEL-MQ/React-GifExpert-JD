import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
   
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        // console.log(...categories);
        // console.log(setCategories);
        
        if(inputValue.trim().length < 1) return;
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

         

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Nueva Insercion"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>

  )
}
