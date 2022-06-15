import React from "react";
import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.height};
  padding: 15px;
`;
