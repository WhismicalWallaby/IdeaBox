import React from "react";
import "../styles.css";
import Heading from "./Heading";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <CreateArea />
      <Note />
      <Footer />
    </div>
  );
}
