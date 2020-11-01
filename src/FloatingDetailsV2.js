import React from "react";
import "./FloatingDetails.css";
class FloatingDetailsV2 extends React.Component {
  state = { scrollPosition: 0, opacity: 1 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let currPosition = Math.floor(window.pageYOffset);
    let newOpacity = this.setState({
      scrollPosition: currPosition,
      opacity: currPosition,
    });
    console.log("Opacity: " + this.state.opacity);
    console.log("Scroll: " + this.state.scrollPosition);
  };

  handleOpacity = () => {};

  render() {
    return (
      <div
        className="floatingDetails"
        style={{ opacity: this.state.opacity, color: "red" }}
      >
        <h1>DISSAPPEAR</h1>
      </div>
    );
  }
}

export default FloatingDetailsV2;
