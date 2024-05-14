import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ErroPage() {
  let { id } = useParams();

  return (
    <div className=" flex-row">
      <h1>404 Not Found,there is no such thing {id}</h1>
      <Link to="/">Go Back To Home</Link>
    </div>
  );
}
