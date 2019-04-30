import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  :disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  :hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const LessButton = styled(Button)`
  background-color: #d39952;
  color: white;
  :hover,
  :active {
    background-color: #daa972;
    color: white;
  }
`;

const MoreButton = styled(Button)`
  background-color: #8f5e1e;
  color: white;
  :hover,
  :active {
    background-color: #99703f;
    color: white;
  }
`;

const control = ({ className, label, removed, added }) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <LessButton onClick={removed}>Less</LessButton>
      <MoreButton onClick={added}>More</MoreButton>
    </div>
  );
};

export default styled(control)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
