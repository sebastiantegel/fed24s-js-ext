import styled from "styled-components";

type ButtonProps = {
  color: string;
  bgColor: string;
};

export const Button = styled.button`
  color: black;
  background-color: lightblue;
  padding: 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SmallButton = styled(Button)`
  padding: 0.5rem;
`;

export const MagicButton = styled(Button)<ButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;
