import React, { Component, PropTypes } from "react";

class Video extends Component {
    render() {
        return (
            <video 
              autoPlay={this.props.autoplay}
              className={this.props.className}
              height={this.props.height}
              loop={this.props.loop}
              src={this.props.src}
              style={this.props.style}
              width={this.props.width}>
                Browser do not support HTML5 Video :(
            </video>
        );
    }
}

Video.propTypes = {
    autoPlay: PropTypes.bool,
    className: PropTypes.string,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    loop: PropTypes.bool,
    src: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Video