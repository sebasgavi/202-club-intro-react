import { theme } from "./theme";

const { createUseStyles } = require("react-jss");

export const useTestStyles = createUseStyles({
  test: {
    backgroundColor: ({ bg }) => bg,
    height: ({ height }) => (height || 100),
    '&:hover': {
      //height: 310,
    },
  },
  other: {
    backgroundColor: theme.palette.secondary,
    height: 200,
  },
});