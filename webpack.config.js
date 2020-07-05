module.exports = {
    mode: process.env.NODE_ENV === 'PROD' ? 'production' : 'development',
    entry: {
        app: './index.js',
    },
    output: {
        filename: './bundle.js',
    },
};
