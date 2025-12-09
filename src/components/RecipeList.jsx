import RecipeCard from "./RecipeCard"

export default function RecipeList({ recipes, search }) {
    const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="recipe-list">
            {/* We loop over the `filtered` array of recipes and render a RecipeCard for each one.
                `map` creates a new array of JSX elements based on the recipe data.
                `key={index}` provides a unique identifier for each element to help React track changes efficiently. */}
            {filtered.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    )
}