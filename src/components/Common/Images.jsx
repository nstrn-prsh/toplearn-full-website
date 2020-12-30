import React from "react";
// import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";
import Img from "react-image";

const ReactImagePreLoader = ({ img }) => {
  return (
    <Img
      src={[
        `https://toplearnapi.ghorbany.dev/${img}`,
        "https://via.placeholder.com/150x100",
      ]}
      loader={
        <div className='text-center mx-auto'>
          <ScaleLoader
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
