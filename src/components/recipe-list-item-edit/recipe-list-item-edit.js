import { useState, useEffect } from "react";
import './recipe-list-item-edit.css';
import React from "react";

export default function RecipeListItemEdit({ index, flag, value, hasClickedSetter, recipeSetter }) {
    const [inputValue, setInputValue] = useState(value);
    const textAreaRef = React.useRef(null); 

    
    const handleInput = (event) => {
        const textarea = textAreaRef.current;
        
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    function handleBlur() {
        recipeSetter((recipe) => {
            let retObj = recipe.slice();
            if (flag === 'title') {
                retObj[index].title = inputValue;
            } else if (flag === 'instruction') {
                retObj[index].instructions = inputValue;
            } else if (flag === 'ingredient') {
                retObj[index].ingredients = inputValue;
            }

            return retObj;
        });

        hasClickedSetter(false);
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        
        const textarea = textAreaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; 
            textarea.style.height = `${textarea.scrollHeight}px`; 
        }
    }, [inputValue]); 

    return (
        <textarea
            id="edit-input"
            ref={textAreaRef}
            value={inputValue}
            onBlur={handleBlur}
            onChange={handleChange}
            onInput={handleInput} 
            placeholder="Don't leave me empty :("
            autoFocus
        />
    );
}
