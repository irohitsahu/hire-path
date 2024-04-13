import { InputFieldWrapper } from "./inputField-styles";

export default function InputField({ type, label, name, errorMsg, fullWidth }) {
  return (
    <>
      <InputFieldWrapper
        type={type}
        name={name}
        label={label}
        helperText={errorMsg}
        fullWidth={fullWidth}
        isError={false}
      />
    </>
  );
}
