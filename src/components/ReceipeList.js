import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReceipeList.css";

const ReceipeList = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    setSubmitted(true); // Mark as submitted
    setLoading(true); // Start loading
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setRecipes(data.meals || []); // Default to empty array if no meals found
    setLoading(false); // End loading
  };

  return (
    <div className="recipe-list">
      <h1>Recipe Ideas</h1>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredient (e.g., chicken)"
      />
      <button onClick={searchRecipes}>Search</button>

      {/* Display loading spinner */}
      {loading && <p className="loading">Loading recipes...</p>}

      {/* Display no recipes found message */}
      {!loading && submitted && recipes.length === 0 && (
        <p className="no-recipes">No recipes found. Try another ingredient!</p>
      )}

      {/* Display recipes only if there are results */}
      {recipes.length > 0 && (
        <div className="recipes">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
              <Link to={`/details/${recipe.idMeal}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReceipeList;
