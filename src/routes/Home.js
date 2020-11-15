import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      title
      medium_cover_image
    }
  }
`;
// eslint-disable-next-line
export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "로딩중~~~";
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.title}</h1>);
  }

  return <h1>Home</h1>;
};
