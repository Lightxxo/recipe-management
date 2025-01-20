import { useContext , useState } from "react";
import { RecipesContext} from "../../contexts/contexts";
import './recipe-input.css'


export default function RecipeInput(){
    const {setRecepies} = useContext(RecipesContext)
    const [inputs,setInputs]=useState({
        
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputs.title && inputs.ingredients && inputs.instructions) {
            
            
            const newRecipe = {
                
                title: inputs.title,
                ingredients: inputs.ingredients,
                instructions: inputs.instructions,
            };

            setRecepies((recipes)=> [...recipes, newRecipe]);
            setInputs({title:'',
                ingredients: '',
                instructions: '',
            });
        }
    };
    function handleChange(e){
        setInputs((inputs)=>({...inputs,[e.target.name]:e.target.value}))
    }
    console.log(inputs)
    return(
        <div className="recipe-input-container">
            <h1>Enter a new recipe!! 📜🍽️</h1>
            <form className="add-recipe-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipe-name">Task Name</label>
                    <input
                        type="text"
                        id="recipe-name"
                        name="title"
                        placeholder="Enter recipe"
                        value={inputs['title']}
                        onChange={handleChange}
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
                        value={inputs['ingredients']}
                        onChange={handleChange}
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
                        value={inputs['instructions']}
                        onChange={handleChange}
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




    



            