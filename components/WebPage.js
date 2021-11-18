import React from "react";
import Cities from "./Cities";
import Cars from "./Cars";
import Cars_list from "../containers/cars_list";
import Cities_list from "../containers/cities";

const WebPage = () => (
  <>
    <Cars />
    <Cars_list />
    <Cities />
    <Cities_list />
  </>
);

export default WebPage;
