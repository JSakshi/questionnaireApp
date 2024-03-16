# Questionnaire App


This is a REST API Service which provides a list of questions.


## Getting Started

To run the app locally run the following command:

`./run.sh`

It will build and run the app in a docker container on `http://localhost:5000/`

You should be able to hit endpoints now. I used Postman to test.

The service has two get endpoints:

1. `/healthy` - The endpoint checks if the service is successfully running.

2. `/api/questions` - This endpoint will return a set of questions in the following format:

        ```
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

To run the unittests, run the following command:

`yarn test:unit`