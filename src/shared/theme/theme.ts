import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4db6e2", // Màu xanh biển nhạt cho primary
    },
    secondary: {
      main: "#64b5f6", // Màu xanh dương sáng cho secondary
    },
    background: {
      default: "#fff",
      paper: "#eff5fc", // Màu giấy trắng
    },
    text: {
      primary: "#212121", // Màu văn bản chính
      secondary: "#757575", // Màu văn bản phụ
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  colorSchemes: {
    dark: true,
  },
});
