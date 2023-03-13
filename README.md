# Projet 13 de la formation Développeur Front-End OpenClassrooms - ArgentBank

Ici il s'agit de l'application en ligne d'une banque qui permet à l'utilisateur de se connecter à son compte et d'y visualiser ses revenus. 

Vous pouvez avoir un aperçu du front-end du site via [ce lien](https://df-13-argentbank.netlify.app/).

Pour faire fonctionner ce projet il faut dans un premier temps télécharger le contenu de ce répertoire mais également celui de [l'API qui sert de backend](https://github.com/Dylan-Fruit/Project-10-Bank-API). 

Une fois les deux répertoires téléchargés, il vous faudra certains pré-requis, comme : 

- [Node.Js v12](Node.js v12)
- [React Js](https://fr.reactjs.org)
- [MongoDB Community Server](MongoDB Community Server)

Si ces éléments sont déjà présents, pour vérifier leurs versions vous pouvez faire ça: 


```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

Une fois que tout est prêt il suffit de suivre ces instructions : 

- Forker les répertoires
- Cloner les répertoires 
- Ouvrir le répertoire ici présent dans votre éditeur de code 
- Ouvrir le répertoire de l'api dans votre éditeur de code et ouvrir un terminal dans celui-ci 

dans le terminal il faut écrire ces commandes : 

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Le serveur devrait normalement fonctionner à l'adresse http://localhost:3001 et vous avez maintenant deux utilisateurs dans la base de donnée MongoDB.

### Données de la base de donnée

Une fois que le script `populate-db` est lancé, vous devez avoir deux utilisateurs dans la base de donnée: 

### Tony Stark

- Prénom: `Tony`
- Nom: `Stark`
- Email: `tony@stark.com`
- Mot de passe: `password123`

### Steve Rogers

- Prénom: `Steve`
- Nom: `Rogers`
- Email: `steve@rogers.com`
- Mot de passe: `password456`


### Documentation de l'API 

Vous pouvez accéder à la documentation de l'API en visitant l'url suivante: http://localhost/3001/api-docs.
