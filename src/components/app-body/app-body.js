import { useEffect, useState } from "react";
import ChefList from "../chef-section/chef-section";
import RecipeSection from "../recipe-section/recipe-section";
import { Recipes } from "./sample-data";
import { ChefsContext, RecipesContext } from "../../contexts/contexts";
import './app-body.css'
import fetchData from "../../services/fetchData";

export default function AppBody(){
    const [recipes, setRecepies] = useState([])
    const [chefs, setChefs] = useState([])

    useEffect(()=>{
        setRecepies(Recipes);

        fetchData().then((res)=>{
            setChefs(res);
        })

    }, [])



    return(
        <div className="app-body">
            <ChefsContext.Provider value={{chefs, setChefs}}>
                <RecipesContext.Provider value={{recipes, setRecepies}}>
                    <RecipeSection></RecipeSection>
                    <ChefList></ChefList>
                </RecipesContext.Provider>
            </ChefsContext.Provider>
            
        </div>
    );
}