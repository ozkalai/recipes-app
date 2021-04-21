import { useEffect, useState } from "react";
import "./App.scss";
import RecipeCard from "./components/RecipeCard/RecipeCard";

function App() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=90&tags=vegetarian%2Cdessert",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "eac860bc3emshe877650f7862004p1a4e37jsn3b70ec723327",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setRecipe(data.recipes[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="App">
      <RecipeCard recipe={recipe} />
    </div>
  );
}

export default App;
