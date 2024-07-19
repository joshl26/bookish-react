import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <div data-test="book-list">
        <div className="book-item">
          <h2 className="title">Refactoring</h2>
        </div>
        <div className="book-item">
          <h2 className="title">Domain-driven design</h2>
        </div>
      </div>
    </>
  );
}

export default App;
