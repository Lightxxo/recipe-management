import { useContext } from "react";
import { RecipesContext} from "../../contexts/contexts";
import RecipeListItem from "../recipe-list-item/recipe-list-item";
import './recipe-list.css';

export default function RecipeList(){
    const {recipes} = useContext(RecipesContext)
    return(
        <div className="recipe-list">
            <p id="recipe-section-title">Recipes ({recipes.length}):</p>
            <ul className="ul">
                {
                    recipes.map((el, index) => <li>{<RecipeListItem item={el} index = {index}></RecipeListItem>}</li>)
                }
            </ul>
        </div>
    );
}