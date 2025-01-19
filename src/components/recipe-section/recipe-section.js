import RecipeInput from "../recipe-input/recipe-input";
import RecipeList from "../recipe-list/recipe-list";

export default function RecipeSection(){

    return(
        <div className="recipe-section">
            <RecipeInput></RecipeInput>
            <RecipeList></RecipeList>
        </div>
    );
}