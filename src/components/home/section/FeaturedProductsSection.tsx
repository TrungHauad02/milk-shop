import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useTheme } from "shared/hooks/useTheme";
import { textData } from "shared/textData/textData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedProductsSection() {
  const { themeLight } = useTheme();
  const featuredProducts = textData.home.featuredProducts;

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 6,
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Sản phẩm nổi bật
        </Typography>
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  margin: "2rem 1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 0px 15px 5px #ccc";
                  e.currentTarget.style.transition = "all 0.5s";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0px 0px 3px 3px #ccc";
                  e.currentTarget.style.transition = "all 0.5s";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div style={{ position: "relative", paddingTop: "75%" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <CardContent
                  sx={{ p: 3, bgcolor: themeLight ? "#fff" : "#121212" }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    {product.description}
                  </Typography>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {product.price}
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
