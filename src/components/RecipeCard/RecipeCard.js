import React from "react";
import "./RecipeCard.scss";

function RecipeCard({ recipe }) {
  console.log(recipe);

  return (
    <div className="card">
      <div className="card__img">
        <img src={recipe && recipe.image} alt="" />
        <span className="card__img-time">
          {recipe && recipe.readyInMinutes + " " + "min"}
        </span>
      </div>
      <div className="card__cnt">
        <div className="card__cnt-name">
          <h4>{recipe && recipe.title}</h4>
        </div>
        <div className="card__cnt-dishtype">
          <h4>{recipe && recipe.dishTypes}</h4>
        </div>
        <div className="card__cnt-ready">
          <h4></h4>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
