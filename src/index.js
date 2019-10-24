import * as React from "react";
import * as ReactDOM from "react-dom";
import { Voyager } from "graphql-voyager";
import fetch from "isomorphic-fetch";

function introspectionProvider(query) {
  return fetch(process.env.REACT_APP_GRAPHQL_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.REACT_APP_GRAPHQL_API_KEY
    },
    body: JSON.stringify({ query: query })
  }).then(response => response.json());
}

ReactDOM.render(
  <Voyager
    workerURI={process.env.PUBLIC_URL + "/voyager.worker.js"}
    introspection={introspectionProvider}
  />,
  document.getElementById("root")
);
