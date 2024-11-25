const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const App = require('./App')  // Assurez-vous que le chemin correspond à votre composant principal

// Rendre l'application React en HTML statique
const html = ReactDOMServer.renderToStaticMarkup(<App />);

// Lire le modèle de fichier index.html
const indexFile = path.resolve('./public/index.html');
fs.readFile(indexFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier HTML :', err);
    return;
  }

  // Remplacer la balise <div id="root"></div> par le contenu généré par React
  const finalHtml = data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  // Sauvegarder le HTML généré dans un fichier
  fs.writeFileSync('./build/index.html', finalHtml);

  console.log('HTML statique généré avec succès !');
});