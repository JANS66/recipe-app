export default function RecipeCard({ recipe }) {
    return (
        <div className="card">
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
        </div>
    )
}