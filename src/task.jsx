import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightblue;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 2px;
  display: border-box;
`;

export default class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}
