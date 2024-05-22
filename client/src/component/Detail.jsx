// src/RecipeDetail.js

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Error from './Error';

const Detail = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/recipes/${id}`)
            .then(response => response.json())
            .then(data => setRecipe(data.message));
    }, [id]);

    if (!recipe) {
        return <Error message={"Recipe not found."} />
    }

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden m-4 p-4">
            <img className="w-full h-64 object-cover mb-4" src={recipe.image} alt={recipe.name} />
            <h2 className="text-3xl font-semibold mb-4">{recipe.name}</h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="flex items-center mb-4">
                <div className="text-sm text-gray-600">
                    <FontAwesomeIcon icon={faClock} className="w-5 h-5 inline-block mr-1" />
                    {recipe.time}
                </div>
                <div className="ml-auto text-sm text-gray-600">
                    <FontAwesomeIcon icon={faFaceLaughBeam} className="w-4 h-4 mr-1" />
                    {recipe.difficulty}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cooking Steps:</h3>
            <ol className="list-decimal pl-6">
                {recipe?.steps?.map((step, index) => (
                    <li key={index} className="text-gray-800 mb-2">{step}</li>
                ))}
            </ol>
            <Link to="/" className="text-blue-500">Back to recipes</Link>
        </div>
    );
};

export default Detail;
