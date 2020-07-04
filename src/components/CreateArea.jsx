import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea() {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" type="text" placeholder="Title" />}
        <textarea
          name="content"
          rows={isExpanded ? "3" : "1"}
          placeholder="What's on your mind?"
          onClick={() => {
            setExpanded(true);
          }}
        />
        <Zoom in={isExpanded}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
