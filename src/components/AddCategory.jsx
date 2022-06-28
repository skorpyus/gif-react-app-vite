import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeCategory = ({target}) => {
        setInputValue(event.target.value);
    }

    const onSubmit = ( evento ) => { 
        evento.preventDefault();
        if (inputValue.trim().length > 1 ){
            //Recibimos como prop la funcion onNewCategory 
            onNewCategory( inputValue.trim() );
        }

        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder='buscar gifs'
            value = { inputValue }
            onChange={  onChangeCategory }
            
         />
    </form>
  )
}
