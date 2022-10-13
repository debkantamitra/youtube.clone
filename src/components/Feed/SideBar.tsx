import { Stack } from "@mui/material";
import { categories, CategoryType } from "../../utils/constants";

interface Props {
  selectedCategory: string;
  handleSelectedCategory: (category: string) => void;
}

const SideBar = ({ selectedCategory, handleSelectedCategory }: Props) => (
  <Stack
    sx={{
      flexDirection: { sx: "row", md: "column" },
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((item: CategoryType) => (
      <button
        className="category-btn"
        style={{
          background: selectedCategory === item.name ? "#FC1508" : "",
          color: "white",
          transition: "ease-in-out",
        }}
        key={item.name}
        onClick={(e) => {
          handleSelectedCategory(item.name);
        }}
      >
        <span
          style={{
            color: selectedCategory !== item.name ? "#FC1508" : "",
            marginRight: 15,
          }}
        >
          {item.icon}
        </span>
        <span
          style={{
            opacity: selectedCategory === item.name ? "1" : "0.8",
          }}
        >
          {item.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
