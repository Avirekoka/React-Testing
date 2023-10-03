import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

//The beforeAll hook is executed once before all the tests in the test suite. In this case, it's starting the mock server by calling server.listen(). This ensures that the mock server is running and ready to intercept requests before any tests are executed.
beforeAll(() => {
  server.listen();
});

//The afterEach hook is executed after each test case in the test suite. Here, it's resetting the handlers of the mock server using server.resetHandlers(). This ensures that the handlers (defined routes and responses) are reset to their original state, preventing any test from affecting the behavior of subsequent tests.
afterEach(() => {
  server.resetHandlers();
});

//The afterAll hook is executed once after all the tests in the test suite. In this case, it's closing the mock server using server.close(). This ensures that the mock server is shut down after all tests have run, preventing it from interfering with other tests or any other parts of the application.
afterAll(() => {
  server.close();
});
