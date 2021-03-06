const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 4001;
const HOST = process.env.HOST;

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Session management
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars Template
app.set('views', path.join(__dirname, 'views'));
// Middleware take all contents of a folder and serve them as static assets.
// Useful for front-end file like images, stylesheets, JS files
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Turn on routes
// Must be after other app.use app.set and app.engine
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to http://${HOST}:${PORT}`));
});
