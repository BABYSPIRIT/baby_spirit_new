import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { AiFillCaretRight, AiOutlineCheck } from "react-icons/ai";
import { Row, Col } from "antd";
import { page2 } from "./data";

const Children = () => {
  return (
    <Row>
      <Col className="col" flex={8}>
        <div className="content-wrapper">
          <h3>Phase 1</h3>
          <br />
          {page2[0].data.completed.map((data) => {
            return (
              <p>
                <span>
                  <AiOutlineCheck />
                </span>
                {data}
              </p>
            );
          })}
          {page2[0].data.uncompleted.map((data) => {
            return (
              <p>
                <span style={{ marginRight: "20px" }}>
                  <AiFillCaretRight />
                </span>
                {data}
              </p>
            );
          })}
        </div>
      </Col>
      <Col className="col" flex={8}>
        <div className="content-wrapper">
          <h3>Phase 2</h3>
          <br />
          {page2[1].data.map((data) => {
            return (
              <p>
                <span>
                  <AiFillCaretRight />
                </span>
                {data}
              </p>
            );
          })}
        </div>
      </Col>
      <Col className="col" flex={8}>
        <div className="content-wrapper">
          <h3>Phase 3</h3>
          <br />
          {page2[2].data.map((data) => {
            return (
              <p>
                <span>
                  <AiFillCaretRight />
                </span>
                {data}
              </p>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default function Page2() {
  return (
    <div className="home-layout-wrapper home-case-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim
          className="home-case"
          type="bottom"
          key="home-case"
          ease="easeOutQuart"
          leaveReverse
        >
          <div className="roadmap">
            <h2 key="h2">Our Road Map</h2>
            <i key="i" className="line" />
          </div>
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
            style={{ padding: "0px 50px" }}
          >
            <Children />
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
