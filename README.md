BRSK

Travel | Explore | Commute 
Faster✓ Easier✓ Simpler✓
Why does it take so long to figure the weather and stuff! And by stuff we mean: what to wear, when to leave, and what to expect.
Brsk is designed to do just that. Make travel a breeze.

Getting Started.

1) run yarn install within the server folder.
2) cd into the client folder, run yarn install.
3) create a dev.js file within config. This is where the API key's will be stored.
4) API key structure: PASTE BELOW CONTENTS INTO dev.js file.

module.exports = {
	googleClientID:
    googleClientSecret:
    mongoURI:
    cookieKey:
};

5) Add your keys and run 'yarn dev' within the server folder.
- This command will run the server and launch the development enviornment in your browser.