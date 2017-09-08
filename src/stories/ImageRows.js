import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import styled from "styled-components";

const basePlaceholderImgUrl = "http://via.placeholder.com";

const SideBySideWithSpaceWrapping = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Img = styled.img`
    border: 1px solid blue;
    margin: 5px;
    height: auto;
    // flex: 0 1;
  `;
  return (
    <div>
      <Container>
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
      </Container>
      <Container>
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
        <Img src="http://via.placeholder.com/200" />
      </Container>
    </div>
  );
};

storiesOf("Image Rows (responsive)", module)
  .addDecorator(story =>
    <div style={{ margin: "5px 8px" }}>
      {story()}
    </div>
  )
  .add("Side By Side With Space", () => <SideBySideWithSpaceWrapping />);
