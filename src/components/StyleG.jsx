import React from "react";
import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  height: ${(props) => props.height};
  padding: 15px;
`;
