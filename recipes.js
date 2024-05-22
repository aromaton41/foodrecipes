const recipes = [
    {
        id: 1,
        name: "Classic Spaghetti Bolognese",
        image: "https://picsum.photos/300",
        description: "A classic Italian pasta dish with rich meat sauce.",
        time: "45 mins",
        difficulty: "Intermediate",
        steps: [
            "Heat olive oil in a large skillet over medium heat.",
            "Add onions, carrots, and celery. Cook until softened.",
            "Add ground beef and cook until browned.",
            "Stir in tomato paste, crushed tomatoes, and seasonings.",
            "Simmer for 30 minutes, stirring occasionally.",
            "Cook spaghetti according to package instructions.",
            "Serve sauce over cooked spaghetti and garnish with grated Parmesan cheese."
        ]
    },
    {
        id: 2,
        name: "Chicken Alfredo",
        image: "https://picsum.photos/300",
        description: "Creamy pasta dish made with tender chicken, rich Alfredo sauce, and Parmesan cheese.",
        time: "30 mins",
        difficulty: "Intermediate",
        steps: [
            "Cook fettuccine pasta according to package instructions.",
            "Season chicken breasts with salt, pepper, and Italian seasoning, then grill until cooked through.",
            "In a saucepan, heat Alfredo sauce until warm.",
            "Slice grilled chicken and toss with cooked pasta and warmed Alfredo sauce.",
            "Serve hot with grated Parmesan cheese and fresh parsley."
        ]
    },
    {
        id: 3,
        name: "Vegetable Stir-Fry",
        image: "https://picsum.photos/300",
        description: "A quick and healthy stir-fry with colorful vegetables and tofu.",
        time: "20 mins",
        difficulty: "Easy",
        steps: [
            "Heat oil in a large skillet or wok over high heat.",
            "Add tofu cubes and cook until golden brown.",
            "Remove tofu from skillet and set aside.",
            "Add sliced bell peppers, broccoli florets, and sliced carrots to the skillet.",
            "Stir-fry until vegetables are tender-crisp.",
            "Return tofu to the skillet and toss to combine.",
            "Season with soy sauce and sesame oil.",
            "Serve hot over steamed rice."
        ]
    },
    {
        id: 4,
        name: "Grilled Salmon with Asparagus",
        image: "https://picsum.photos/300",
        description: "Healthy and flavorful grilled salmon served with roasted asparagus.",
        time: "25 mins",
        difficulty: "Easy",
        steps: [
            "Preheat grill to medium-high heat.",
            "Season salmon fillets with salt, pepper, and lemon juice.",
            "Grill salmon for 4-5 minutes per side, or until cooked through.",
            "Toss asparagus spears with olive oil, salt, and pepper.",
            "Roast asparagus in the oven at 400°F for 10-12 minutes.",
            "Serve grilled salmon with roasted asparagus and lemon wedges."
        ]
    },
    {
        id: 5,
        name: "Margherita Pizza",
        image: "https://picsum.photos/300",
        description: "Classic pizza topped with fresh mozzarella, tomatoes, basil, and olive oil.",
        time: "25 mins",
        difficulty: "Easy",
        steps: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough on a floured surface to desired thickness.",
            "Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
            "Arrange sliced mozzarella and tomato slices on top of the sauce.",
            "Bake in preheated oven for 12-15 minutes or until crust is golden and cheese is bubbly.",
            "Remove from oven and sprinkle with fresh basil leaves and drizzle with olive oil.",
            "Slice and serve hot."
        ]
    },
    {
        id: 6,
        name: "Chicken Caesar Salad",
        image: "https://picsum.photos/300",
        description: "Refreshing salad with grilled chicken, crisp romaine lettuce, Parmesan cheese, and Caesar dressing.",
        time: "20 mins",
        difficulty: "Easy",
        steps: [
            "Grill chicken breasts until cooked through, then slice.",
            "Tear romaine lettuce leaves into bite-sized pieces.",
            "In a large bowl, toss together romaine lettuce, sliced chicken, croutons, and grated Parmesan cheese.",
            "Drizzle with Caesar dressing and toss to coat.",
            "Serve immediately."
        ]
    },
    {
        id: 7,
        name: "Beef Tacos",
        image: "https://picsum.photos/300",
        description: "Tasty tacos filled with seasoned ground beef, shredded lettuce, diced tomatoes, and cheese.",
        time: "30 mins",
        difficulty: "Easy",
        steps: [
            "Heat oil in a skillet over medium heat.",
            "Add ground beef and cook until browned.",
            "Stir in taco seasoning and water, then simmer until thickened.",
            "Warm taco shells in the oven or microwave.",
            "Assemble tacos with beef, lettuce, tomatoes, cheese, and any desired toppings.",
            "Serve hot with salsa and sour cream."
        ]
    },
    {
        id: 8,
        name: "Vegetable Curry",
        image: "https://picsum.photos/300",
        description: "Flavorful curry made with assorted vegetables and aromatic spices.",
        time: "40 mins",
        difficulty: "Intermediate",
        steps: [
            "Heat oil in a large pot over medium heat.",
            "Add chopped onions, garlic, and ginger. Cook until softened.",
            "Stir in curry paste and cook for 1-2 minutes.",
            "Add diced potatoes, carrots, bell peppers, and cauliflower.",
            "Pour in coconut milk and vegetable broth.",
            "Simmer until vegetables are tender.",
            "Serve hot over steamed rice."
        ]
    },
    {
        id: 9,
        name: "Pasta Primavera",
        image: "https://picsum.photos/300",
        description: "Light and colorful pasta dish with seasonal vegetables and Parmesan cheese.",
        time: "25 mins",
        difficulty: "Easy",
        steps: [
            "Cook pasta according to package instructions.",
            "In a large skillet, heat olive oil over medium heat.",
            "Add sliced bell peppers, cherry tomatoes, and broccoli florets.",
            "Cook until vegetables are tender.",
            "Toss cooked pasta with vegetables, grated Parmesan cheese, and fresh basil leaves.",
            "Season with salt and pepper to taste.",
            "Serve hot with additional Parmesan cheese."
        ]
    }
]

module.exports = recipes