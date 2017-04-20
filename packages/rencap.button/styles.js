export default (theme, classes) => ({
  block: {
    ...classes.expand,
  },
  button: {
    padding: theme.sizes.atom,
  },
  danger: {
    backgroundColor: theme.colors.red,
  },
})
