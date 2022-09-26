import { Field } from "./Filter.styled";

interface IPropsFilter {
  value: string;
  onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme?: string;
}

export const Filter = ({ value, onChangeFilter, theme }: IPropsFilter) => {
  return (
    <label style={{ fontSize: "22px" }}>
      Search contacts:
      <Field
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact..."
        theme={theme}
      />
    </label>
  );
};
