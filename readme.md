#Readme with aditional descriptions

##Tecnology

### Javascript

The application was build with javascript using the most recents updates of the language following the documentation
of ecmascript 2018, using of nodejs / express to construct middleware and routes of the application

### Nunjucks

I use nunjucks as the view engine of this application

## Enviromnent

I used the concept of enviromnent variables to set diferents enviromnents to run this project, they can be found inside
config/env/, as a security measure I configure the git to ignore the .env files, so to active the enviromnent first
copy and paste .env.example and rename it to .env

## Objective

This application was build as a experiment / training

## What it does?

The application expects an age input and verify if the data given is less or greater then 18 and deal with the result
using middlewares and routes to render the feedback on a template nunjucks
