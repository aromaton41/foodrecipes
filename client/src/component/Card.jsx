import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
    return (
        <React.Fragment>
            <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden m-4">
                <img className="w-full h-48 object-cover" src={recipe?.image} alt={recipe?.name} />
                <div className="p-4 h-max">
                    <div className="h-36">
                        <h2 className="text-2xl font-semibold mb-2">{recipe?.name}</h2>
                        <p className="text-gray-600 mb-4">{recipe?.description}</p>
                    </div>

                    <div className="flex items-center">
                        <div className="text-sm text-gray-600">
                            <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-5a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {recipe?.time}
                        </div>
                        <div className="ml-auto text-sm text-gray-600">
                            <FontAwesomeIcon icon={faFaceLaughBeam} className="w-4 h-4 mr-1" />
                            {recipe?.difficulty}
                        </div>
                    </div>
                    <div className="px-6 p-4">
                        {/* <button onClick={Route(`/recipe/${recipe.id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                            View Detail
                        </button> */}
                        <Link to={`/recipe/${recipe.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full w-full">View Details</Link>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Card