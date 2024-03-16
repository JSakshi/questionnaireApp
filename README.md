# Questionnaire App


This is a REST API Service which provides a list of questions.

- This a typescript application
- I have used yarn to manage node packages
- I have used [koa](https://koajs.com/) as my web framework as it's a small and robust foundation for web applications and APIs
- I've used jest for writing tests 
- I've used mocked repository to mock the data for the appliation


## Getting Started

### Assumptions
 - The service is only concenered with returning one set of questions
 - At this point of time, the service isn't concerned with the answers of the questions
 - The service returns all the questions at once and doesn't paginate

### Prerequisite
 - install docker on system
 - postman for manually testing the API

To run the app locally run the following command:

`./run.sh`

It will build and run the app in a docker container on `http://localhost:5000/`

You should be able to hit endpoints now. I used Postman to test.

The service has two get endpoints:

1. `/healthy` - The endpoint checks if the service is successfully running.

2. `/api/questions` - This endpoint will return a set of questions in the following format:

```json
{

"questionnaireTitle": "Geography Questions",

"questionsText": [

"What is the capital of Cuba?",

"What is the capital of France?",

"What is the capital of Poland?",

"What is the capital of Germany?"

]

}
```

# Testing

To run the unit tests, run the following command:

`yarn test:unit`

To run integeration tests, run the following command:

`yarn test:integeration`

To run all the tests:

`yarn test:all`


### Improvements 
 - The service can be extended to return multiple categories of questionnaires
 - Another endpoint can be added to return the answers to the questionnaire
 - The endpoint can be improved by including pagination and return desired amount of questions
 - Ideally the service will be connected to a database for fetching the questionnaire
 - Configuration files can be introduced to control the behavior of the service. For ex: the `ip` and `port` can be moved to `appSettings.json` file.
 - Api can be secured by OAuth/API key 


