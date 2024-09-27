# What is Testing?

Verify "if something works as intended"

1 Manual Testing
Tedious & cumbersome
Error-prone
Often incomplete (not all scenarios)

2 Automated Testing
Initial effort (write tests), no effort
Predictable & consistent
High / complete code & scenario coverage can be achieved

# What are Unit Tests?

- A building block of your app
- Ideally the smallest possible building block
- eg. a function, a class, a components, ...

- App = combination of all units
- If all units were tested, the overall app should work -> backed up by integration tests
- Changes are always tested against all units to avoid bugs

# How many types of testing?

1 Unit testing | Some Unit will be test
2 Integration Testing | Some Unit combine working
3 End-to-End(E2E) Testing | Unit and combine units all working together

# Test-Driven Development

- 1 Write a falling test first
- 2 Implement the code to make the test succeed
- 3 Refactor
- 1 -> 2 -> 3 -> start from 1 -> 2 ... again
