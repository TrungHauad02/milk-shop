import { useTheme } from "shared/hooks/useTheme";
import { MilkIcon } from "lucide-react";
import { Box, Stack, Typography } from "@mui/material";
import { HeaderButton } from "components/common/ui/button/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { textData } from "shared/textData/textData";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { themeLight, toggleTheme } = useTheme();
  const appName = textData.appName;

  return (
    <nav className="border-b">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={"0.75rem 20%"}
        sx={{
          boxShadow: themeLight
            ? "0 0 10px rgba(0,0,0,0.2)"
            : "0 0 10px rgba(255,255,255,0.2)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ color: "primary.main" }}>
            <MilkIcon />
          </Box>
          <Typography variant="h6" fontWeight={600} fontSize="1.5rem">
            {appName}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ paddingLeft: "2rem" }}>
            <HeaderButton onClick={() => navigate("/")}>Trang chủ</HeaderButton>
            <HeaderButton onClick={() => navigate("/products")}>
              Sản phẩm
            </HeaderButton>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <HeaderButton onClick={toggleTheme}>
            {themeLight ? (
              <DarkModeIcon sx={{ color: "primary.main" }} />
            ) : (
              <LightModeIcon sx={{ color: "primary.main" }} />
            )}
          </HeaderButton>
        </Stack>
      </Stack>
    </nav>
  );
}
