import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import { LocationOn, Phone, Mail } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Hàm tạo srcset cho hình ảnh
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const AboutSection = () => {
  const shopInfo = {
    name: "Dairy Tươi Mỗi Ngày",
    description:
      "Được thành lập vào năm 2010, Dairy Tươi Mỗi Ngày đã cung cấp các sản phẩm sữa chất lượng cao nhất đến với cộng đồng của chúng tôi. Chúng tôi tự hào khi sản phẩm được lấy trực tiếp từ các trang trại địa phương, đảm bảo cung cấp những sản phẩm sữa tươi ngon nhất cho khách hàng.",
    address: "123 Con Đường Sữa, Khu Milk, MD 12345",
    phone: "(555) 123-4567",
    email: "contact@dairytuoimoingay.com",
  };

  const ownerInfo = {
    name: "John Smith",
    title: "Chủ Sở Hữu & Thợ Làm Sữa Chính",
    quote:
      '"Sứ mệnh của chúng tôi là mang đến các sản phẩm sữa tốt nhất trực tiếp từ các trang trại địa phương đến bàn ăn của bạn, luôn giữ vững các tiêu chuẩn chất lượng và độ tươi ngon cao nhất."',
    imageUrl:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=150&h=150",
  };

  const images = {
    shop: "https://images.unsplash.com/photo-1596450514735-111a2fe02935",
    insideShop: "https://images.unsplash.com/photo-1596450514735-111a2fe02935",
    products: "https://images.unsplash.com/photo-1616594092403-fb65629b0a46",
  };

  // Dữ liệu hình ảnh cho ImageList
  const itemData = [
    {
      img: images.shop,
      title: "Cửa hàng",
      rows: 2,
      cols: 2,
    },
    {
      img: images.insideShop,
      title: "Bên trong cửa hàng",
    },
    {
      img: images.products,
      title: "Sản phẩm",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      cols: 2,
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Giới thiệu về cửa hàng của chúng tôi
        </Typography>

        <Grid container spacing={4}>
          {/* Thông tin cửa hàng */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {shopInfo.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                {shopInfo.description}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOn sx={{ color: "primary.main" }} />
                  <Typography variant="body2">{shopInfo.address}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}
                >
                  <Phone sx={{ color: "primary.main" }} />
                  <Typography variant="body2">{shopInfo.phone}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}
                >
                  <Mail sx={{ color: "primary.main" }} />
                  <Typography variant="body2">{shopInfo.email}</Typography>
                </Box>
              </Box>

              {/* Thông tin chủ sở hữu */}
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <img
                    src={ownerInfo.imageUrl}
                    alt={`${ownerInfo.name} - Chủ sở hữu`}
                    style={{
                      width: 75,
                      height: 75,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {ownerInfo.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {ownerInfo.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 2 }}
                    >
                      {ownerInfo.quote}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>

          {/* Hình ảnh cửa hàng */}
          <Grid item xs={12} md={6} sx={{ height: "500px" }}>
            {/* Image List */}
            <ImageList
              sx={{ width: "100%", height: "100%" }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
