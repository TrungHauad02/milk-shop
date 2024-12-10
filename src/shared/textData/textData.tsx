import { LeafIcon, MilkIcon, HeartIcon } from "lucide-react";

export const textData = {
  appName: "Tạp hóa kim cương",
  home: {
    heroSection: {
      title: "Sản phẩm sữa hữu cơ tươi ngon",
      description:
        "Trải nghiệm những sản phẩm sữa hữu cơ tươi ngon nhất từ các trang trại địa phương, được giao tận cửa nhà bạn.",
    },
    featuresSection: [
      {
        icon: <MilkIcon />,
        title: "Chính hãng",
        description: "Nguồn gốc trực tiếp từ các nhà cung cấp",
      },
      {
        icon: <LeafIcon />,
        title: "Hữu Cơ",
        description: "Sản phẩm được chứng nhận 100% hữu cơ",
      },
      {
        icon: <HeartIcon />,
        title: "Chất Lượng",
        description: "Sản phẩm sữa cao cấp",
      },
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Sữa Tươi Nguyên Kem Hữu Cơ",
        description:
          "Tươi ngon từ các trang trại địa phương, đậm đà và béo ngậy",
        price: "₫115,000",
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 2,
        name: "Sữa Chua Cao Cấp",
        description: "Giàu probiotic, kết cấu mịn màng",
        price: "₫82,000",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 3,
        name: "Phô Mai Thủ Công",
        description: "Lão hóa hoàn hảo",
        price: "₫162,000",
        image:
          "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 4,
        name: "Phô Mai Thủ Công 2",
        description: "Lão hóa hoàn hảo",
        price: "₫162,000",
        image:
          "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
};
