# E-Commerce-Backend

## Summary
This is a terminal based project that allows users to view a server connected to a database. In other words this is an example back end for an e-commerce site.

## Video Link To View Process

## Screenshot Of Products Route On Insomnia


## Screenshot Of Tags Route On Insomnia


## Screenshot Of Categories Route On Insomnia



## Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [NPM-Library](https://docs.npmjs.com/)
* [Expres.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/master/index.html)

## Installation Steps
1. First open Terminal.
2. Navigate to repo file.
3. enter in Terminal "npm install" in order to install all dependecies (inquirer, express, mysql2, dotenv, sequelize).
4. Start the server connection by writing "npm start" within your Terminal, after getting the prompt "App listening on port 3001!" you may open insomnia, or your browser to test out the routes in order to check on the backend database.

## Code Snippet Of A Get Route For Category
```javascript
 router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  }).then(response => {
    res.json(response)
  })
  .catch(err => {
    res.status(400).json(err)
  }) 
});
```

## Author

* **Mehdi Safari**

- [Link to Portfolio Site](https://mehdisafari77.github.io/Basic-Bio/)
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
