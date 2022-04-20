# The Tech Blog

[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description

The Tech Blog app will allow you to view posts. It will also allow you to add, delete and edit post when you are logged in. You are encouraged to create your credential in order to use all available functionality of the app.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [App Link](#link)
- [Tech/Framework](#tech)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation <a id="installation"></a>

- In order to run this app, please install the following dependencies: <br />

  > > **`$ npm i express, sequelize, mysql2, dotenv, express-handlebars, express-session, bcrypt, connect-session-sequelize`**

- Database and Table creation then add some records. Make sure you are in the root directory of the app:
  > > i.e. /c/Users/Jojo/Full-Stack-Developer/tech-blog/

1. Login to you mysql in the commandline:
   > > **`$ mysql -u root -p`**
2. Run the following to create the Database ecommerce_db:
   > > **`$ source db/schema.sql`**
3. Run the following to create and seeded the tables:
   > > **`$ npm run seed`**

## Usage <a id="usage"></a>

### Run the following in the command line

- **npm start** <br/>
  then open the link in the browser. ie. http://localhost:4001

### Screenshots

- Home Page <br />
  ![Homepage](https://user-images.githubusercontent.com/90885263/150869122-a40cb0f2-ebbe-4965-816c-8269c3445205.jpg)

- Login Page <br />
  ![login-page](https://user-images.githubusercontent.com/90885263/150869215-26559bf9-7f1c-413e-8daa-4eee10bb5bad.jpg)

- Dashboard Page <br />
  ![dashboard](https://user-images.githubusercontent.com/90885263/150869298-40dac5ff-a1fb-4f7f-a8b7-4c03644c5bbe.jpg)

- Post with comment <br />
  ![Post with comment](https://user-images.githubusercontent.com/90885263/150876304-a0f1308b-e02b-4d23-a833-ea82efa3cd1e.jpg)

- Adding comment <br />
  ![post-comment](https://user-images.githubusercontent.com/90885263/150875867-c5544190-a580-49a2-8b27-00e7b6af5f4f.jpg)

- Updating or deleting a post <br />
  ![edit-delete-post](https://user-images.githubusercontent.com/90885263/150876055-9b1a3404-6e97-430f-9213-31a2f136314c.jpg)

## App Link in Heroku<a id="link"></a>

https://tranquil-ridge-17708.herokuapp.com

## Tech/Framework <a id="tech"></a>

- HTML
- CSS
- Fontawesome
- JavaScript
- Express.js
- Sequelize
- MySQL
- Handlebars
- bcrypt
- dotenv
- express-session
- Heroku

## License <a id="license"></a>

This project is licensed under the MIT license

## Contributing <a id="contributing"></a>

Please contribute by fixing an issue.

## Questions <a id="questions"></a>

For questions about this app, please email me at gjojob@yahoo.com.

Thank you for using my app.

You may also reachout to me in my GitHub profile: https://github.com/jojobautistaum
