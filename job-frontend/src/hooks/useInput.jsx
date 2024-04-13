import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const MAX_CHAR_COUNT = 30;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const charCount = inputValue.length;

    if (charCount <= MAX_CHAR_COUNT) {
      setValue(inputValue);
    }
  };
  const inputProps = {
    value,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    onChange: (e) => handleInputChange(e),
  };

  return [value, isFocused, inputProps];
}
