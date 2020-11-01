# The following task are completed in this project.



* Setup the Node.js environment.
* Apply custom SCSS styles.
* Setup webpack.
* Implement Aylien API.
* Display API results in the browser.
* Implement service workers.
* Test JS code with Jest.

## Purpose of the Project

The purpose of this project is building a web tool allowing users to run Natural Language Processing (NLP) on articles or blogs, etc. found on any given website. Utilizing the Aylien API to build a simple web interface which interacts with their NLP system, this tool returns relevant information about the article, e.g., whether the content is subjective (opinion) and/or objective (fact-based) and whether it is positive, neutral, or negative in the overall tone. This sort of data analysis is useful regarding filtering out 'fake' news (which, unfortunately, all too often proliferates on Social Media) because it is either actual news which has been distorted and/or distorted 'news' which is spun as being false/untrue. Either way, when employed properly, this sort of technology is very useful.
 
## How to run

To run this app, the server must be actioned through, 'npm run start', not through the index.js server directory as this will omit the api key. Then an instance of webpack must be run in the terminal, upon doing so the application should open within a browser window. Use, 'Webpack build-dev' to access the development build or, 'Webpack build-prod' to access the finished production application.

npm run start (to instance the server)

npm run build-dev (to run the development mode of the app)

npm run build-prod (to run the production mode of the app)

Upon downloading the app file you will also need to cd into the folder and:

npm install
npm start to start the app

