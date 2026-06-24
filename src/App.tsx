import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <h1>Modal Header</h1>
        <p>Modal Content</p>
      </Modal>
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
        onClick={handleOpen}
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
