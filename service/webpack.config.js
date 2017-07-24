module.exports = {
    entry: {
        'vendor': './src/app/vendor.ts',
        'main': './src/app/main.ts'
    },
    output: {
        filename: './src/public/[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}
