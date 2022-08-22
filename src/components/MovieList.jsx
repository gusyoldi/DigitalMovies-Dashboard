import React from "react";

export default function MovieList({id, title, rating, awards, length}) {
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{rating}</td>
          <td>{awards}</td>
          <td>{length}</td>
        </tr>
      </tbody>
    </React.Fragment>
  );
}

 