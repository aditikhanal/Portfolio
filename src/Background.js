import React, { component } from "react";
import ReactDOM from 'react-dom';
import "./App.scss"
import About from "./components/home"
class ColoredContainer extends React.Component {
  render() {
    let containerStyle = {
      backgroundColor: this.props.color
    }
    return <div className="container" style={containerStyle}>
    </div>
  }
}

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return <button title='Back to top' className='scroll'
      onClick={() => { this.scrollToTop(); }}>
      <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
    </button>;
  }
}

class ScrollApp extends React.Component {
  constructor() {
    super();

    this.state = {
      colors: ["#d5f7f7", "#90e3e3", "#38adad", "#079191"]
    }
  }

  render() {
    return <div>

      {
        this.state.colors.map(function (color) {
          return <ColoredContainer color={color} />

        })
      }


    </div>

  }
}

//ReactDOM.render(<ScrollApp/>, document.getElementById('app'));

export default ScrollApp;