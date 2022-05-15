import React from "react";

export default function IngredientsList({list}) {
    return (
        <div>
            <h3>Ingredients</h3>
            <div className="ingredientsContainer">
                {list.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                ))}
            </div>
        </div>
    );
}
