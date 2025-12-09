import { useState } from "react"

export default function RecipeForm({ addRecipe }) {
    const [title, setTitle] = useState(``)
    const [ingredients, setIngredients] = useState(``)

    // `handleSubmit` handles the form submission for adding a new recipe.
    // e.preventDefault() stops the page from reloading on form submit.
    // It calls `addRecipe` with the current `title` and `ingredients` values to update the recipes state.
    // After adding, it clears the input fields by resetting `title` and `ingredients` to empty strings.
    const handleSubmit = event => {
        event.preventDefault()
        addRecipe({ title, ingredients })
        setTitle(``)
        setIngredients(``)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Recipe title"
                value={title}
                onChange ={event => setTitle(event.target.value)}
            />
            <textarea
                placheolder="Ingredients"
                value={ingredients}
                onChange={event => setIngredients(event.target.value)}
            />
            <button>Add Recipe</button>
        </form>
    )
}