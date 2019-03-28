import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'

export default {
  ...theme,

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
  colors: {
  	...theme.colors,
  	text: 'white',
  	background: '#364141',
  },
  prism: {
	style: okaidia,
	language: jsx
  },
}
