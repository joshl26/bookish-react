const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use((req, res, next) => {
  if (req.method === "DELETE" && req.query["_cleanup"]) {
    const db = router.db;
    db.set("books", []).write();
    res.sendStatus(204);
  } else {
    next();
  }
});

server.use(
  cors({
    origin: true,
    credentials: false,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());

const bodyParser = require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.delete("/books/:id/reviews", (req, res) => {
  const { id } = req.params;

  const book = router.db
    .get("books")
    .find({ id: parseInt(id) })
    .value();
  book.reviews = [];
  router.db.write();

  res.sendStatus(204);
});

server.post("/books/:id/reviews", (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;

  const book = router.db
    .get("books")
    .find({ id: parseInt(id) })
    .value();
  if (book) {
    if (!book.reviews) {
      book.reviews = [];
    }

    const review = {
      id: book.reviews.length + 1,
      bookId: Number(id),
      name,
      content,
    };

    book.reviews.push(review);
    router.db.write();

    res.status(201).json(review);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

server.put("/books/:bookId/reviews/:reviewId", (req, res) => {
  const { bookId, reviewId } = req.params;
  const { name, content } = req.body;

  const book = router.db
    .get("books")
    .find({ id: parseInt(bookId) })
    .value();
  if (book) {
    const review = book.reviews.find((r) => r.id === parseInt(reviewId));
    if (review) {
      review.name = name;
      review.content = content;
      router.db.write();

      res.status(200).json(review);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

server.use(middlewares);

server.use(router);

server.listen(8080, () => {
  console.log("JSON server is running");
});
