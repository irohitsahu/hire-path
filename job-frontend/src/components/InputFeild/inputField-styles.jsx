import { styled, TextField } from "@mui/material";
import pxToRem from "@assets/theme/functions/pxToRem";

export const InputFieldWrapper = styled(({ isError, ...props }) => (
  <TextField {...props} error={isError} />
))(({ isError, theme }) => ({
  backgroundImage: isError
    ? `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E")`
    : "none",
  backgroundRepeat: "no-repeat",
  backgroundPosition: `right ${pxToRem(12)} center`,
  backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline, &:after": {
      borderColor: isError ? theme.palette.error.main : theme.palette.info.main,
    },
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: isError ? theme.palette.error.main : theme.palette.info.main,
  },
}));
