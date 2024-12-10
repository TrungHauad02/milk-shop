import { Box, Container, Grid, Card, Typography } from "@mui/material";
import { useTheme } from "shared/hooks/useTheme";
import { textData } from "shared/textData/textData";

export default function FeaturesSection() {
  const { themeLight } = useTheme();
  const features = textData.home.featuresSection;

  return (
    <Box sx={{ py: 6, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  boxShadow: 3,
                  bgcolor: themeLight ? "#fff" : "#121212",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: themeLight ? "#f1f1f1" : "#121212",
                    color: themeLight ? "#000" : "#fff",
                    marginBottom: "16px",
                  }}
                >
                  {feature.icon}
                </div>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
