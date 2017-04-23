import template from './template'

export default (theme = template) => ({
  expand: {
    flex: 1,
  },
  text: {
    color: theme.font.color,
    fontSize: theme.font.size,
  },
})
