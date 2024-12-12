import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "shared/hooks/useTheme";

export default function HeroSection({ title, description }) {
  const { themeLight } = useTheme();

  return (
    <Box
      sx={{
        py: 6,
        textAlign: "center",
        background: themeLight
          ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(239,245,252,1) 50%, rgba(255,255,255,1) 100%)"
          : "linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(8,14,22,1) 50%, rgba(18,18,18,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 3, fontWeight: "bold", textTransform: "uppercase" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 6,
            color: themeLight ? "#717171" : "#a1a1a1",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
}
