// No String Concatenation with __dirname and __filename
const path = require("path");
const pathname = path.join(__dirname, "bar.js");

// Write API (Component) Tests at Least
// We should write tests as soon as we have time to do it
// We can use test frameworks like Jest and libraries like Superagent to test our APIs.
// Check Test Coverage - npm i jest supertest

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
  res.json({ hello: "hello" });
});
module.exports = app;

const request = require("supertest");
const app = require("./index");

describe("hello test", () => {
  it("/ should return hello response", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ hello: "hello" });
  });
});

// Use Linter

// Inspect for Vulnerable Dependencies
// We can use npm audit or snyk.io to check for vulnerable dependencies so that we update those packages as quickly as possible.

// Tagging tests let us search for them easily. (and run specific tests)
it("should travel back in time #back", () => {
  expect(travelBack({ now: 2016 }, 16)).toEqual({ now: 2000 });
});

// Inspect for Outdated Packages
// We can check for outdated packages with npm outdated and npm-check-updates to detect outdated packages. We can also run it in our CI pipeline to prevent the build from succeeding if we have outdated packages.

// Performance Timing API (perf_hooks) - https://medium.com/better-programming/4-very-useful-built-in-node-js-modules-b734e140174c

// Clear file
fs.writeFile("./note.txt", "", err => {
  if (err) throw err;
  console.log("file cleared");
});

// Output the value of the search parameter of the URL
let SearchURL = new URL("https://example.org/?product=car");
console.log(SearchURL.searchParams.get("product"));
