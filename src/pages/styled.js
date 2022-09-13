import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.1);
  }
`
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;