import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import styled from "styled-components";

const SideBySideWithSpace = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Item = styled.div`
    border: 1px solid blue;
    margin-right: 10px;
    min-width: 150px;
  `;
  return (
    <div>
      <Container>
        <Item>Col 1</Item>
        <Item>Col 2</Item>
      </Container>
      <Container>
        <Item>Col 1</Item>
        <Item>Col 2</Item>
        <Item>Col 3</Item>
        <Item>Col 4</Item>
        <Item>Col 5</Item>
        <Item>Col 6</Item>
        <Item>Col 7</Item>
      </Container>
    </div>
  );
};

const SpacedOutAndCentered = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Item = styled.div`
    border: 1px solid blue;
    flex: 1 0 auto;
    text-align: center;
    min-width: 100px;
  `;
  return (
    <div>
      <Container>
        <Item>Col 1</Item>
        <Item>Col 2</Item>
      </Container>
      <Container>
        <Item>Col 1</Item>
        <Item>Col 2</Item>
        <Item>Col 3</Item>
        <Item>Col 4</Item>
        <Item>Col 5</Item>
        <Item>Col 6</Item>
        <Item>Col 7</Item>
      </Container>
    </div>
  );
};

const FlushRight = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Item = styled.div`
    border: 1px solid blue;
    min-width: 100px;
  `;
  const FirstItem = Item.extend`
    margin-right: 10px;
    flex: 1 0 auto;
  `;
  return (
    <Container>
      <FirstItem>Col 1</FirstItem>
      <Item>Col 2</Item>
      <Item>Col 3</Item>
      <Item>Col 4</Item>
      <Item>Col 5</Item>
      <Item>Col 6</Item>
      <Item>Col 7</Item>
    </Container>
  );
};

storiesOf("Wrapping Row Content", module)
  .addDecorator(story =>
    <div style={{ margin: "5px 8px" }}>
      {story()}
    </div>
  )
  .add("Side By Side With Space", () => <SideBySideWithSpace />)
  .add("Spaced Out And Centered", () => <SpacedOutAndCentered />)
  .add("Flush Right", () => <FlushRight />);
