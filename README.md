# oauth.basicloadtest

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a9d34a930e0c4504a0ad0e99d1b2613b)](https://www.codacy.com/gh/gary-archer/oauth.basicloadtest/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gary-archer/oauth.basicloadtest&amp;utm_campaign=Badge_Grade)

[![Known Vulnerabilities](https://snyk.io/test/github/gary-archer/oauth.basicloadtest/badge.svg?targetFile=package.json)](https://snyk.io/test/github/gary-archer/oauth.basicloadtest?targetFile=package.json)
 
### Overview

* A simple Node JS console app to get access tokens and call our APIs concurrently
* See the [Blog Post](https://authguidance.com/2019/08/02/api-load-test/) for an overview of behaviour and how to run the load test

### Prerequisites

* Configure the API to point to your Authorization Server 
* Configure an OAuth Client for the console app, using the Resource Owner Password Grant flow
* Run the console app to load test the API

### Running the load test

* npm install
* npm start
