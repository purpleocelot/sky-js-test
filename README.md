Sky Javascript Test

This project uses Jasmine as the testing framework.

npm install to install all packages.
npm run test to run all tests.

Assumptions
Portfolio is an array of string enums representing the channels, e.g. ['SPORTS', 'KIDS', 'MOVIES'].
There is a maximum of 1 reward per portfolio channel packages.
Portfolio channels that don't have a reward are represented by a null rather than 'N/A',
The eligibilityService() is sync, rather than async.
The invalid customer number exception returned by eligibilityService() is called 'INVLAID_ACCOUNT_NUMBER'.
The only other error that eligibilityService() returns is a 'Technical failure exception'.