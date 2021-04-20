# Backend MailGun with Firebase Serverless Function

## Introduction

> A backup service for email support using NodeJS, FirebaseFunction and MailGun npm. Using emailJS as primary email service. Seems emailJS is attached on frontend React, this serverless function can be effortless development with no instance,  PuTTy and PM2. Seems this project is under my credentials, reviewer can only view this project as it is created under my firebase project.  On frontend side the url `https://us-central1-plankawen-19918.cloudfunctions.net/sendEmailTLO?recipientEmail=aaaa&genCode=123123` will trigger if the EmailJS return error.

## Code Samples

> You've gotten their attention in the introduction, now show a few code examples. So they get a visualization and as a bonus, make them copy/paste friendly.

## Installation

To understand this architecture, every firebase micro service is run inside functions folder. We can crud function, but for this purpose, I only create single function with this domain` https://us-central1-plankawen-19918.cloudfunctions.net/sendEmailTLO?recipientEmail=aaaa&genCode=123123 `you can test on postman . From the URL given, I create a get method with the function name of `sendEmailTLO` and accept query param of recipeintEmail and genCode. `# tlo-server-email
# tlo-server-email
