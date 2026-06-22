import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        size="small"
        color="success"
        variant="text"
        href=""
        onClick={() => console.log("a")}
      >
        Small
      </Button>
      <Button
        size="medium"
        color="secondary"
        variant="contained"
        href=""
        onClick={() => console.log("b")}
      >
        Medium
      </Button>
      <Button
        size="large"
        color="primary"
        variant="outlined"
        href=""
        onClick={() => console.log("c")}
      >
        Large
      </Button>

      <Button
        size="small"
        color="success"
        variant="text"
        href="https://www.youtube.com/"
      >
        Small
      </Button>
      <Button
        size="medium"
        color="secondary"
        variant="contained"
        href="https://www.youtube.com/"
      >
        Medium
      </Button>
      <Button
        size="large"
        color="primary"
        variant="outlined"
        href="https://www.youtube.com/"
        onClick={() => console.log("f")}
      >
        Large
      </Button>
    </>
  );
}

export default App;
