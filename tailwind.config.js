module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        fontFamily: {
            'heading': ['ArchivoBlack'],
            'body': ['Judson Regular', "Judson Italic", "Judson Bold"]
        },
        extend: {
            colors: {
                'grey': {
                    'independence':'#555B6E',
                    'cultured':'#FAF9F9',
                },
                'blue': {
                    'morning': '#89B0AE',
                    'powder': '#BEE3DB'
                },
                'apricot': '#FFD6BA'
            }
        }
    },
    variants: {},
    plugins: [],
}
