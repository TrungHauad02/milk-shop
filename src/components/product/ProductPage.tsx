import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Footer } from "components/common/footer/Footer";
import { Header } from "components/common/header/Header";
import FilterProduct from "./filter/FilterProduct";
import { useEffect, useState } from "react";
import { useTheme } from "shared/hooks/useTheme";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    variant="h3"
    textTransform="capitalize"
    textAlign="left"
    padding="2rem"
    fontWeight="bold"
  >
    {children}
  </Typography>
);
const listProducts = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 10000,
    description: "Mô tả sản phẩm 1",
    category: "Sữa",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 20000,
    description: "Mô tả sản phẩm 2",
    category: "Trà",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 30000,
    description:
      "Mô tả sản phẩm 3, Mô tả sản phẩm 3, Mô tả sản phẩm 3, Mô tả sản phẩm 3, Mô tả sản phẩm 3",
    category: "Sữa",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 40000,
    description: "Mô tả sản phẩm 4",
    category: "Trà",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    id: 5,
    name: "Sản phẩm 5",
    price: 40000,
    description: "Mô tả sản phẩm 5",
    category: "Trà",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=300",
  },
];
export default function ProductPage() {
  const { themeLight } = useTheme();
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchText, setSearchText] = useState("");
  const categories = ["Tất cả", "Sữa", "Trà"];
  const sortByOptions = [
    "Giá (Thấp - Cao)",
    "Giá (Cao - Thấp)",
    "Tên (A - Z)",
    "Tên (Z - A)",
  ];
  const [displayProducts, setDisplayProducts] = useState(listProducts);

  useEffect(() => {
    let filteredProducts = listProducts;

    if (category) {
      if (category === "Tất cả") {
        filteredProducts = listProducts;
      } else {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }
    }
    if (sortBy) {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (sortBy === "Giá (Thấp - Cao)") {
          return a.price - b.price;
        } else if (sortBy === "Giá (Cao - Thấp)") {
          return b.price - a.price;
        } else if (sortBy === "Tên (A - Z)") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "Tên (Z - A)") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }
    setDisplayProducts(filteredProducts);
  }, [category, sortBy]);

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div>
      <Header />
      <Stack sx={{ marginLeft: "10%" }}>
        <Title>Sản phẩm</Title>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} spacing={4}>
        <FilterProduct
          searchText={searchText}
          categories={categories}
          sortByOptions={sortByOptions}
          category={category}
          sortBy={sortBy}
          onChangeSearchText={onChangeSearchText}
          onChangeCategory={onChangeCategory}
          onChangeSortBy={onChangeSortBy}
        />
        <Stack
          direction={"column"}
          sx={{
            minWidth: "300px",
          }}
          spacing={2}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
            sx={{ paddingX: "1rem" }}
          >
            <Typography
              variant="h6"
              fontWeight={"bold"}
              textTransform={"capitalize"}
            >
              Danh sách sản phẩm
            </Typography>
            <Typography variant="body1" fontWeight={"bold"} fontSize={"1.1rem"}>
              {displayProducts.length} sản phẩm
            </Typography>
          </Stack>
          <Grid
            container
            spacing={2}
            sx={{ paddingX: "1rem", minWidth: "100%" }}
          >
            {displayProducts &&
              displayProducts.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={product.id}
                  sx={{ minWidth: "33%" }}
                >
                  <Card
                    sx={{
                      borderRadius: "0.5rem",
                      boxShadow: themeLight
                        ? "0 0 10px rgba(0,0,0,0.2)"
                        : "0 0 10px rgba(255,255,255,0.3)",
                      maxWidth: "300px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transition = "all 0.5s";
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.cursor = "pointer";
                    }}
                    onMouseLeave={(e) => {
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
                      <Stack direction={"row"}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", mb: 1 }}
                        >
                          {product.name}
                        </Typography>
                      </Stack>
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
                          {formatPrice(product.price)}
                        </Typography>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Stack>
      <Footer />
    </div>
  );
}
