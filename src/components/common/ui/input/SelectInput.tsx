import useColor from "shared/color/useColor";
import { useTheme } from "shared/hooks/useTheme";
import styled from "styled-components";

export default function SelectInput({
  options,
  value,
  onChange,
}: {
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const color = useColor();
  const { themeLight } = useTheme();
  const SelectStyle = styled.select`
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 2px solid #ffffffff;

    font-size: 1rem;
    &:focus {
      border: 2px solid ${color.primary};
    }
  `;

  return (
    <SelectStyle
      value={value}
      onChange={onChange}
      style={{
        boxShadow: themeLight
          ? "0 0 10px rgba(0,0,0,0.2)"
          : "0 0 10px rgba(255,255,255,0.5)",
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectStyle>
  );
}
