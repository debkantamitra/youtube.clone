import React, { useEffect } from "react";

interface Props {
  videos: any[];
}

const Videos = ({ videos }: Props) => {
  console.log(videos, "videos");

  return <div>Videos</div>;
};

export default React.memo(Videos);
