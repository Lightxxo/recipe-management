import { useContext , useState } from "react";
import { RecipesContext} from "../../contexts/contexts";
import './recipe-input.css'


export default function RecipeInput(){
    const {setRecepies} = useContext(RecipesContext)
    const [recipieTitle, setRecipieTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (recipieTitle && ingredients && instructions) {
            
            
            const newRecipe = {
                
                title: recipieTitle,
                ingredients: ingredients,
                instructions: instructions,
            };

            

            setRecepies((recipes)=> [...recipes, newRecipe]);
            setRecipieTitle('');
            setIngredients('');
            setInstructions('');
        }
    };
    return(
        <div className="recipe-input-container">
            <h1>Enter a new recipe!! 📜🍽️</h1>
            <form className="add-recipe-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipe-name">Task Name</label>
                    <input
                        type="text"
                        id="recipe-name"
                        name="recipe-name"
                        placeholder="Enter recipe"
                        value={recipieTitle}
                        onChange={(e) => setRecipieTitle(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        placeholder="What are the ingredients?"
                        rows="2"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    ></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        placeholder="How do we make it?"
                        rows="2"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-btn">Add Recipe</button>
                </div>
            </form>
        
        </div>
    );
}




    



            