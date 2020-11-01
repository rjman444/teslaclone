import React from "react";
import "./FloatingDetails.css";
class FloatingDetailsV2 extends React.Component {
  state = {
    scrollPosition: 0,
    opacity: 1,
    slide: 0,
    content: ["Header 1", "Header 2", "Header 3", "Header 4"],
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let viewHeight = window.innerHeight;
    let currentSlide = Math.round(window.pageYOffset / viewHeight);
    console.log("Current Slide: " + currentSlide);
    let currPosition = Math.ceil(window.pageYOffset % viewHeight) / viewHeight;
    let newOpacity = -1 * Math.abs(Math.sin(3.14 * currPosition)) + 1;
    this.setState({
      opacity: newOpacity,
      slide: currentSlide,
    });
  };

  render() {
    return (
      <div className="floatingDetails" style={{ opacity: this.state.opacity }}>
        <h1>{this.state.content[this.state.slide]}</h1>
      </div>
    );
  }
}

export default FloatingDetailsV2;
