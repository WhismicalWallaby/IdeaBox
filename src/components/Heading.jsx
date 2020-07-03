import React from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function Heading(props) {
  return (
    <h1 className="heading">
      <EmojiObjectsIcon style={{ fontSize: 40 }} />
      {props.name && props.name + "'s "}Idea Box{" "}
    </h1>
  );
}

export default Heading;
