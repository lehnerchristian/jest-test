# Problem description

This repo is used as a show case of a potential Jest bug. When setting up a `mockResolvedValue`, a `mockImplementation`, etc. for an async function (such as data fetching) inside `beforeEach` the mock works as expected.
However when the mock is set up in `beforeAll` the defined return value of the mock is not returned and an error is thrown. The same error is thrown when setting up the mock at the top of the module.

Since we're setting up only one test the semantics of `beforeEach` and `beforeAll` should be the same.

Error message:

> Error: Uncaught [TypeError: Cannot read property 'then' of undefined]
