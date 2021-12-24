module.exports = {
    reactStrictMode: true,
    experimental: {
        urlImports: [
            "https://framer.com/m/",
            "https://framerusercontent.com/",
            "https://ga.jspm.io/",
            "https://jspm.dev/",
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}
