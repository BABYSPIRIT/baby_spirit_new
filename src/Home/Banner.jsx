import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Row, Col, Button } from "antd";
import BabySpiritLogo from "./static/BabySpirit_Logo.jpg";
import { Link } from "react-router-dom";

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: "home-banner",
  };
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim
            className={`${className}-content-wrapper`}
            delay={200}
            ease="easeOutQuart"
          >
            <h1 key="p">HOLD BabySpirit, EARN Spirit!</h1>
            <p key="p">
              The highest rewards distribution token on Fantom network.
            </p>
            <span key="button">
              <Button
                onClick={() => {
                  window.open(
                    "https://swap.spiritswap.finance/#/swap?outputCurrency=0x44070cD841411f873B23d8F56EFfeBBA5C2592BF",
                    "_blank"
                  );
                }}
              >
                Buy on Spiritswap!
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <img
              style={{ height: "500px", width: "400px" }}
              src={BabySpiritLogo}
              alt="BabyLogo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
