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
        "https://i.ibb.co/MMpyjGt/images-2.jpg",
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
    cars: [
        "https://i.imgur.com/cvVlidG.jpeg",
        "https://i.imgur.com/Ch8Dgz6.jpeg",
        "https://i.imgur.com/rtTgJgq.jpeg",
        "https://i.imgur.com/VWiK65R.jpeg",
        "https://i.imgur.com/q43nC4k.jpeg",
        "https://i.imgur.com/OmYtexa.jpeg",
        "https://i.imgur.com/tWm41Of.jpeg",
        "https://i.imgur.com/QP3xKY5.jpeg",
        "https://i.imgur.com/opuM54W.jpeg",
        "https://i.imgur.com/8W8q9hq.jpeg",
        "https://i.imgur.com/Kgp2Rmm.jpeg",
        "https://i.imgur.com/Hdt5wFw.jpeg",
    ],
    random: [
        "https://i.imgur.com/blTiqKZ.jpeg",
        "https://i.imgur.com/DgRSydW.jpeg",       
        "https://i.imgur.com/hM2pBWN.jpeg",
        "https://i.imgur.com/OxqN9si.jpeg",
        "https://i.imgur.com/iq053CN.jpeg",
        "https://i.imgur.com/D2gcuOd.jpeg",
        "https://i.imgur.com/fjj3u2P.jpeg",
        "https://i.imgur.com/zCgUfHZ.jpeg",
        "https://i.imgur.com/2n3eYGp.jpeg",
        "https://i.imgur.com/nOETzSR.jpeg",
        "https://i.imgur.com/8ZV2ezQ.jpeg",
        "https://i.imgur.com/ttrUlAq.jpeg",
    ],
    animepic: [
        "https://i.imgur.com/TRDfXf5.jpeg",
        "https://i.imgur.com/80zJonc.jpeg",       
        "https://i.imgur.com/0CloZol.jpeg",
        "https://i.imgur.com/OL3Co3w.jpeg",
        "https://i.imgur.com/sVyw4lY.jpeg",
        "https://i.imgur.com/Fz9pSgk.jpeg",
        "https://i.imgur.com/kiaOkaD.jpeg",
        "https://i.imgur.com/92mE6bj.jpeg",
        "https://i.imgur.com/Y2IcseR.jpeg",
        "https://i.imgur.com/9lZM7mm.jpeg",
        "https://i.imgur.com/UdLpkyd.jpeg",
        "https://i.imgur.com/otd2fmd.jpeg",
    ],
    animal: [
        "https://i.imgur.com/S894xWH.jpeg",
        "https://i.imgur.com/isQZSmH.jpeg",
        "https://i.imgur.com/7N1H14N.jpeg",
        "https://i.imgur.com/bpSn2zQ.jpeg",
        "https://i.imgur.com/mDLiud4.jpeg",
        "https://i.imgur.com/7hjzed7.jpeg",
        "https://i.imgur.com/x1MwjB6.jpeg",
        "https://i.imgur.com/nmj7oEk.jpeg",
        "https://i.imgur.com/F3Ci8hp.jpeg",
        "https://i.imgur.com/50T5P20.jpeg",
        "https://i.imgur.com/uXISCrL.jpeg",
        "https://i.imgur.com/9MKyAZh.jpeg",
    ],
    naruto: [
        "https://i.imgur.com/p3Qua8A.jpeg",
        "https://i.imgur.com/aHddYcj.jpeg",        
        "https://i.imgur.com/zojfXYN.jpeg",
        "https://i.imgur.com/RLziTJo.jpeg",
        "https://i.imgur.com/Ocqq7le.jpeg",
        "https://i.imgur.com/D8joCWg.jpeg",
        "https://i.imgur.com/JhMjR1W.jpeg",
        "https://i.imgur.com/jOvDv8r.jpeg",
        "https://i.imgur.com/bi41mxU.jpeg",
        "https://i.imgur.com/1KUIX0e.jpeg",
        "https://i.imgur.com/XHqP2oV.jpeg",
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
