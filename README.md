# Sky Javascript Test

This project uses Jasmine as the testing framework.

`npm install` to install all packages.
`npm run test` to run all tests.

## Assumptions
1. Portfolio is an array of string enums representing the channels, e.g. ['SPORTS', 'KIDS', 'MOVIES'].
2. There is a maximum of 1 reward per portfolio channel packages.
3. Portfolio channels that don't have a reward are represented by a null rather than 'N/A',
4. The eligibilityService() is sync, rather than async.
5. The invalid customer number exception returned by eligibilityService() is called 'INVLAID_ACCOUNT_NUMBER'.
6. The only other error that eligibilityService() returns is a 'Technical failure exception'.