import React from "react";
import Cities from "./Cities";
import Cars from "./Cars";
import Cars_list from "../containers/cars_list";
import Cities_list from "../containers/cities";
import Details from "../containers/detailsCar";

const WebPage = () => (
  <>
    <Cars />
    <Cars_list />
    <Details />
    <Cities />
    <Cities_list />
  </>
);

export default WebPage;
