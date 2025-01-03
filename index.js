const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Images categorized by type
const images = {
    cat: [
        "https://i.imgur.com/WaT31HW.jpeg",
        "https://i.imgur.com/LAr7tws.jpeg",
        "https://i.imgur.com/Z2DHuMf.jpeg",
        "https://i.imgur.com/n1y1xAk.jpeg",
        "https://i.imgur.com/LjsZMpe.jpeg",
        "https://i.imgur.com/XQ2S0g3.jpeg",
        "https://i.imgur.com/tKYYGlR.jpeg",
        "https://i.imgur.com/Jcfsl4f.jpeg",
        "https://i.imgur.com/n5qRW5C.jpeg",
        "https://i.imgur.com/Uq1rND1.jpeg",
        "https://i.imgur.com/l9yYIs2.jpeg",
    ],
    dog: [
        "https://i.imgur.com/KqcsC0t.jpeg",
        "https://i.imgur.com/7puTZZK.jpeg",
        "https://i.imgur.com/cezeGY3.jpeg",
        "https://i.imgur.com/GtHeRfB.jpeg",
        "https://i.imgur.com/Buf0Ixd.jpeg",
        "https://i.imgur.com/MgrEYfO.jpeg",
        "https://i.imgur.com/Bhn5rjA.jpeg",
        "https://i.imgur.com/4NNAoNM.jpeg",
        "https://i.imgur.com/5xops8W.jpeg",
        "https://i.imgur.com/otEfbjY.jpeg",
        "https://i.imgur.com/6i2ja4a.jpeg",
        "https://i.imgur.com/AZLul67.jpeg",
        "https://i.imgur.com/RFP4b5J.jpeg",
    ],
    // Other categories follow the same structure
};

// Endpoint to fetch all categories
app.get('/api/images', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); // For CORS
    res.json({ success: true, categories: Object.keys(images) });
});

// Endpoint to fetch images by category
app.get('/api/images/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    if (images[category]) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*'); // For CORS
        res.json({
            success: true,
            images: images[category].map(url => ({
                url,
                optimizedUrl: `${url}?q=100`, // Example for adding quality parameters
            })),
        });
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
