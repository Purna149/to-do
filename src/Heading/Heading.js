import React    from "react";
import template from "./Heading.jsx";

class Heading extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Heading;
