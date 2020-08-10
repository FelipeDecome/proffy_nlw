import React from "react";

import LoadingSvg from "./styles";

interface LoadingProps {
  loadingWidth?: string;
}

const Loading: React.FC<LoadingProps> = ({ loadingWidth }) => {
  return (
    <LoadingSvg
      loadingWidth={loadingWidth}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M153.545 0H43.902C14.725 0 0 14.2846 0 42.5783V194.008C0 197.716 1.97511 200 6.23043 200H39.3737C43.34 200 45.8932 197.716 45.8932 194.008V188.258C45.8932 174.233 51.7543 166.588 66.3187 165.115H153.545C185.548 165.115 200 151.122 200 120.544V44.5704C200 13.993 185.548 0 153.545 0ZM154.155 107.685C154.155 124.269 150.43 127.686 130.871 127.686H84.4159C64.8735 127.686 52.3966 134.262 45.8772 147.121V53.7209C45.8772 40.8616 48.9924 37.4281 64.5684 37.4281H130.871C150.43 37.4281 154.155 40.8616 154.155 57.4297V107.685Z"
        fill="white"
      />
    </LoadingSvg>
  );
};

export default Loading;
