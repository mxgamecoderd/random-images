# created by mxgamecoder

## HOW TO USE MY DOG RANDOM IMAGE API

##### STEP ONE
```
npm install dog-image-api
```
##### STEP TWO

 Import the Package
Use the following code to import the getRandomDogImage function in your project.
Since the package uses CommonJS, you’ll use require:

```
const { getRandomDogImage } = require('dog-image-api');
```


##### STEP THREE
```
const { getRandomDogImage } = require('dog-image-api');

(async () => {
  // Call the function and wait for the response
  await getRandomDogImage();
})();

```

##### STEP FOUR
You can now use the getRandomDogImage function to add random dog images to your applications. For example:

Display the dog image in a frontend project.
Use it in a chatbot to send random dog images.
Create fun widgets or games using the image URL.
Here’s an example of displaying the image in an HTML webpage:

```
const { getRandomDogImage } = require('dog-image-api');
const fs = require('fs');

// Save the random dog image URL to an HTML file
(async () => {
  const dogImageUrl = await getRandomDogImage();

  // Create a simple HTML file with the image
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Random Dog</title>
    </head>
    <body>
      <h1>Here’s a random dog image:</h1>
      <img src="${dogImageUrl}" alt="Random Dog" style="max-width: 100%;">
    </body>
    </html>
  `;

  // Write the HTML content to a file
  fs.writeFileSync('random-dog.html', htmlContent);

  console.log("Open 'random-dog.html' in your browser to view the dog image!");
})();

```



# PLEASE SUPPORT ME BY FORKING MY REPO
