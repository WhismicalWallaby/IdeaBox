import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function Note() {
  return (
    <div className="note">
      <h2>This is a title</h2>
      <p>Here is some content.</p>
      <Button className="delete-button">
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Note;
