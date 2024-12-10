import { MilkIcon } from "lucide-react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { useTheme } from "shared/hooks/useTheme";
import { textData } from "shared/textData/textData";

export function Footer() {
  const { themeLight } = useTheme();
  const appName = textData.appName;

  return (
    <Box
      sx={{
        backgroundColor: themeLight ? "#f5f9ff" : "#151515",
        py: 5,
        mt: 10,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          <MilkIcon
            className="h-8 w-8 text-primary"
            style={{ fontSize: 40, color: "#1976d2" }}
          />
          <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
            {appName}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 {appName}.
        </Typography>
      </Container>
    </Box>
  );
}
