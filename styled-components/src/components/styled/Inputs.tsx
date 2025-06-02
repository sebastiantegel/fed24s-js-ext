import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "text",
})`
  padding: 1rem;
`;

export const Password = styled(Input).attrs({
  type: "password",
})``;
