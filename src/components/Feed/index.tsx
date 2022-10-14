import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  function handleSelectedCategory(category: string) {
    setSelectedCategory(category);
  }

  async function fetchVideos() {
    const videos = await fetchFromAPI(
      `/search?part=snippet&q=${selectedCategory}`
    );

    setVideos(videos);
  }

  useEffect(() => {
    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, overflowY: "auto" }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          backgroundColor: "#000",
          borderRight: "1px solid #3d3d3d",
        }}
        p={2}
      >
        <SideBar
          handleSelectedCategory={handleSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <Typography
          sx={{ mt: 1.5, color: "white", overflow: "auto" }}
          className="copyright"
          variant="body2"
        >
          Copyright 2022 youtube.clone
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          sx={{ mt: 1.5, color: "white", overflow: "auto" }}
          variant="h4"
          fontWeight={"bold"}
          mb={2}
        >
          {selectedCategory} <span style={{ color: "#FC1508" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
