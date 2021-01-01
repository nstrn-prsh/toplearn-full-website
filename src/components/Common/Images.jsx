import React from "react";
// import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import {Img} from "react-image";

const ReactImagePreLoader = ({ img }) => {
  return (
    <Img
      src={[
        `https://toplearnapi.ghorbany.dev/${img}`,
        "https://via.placeholder.com/150x100",
      ]}
      loader={
        <div className='text-center mx-auto'>
          <BarLoader
            // css={override}
            // size={150}
            color={"#4a90e2"}
            loading={true}
          />
        </div>
      }
    />
  );
};

export default ReactImagePreLoader;
