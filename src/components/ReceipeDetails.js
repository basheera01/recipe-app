import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ReceipeDetails.css';

const ReceipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setRecipe(data.meals[0]);
    };
    fetchDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <Link to="/recipes"> ⬅️ Back to Search</Link>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
      <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
      ▶️ Watch Video
      </a>
    </div>
  );
};
export default ReceipeDetails;