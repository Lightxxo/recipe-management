import './recipe-list-item.css'
import { RecipesContext } from '../../contexts/contexts';
import { useContext, useState } from 'react';
import RecipeListItemEl from '../recipe-list-item-el/recipe-list-item-el';
import RecipeListItemEdit from '../recipe-list-item-edit/recipe-list-item-edit';


export default function RecipeListItem({item, index}){
    const { setRecepies} = useContext(RecipesContext);
    const [titleHasClicked, setTitleHasClicked] = useState(false)
    const [ingredientsHasClicked, setIngredientsHasClicked] = useState(false)
    const [instructionsHasClicked, setInstructionsHasClicked] = useState(false)

    function handleRemove (){
        setRecepies((recipes) => { 
            let retObj =  recipes.filter((el, dex)=>{  return dex !== index })
            return retObj;
        })
    }

    function handleTitleOnClick(){
        setTitleHasClicked(true);
    }

    function handleIngredientOnClick(){
        setIngredientsHasClicked(true);
    }

    function handleInstructionOnClick(){
        setInstructionsHasClicked(true);
    }



    return (
    <div className="list-item">
        <button className='list-remove' onClick={handleRemove}>
            <img src='https://img.icons8.com/?size=100&id=79023&format=png&color=000000'></img>
        </button>
        <div className='list-text'>
            <div id='title' onClick={handleTitleOnClick}>
                {titleHasClicked ? <RecipeListItemEdit index={index} flag={'title'} value={item.title} recipeSetter={setRecepies} hasClickedSetter={setTitleHasClicked}></RecipeListItemEdit>
                : <RecipeListItemEl text={item.title}></RecipeListItemEl>}
            </div>
            <div id = 'ingr' onClick={handleIngredientOnClick}>
                {ingredientsHasClicked ? <RecipeListItemEdit index={index} flag={'ingredient'} value={item.ingredients} recipeSetter={setRecepies} hasClickedSetter={setIngredientsHasClicked}></RecipeListItemEdit>
                : <RecipeListItemEl text={item.ingredients} ></RecipeListItemEl>}
            </div>
            <div id = 'instr' onClick={handleInstructionOnClick} >
                {instructionsHasClicked? <RecipeListItemEdit index={index} flag={'instruction'} value={item.instructions} recipeSetter={setRecepies} hasClickedSetter={setInstructionsHasClicked}></RecipeListItemEdit>
                : <RecipeListItemEl text={item.instructions}></RecipeListItemEl>}
            </div>
        </div>

        

    </div>);
}