import { useState, useEffect } from "react"
import RecipeList from "./components/RecipeList"
import RecipeForm from "./components/RecipeForm"
import SearchBar from "./components/SearchBar"

export default function App() {
  // We use useState to create a state variable `recipes` that will hold the list of recipe data.
  // `setRecipes` is the function we use to update this state whenever new recipes are fetched or modified.
  // Initializing it with an empty array ensures we have a consistent data structure to work with in the UI.
  const [recipes, setRecipes] = useState([])
  // We use useState to create a state variable `search` to store the user's current search input.
  // `setSearch` is the function to update this value as the user types.
  // Initializing it with an empty string ensures the input starts blank and avoids errors when rendering.
  const [search, setSearch] = useState(``)

  // useEffect runs once when the component mounts (empty dependency array []).
  // It retrieves any previously saved recipes from localStorage, parses them, and updates the `recipes` state.
  // Using `|| []` ensures that if nothing is stored yet, `recipes` starts as an empty array.
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(`recipes`)) || []
    setRecipes(stored)
  }, [])

  // useEffect runs whenever the `recipes` state changes (dependency: [recipes]).
  // It saves the current recipes to localStorage so that the data persists across page reloads.
  // JSON.stringify is used to convert the array into a string format suitable for storage.
  useEffect(() => {
    localStorage.setItem(`recipes`, JSON.stringify(recipes))
  }, [recipes])

  // `addRecipe` is a function to add a new recipe to the existing list of recipes.
  // It uses the spread operator [...] to copy the current recipes and append the new one.
  // Calling setRecipes updates the state, which triggers a re-render and also saves it to localStorage (via useEffect).
  const addRecipe = recipe => setRecipes([...recipes, recipe])

  return (
    <div>
      <h1>Recipe Collection</h1>
      <SearchBar setSearch={setSearch} />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} search={search} />
    </div>
  )
}
