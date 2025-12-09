import { useState, useEffect } from "react"
import RecipeList from "./components/RecipeList"
import RecipeForm from "./components/RecipeForm"
import SearchBar from "./components/SearchBar"

export default function App() {
  // Load from localStorage, or fallback to empty array
  const [recipes, setRecipes] = useState(() => {
    try {
      const stored = localStorage.getItem(`recipes`)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error(`Failed to parse recipes from localStorage:`, error)
      return []
    }
  })
  
  const [search, setSearch] = useState(``)

  // Save recipes to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(`recipes`, JSON.stringify(recipes))
    } catch (error) {
      console.error(`Failed to save recipes to localStorage:`, error)
    }
  }, [recipes])

  // Add new recipe
  const addRecipe = recipe => {
    setRecipes(prev => [...prev, recipe])
  }

  return (
    <div className="app-container">
      <h1>Recipe Collection</h1>

      <div className="controls">
        <SearchBar setSearch={setSearch} />
        <RecipeForm addRecipe={addRecipe} />
      </div>

      <RecipeList recipes={recipes} search={search} />
    </div>
  )
}
