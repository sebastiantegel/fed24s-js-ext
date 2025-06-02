import styled from "styled-components";

type MovieWrapperProps = {
  selected: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100dvh;
`;

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const MovieWrapper = styled.div<MovieWrapperProps>`
  display: flex;
  flex-direction: column;

  width: 30%;

  background-color: ${(props) => (props.selected ? "red" : "none")};
`;
