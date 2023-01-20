import semanticTokens from './semanticTokens'
import heading from './components/heading'
import colors from './colors'
import { extendTheme } from '@chakra-ui/react'
import button from './components/button'

const theme = extendTheme({
    colors: colors,
    semanticTokens: semanticTokens,
    components: {
        Heading: heading,
        Button: button,
    },
    styles: {
        global: {
            body: {
                fontFamily: 'Roboto',
                color: 'onBackground'
            }
        }
    }
})

export default theme