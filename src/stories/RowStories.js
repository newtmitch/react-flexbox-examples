import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import styled from "styled-components";

const TwoItems = ({ Container, Item }) => {
  return (
    <Container>
      <Item>Col 1</Item>
      <Item>Col 2</Item>
    </Container>
  );
};

const ThreeItems = ({ Container, Item }) => {
  return (
    <Container>
      <Item>Col 1</Item>
      <Item>Col 2</Item>
      <Item>Col 3</Item>
    </Container>
  );
};

const SideBySideWithSpace = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Item = styled.div`
    border: 1px solid blue;
    margin-right: 10px;
  `;
  return (
    <div>
      <TwoItems
        Container={Container}
        Item={Item}
        style={{ marginBottom: "10px" }}
      />
      <ThreeItems Container={Container} Item={Item} />
    </div>
  );
};

const SpacedOutAndCentered = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Item = styled.div`
    border: 1px solid blue;
    flex: 1 0 auto;
    text-align: center;
  `;
  return (
    <div>
      <TwoItems Container={Container} Item={Item} />
      <ThreeItems Container={Container} Item={Item} />
    </div>
  );
};

const FlushRight = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    border: 1px solid red;
    margin-bottom: 20px;
    padding: 5px;
  `;
  const Item = styled.div`border: 1px solid blue;`;
  const FirstItem = Item.extend`
    margin-right: 10px;
    flex: 1 0 auto;
  `;
  return (
    <Container>
      <FirstItem>Col 1</FirstItem>
      <Item>Col 2</Item>
      <Item>Col 3</Item>
    </Container>
  );
};

storiesOf("Rows", module)
  .addDecorator(story =>
    <div style={{ margin: "5px 8px" }}>
      {story()}
    </div>
  )
  .add("Side By Side With Space", () => <SideBySideWithSpace />)
  .add("Spaced Out And Centered", () => <SpacedOutAndCentered />)
  .add("Flush Right", () => <FlushRight />);
