import './App.css';
import React, { useEffect, useState } from 'react';
import List from './component/List';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.message));
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <List listRecipes={filteredRecipes} />
      <Footer />
    </div>
  );
}

export default App;
