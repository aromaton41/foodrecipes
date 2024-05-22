// src/App.js

import React from 'react';
import Card from './Card';

function List({ listRecipes }) {
    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {listRecipes.length > 0 ? listRecipes.map(recipe => (
                    <Card key={recipe.id} recipe={recipe} />
                )) :
                    (
                        <div className="col-span-full min-w-max text-center text-gray-500 text-xl mt-8">
                            No recipes found.
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default List;
