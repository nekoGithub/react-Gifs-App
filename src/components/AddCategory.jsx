import { useState } from "react"


export const AddCategory = ( {onNewCategory, categories} ) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {        
        setInputValue(event.target.value)    
            
    }
    const onSubmit = ( event ) => {
        event.preventDefault()
        // para validar si valor es = hola HOLA no debe pasar aunque mandes mayuscula o minusculas                       
        let bool = true

        categories.forEach(category => {
          if(category.toLowerCase() === inputValue.toLowerCase()){
            bool = false            
            return
          }          
        })
        
        if(!bool) return
        if(inputValue.trim().length <= 1 ) return
        
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }
  return (
    <form onSubmit={ onSubmit }>
        <input type="text" name="" id="" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange }/>
    </form>
  )
}
