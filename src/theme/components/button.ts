const button = {
    baseStyle: {
        fontSize: '14px',
    },
    variants: {
        solid: (props: any) => ({
            fontSize: '14px',
            // background: mode(semanticTokens.colors.primary._light, semanticTokens.colors.primary._dark),
            // color: mode(semanticTokens.colors.onBackground._light, semanticTokens.colors.onBackground._dark),
        }),
        ghost: (props: any) => ({
            fontSize: '14px',
        }),
    }
}

export default button