import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

interface Props {
  videos: any[];
}

const Videos = ({ videos }: Props) => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos?.map((item: any, idx: number) => {
        return (
          <Box key={idx}>
            {item?.id?.videoId && <VideoCard content={item} />}
            {item?.id?.channelId && <ChannelCard content={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
