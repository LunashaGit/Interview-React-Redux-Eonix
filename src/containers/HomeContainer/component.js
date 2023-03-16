import React from "react";
import Home from "../../views/Home";
import { useInjectReducer } from "../../utils/injectReducer";
import reducer from "./reducer";

const key = "homeContainer";

export default function HomeContainer(props) {
  useInjectReducer({ key, reducer });

  return <Home {...props} />;
}
