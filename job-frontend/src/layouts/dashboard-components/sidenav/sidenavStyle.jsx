
function sideNavStyles(theme) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba } = functions;

  return {
    background: transparent.main,
    color: "white.main",
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: md,

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue = rgba(white.main, 0.2);
        return backgroundValue;
      },
    },
  };
}

export { sideNavStyles };
