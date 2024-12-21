const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Array of image URLs
const imageURLs = [
    "https://i.imgur.com/k36urRk.jpeg",
    "https://i.imgur.com/5qf7U0N.jpeg",
    "https://i.imgur.com/xYlOZ3H.jpeg"
];

// API endpoint to fetch all image URLs
app.get('/api/images', (req, res) => {
    res.json({ success: true, images: imageURLs });
});

// API endpoint to fetch images by categories
const categories = {
    nature: ["https://i.imgur.com/k36urRk.jpeg"],
    animals: ["https://i.imgur.com/5qf7U0N.jpeg"],
    tech: ["https://i.imgur.com/xYlOZ3H.jpeg"]
};

app.get('/api/images/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    if (categories[category]) {
        res.json({ success: true, images: categories[category] });
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
            <li><a href="/api/images">/api/images</a> - Get all images</li>
            <li><a href="/api/images/nature">/api/images/:category</a> - Get images by category</li>
        </ul>
    `);
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
