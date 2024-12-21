const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Images categorized by type
const images = {
    cat: [
        "https://i.imgur.com/plTJ4dW.jpeg",
        "https://i.imgur.com/cat2.jpeg",
        // Add 50 cat images
    ],
    dog: [
        "https://i.imgur.com/k36urRk.jpeg",
        "https://i.imgur.com/dog2.jpeg",
        // Add 50 dog images
    ],
    tech: [
        "https://i.imgur.com/tech1.jpeg",
        "https://i.imgur.com/tech2.jpeg",
        // Add 50 tech images
    ],
    teacher: [
        "https://i.imgur.com/teacher1.jpeg",
        "https://i.imgur.com/teacher2.jpeg",
        // Add 50 teacher images
    ],
    house: [
        "https://i.imgur.com/house1.jpeg",
        "https://i.imgur.com/house2.jpeg",
        // Add 50 house images
    ],
    lion: [
        "https://i.imgur.com/lion1.jpeg",
        "https://i.imgur.com/lion2.jpeg",
        // Add 50 lion images
    ],
    naruto: [
        "https://i.imgur.com/k36urRk.jpeg",
        "https://i.imgur.com/plTJ4dW.jpeg",
        // Add 50 Naruto images
    ],
};

// Endpoint to fetch all categories
app.get('/api/images', (req, res) => {
    res.json({ success: true, categories: Object.keys(images) });
});

// Endpoint to fetch images by category
app.get('/api/images/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    if (images[category]) {
        res.json({ success: true, images: images[category] });
    } else {
        res.status(404).json({ success: false, message: 'Category not found' });
    }
});

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Image API</h1>
        <p>Use the following endpoints:</p>
        <ul>
            <li><a href="/api/images">/api/images</a> - Get all categories</li>
            <li><a href="/api/images/cat">/api/images/:category</a> - Get images by category</li>
        </ul>
    `);
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
