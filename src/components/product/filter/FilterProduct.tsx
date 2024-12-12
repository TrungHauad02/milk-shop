import { Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "shared/hooks/useTheme";
import TuneIcon from "@mui/icons-material/Tune";
import {
  InputTextField,
  SelectInput,
} from "components/common/ui/input/InputUI";

export default function FilterProduct({
  searchText,
  categories,
  sortByOptions,
  category,
  sortBy,
  onChangeSearchText,
  onChangeCategory,
  onChangeSortBy,
}) {
  const { themeLight } = useTheme();
  return (
    <Stack
      direction={"column"}
      sx={{
        minWidth: "300px",
        boxShadow: themeLight
          ? "0 0 10px rgba(0,0,0,0.1)"
          : "0 0 10px rgba(255,255,255,0.3)",
        padding: "1rem 1rem 2rem 1rem",
        borderRadius: 2,
        height: "100%",
        position: "sticky",
        top: "3%",
      }}
      spacing={2}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <TuneIcon />
        <Typography
          variant="h6"
          fontWeight={"bold"}
          textTransform={"capitalize"}
        >
          Bộ lọc
        </Typography>
      </Stack>
      <Stack direction={"column"} spacing={1}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Tìm Kiếm
        </Typography>
        <InputTextField
          placeholder="Tìm kiếm sản phẩm"
          value={searchText}
          onChange={onChangeSearchText}
        />
      </Stack>
      <Divider />
      <Stack direction={"column"} spacing={1}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Loại
        </Typography>
        <SelectInput
          options={categories}
          value={category}
          onChange={onChangeCategory}
        />
      </Stack>
      <Divider />
      <Stack direction={"column"} spacing={1}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Sắp Xếp
        </Typography>
        <SelectInput
          options={sortByOptions}
          value={sortBy}
          onChange={onChangeSortBy}
        />
      </Stack>
    </Stack>
  );
}
