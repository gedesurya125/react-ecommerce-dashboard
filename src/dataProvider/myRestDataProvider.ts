import fetchMock from "fetch-mock";
import FakeRest from "fakerest";
var data = {
  authors: [
    { id: 0, first_name: "Leo", last_name: "Tolstoi" },
    { id: 1, first_name: "Jane", last_name: "Austen" },
  ],
  books: [
    { id: 0, author_id: 0, title: "Anna Karenina" },
    { id: 1, author_id: 0, title: "War and Peace" },
    { id: 2, author_id: 1, title: "Pride and Prejudice" },
    { id: 3, author_id: 1, title: "Sense and Sensibility" },
  ],
  settings: {
    language: "english",
    preferred_format: "hardback",
  },
};
const restServer = new FakeRest.FetchServer("http://localhost:4000");
restServer.init(data);
fetchMock.mock("begin:http://localhost:3000", restServer.getHandler());
