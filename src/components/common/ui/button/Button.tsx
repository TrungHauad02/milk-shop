import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "shared/hooks/useTheme";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  sx?: object;
  size?: "small" | "medium" | "large";
}

export function HeaderButton({
  variant = "text",
  sx,
  children,
  size = "small",
  onClick,
}: ButtonProps) {
  const { themeLight } = useTheme();

  const complexSx = {
    textTransform: "capitalize",
    fontSize: "1rem",
    color: themeLight ? "#121212" : "#d9d9d9",
    paddingX: "1rem",
    borderRadius: "50rem",
    "&:hover": {
      backgroundColor: "#104274",
      color: "#fff",
    },
    ...sx,
  };

  return (
    <Button onClick={onClick} variant={variant} sx={complexSx} size={size}>
      {children}
    </Button>
  );
}
