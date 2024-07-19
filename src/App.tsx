import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <div data-test="book-list">
        <div className="book-item"></div>
        <div className="book-item"></div>
      </div>
    </>
  );
}

export default App;
