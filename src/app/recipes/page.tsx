"use client"
import {Recipe} from "@prisma/client"
import {useEffect, useState} from "react"
import {getRecipes} from "@/actions/recipe"
import {RecipeCard} from "@/components/cards/RecipeCard"
import RecipeForm from "@/components/forms/RecipeForm"

const RecipesPage = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])


    useEffect(() => {
        getRecipes().then((data: Recipe[]) => {
            setRecipes(data)
        })
    }, [])


    return (
        <div className="flex flex-col w-full p-6 gap-4">
            <h1 className="text-xl font-bold">Recipes</h1>
            <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Create recipe
                </div>
                <div className="collapse-content">
                    <RecipeForm />
                </div>
            </div>

            <div className={"flex flex-col justify-center items-center gap-2"}>
            {recipes.map((recipe) =>
                <RecipeCard key={recipe.id} recipe={recipe} />
            )}
            </div>
        </div>
    )
}

export default RecipesPage;