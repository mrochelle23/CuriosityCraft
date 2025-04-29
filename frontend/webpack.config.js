// Example Webpack rule for PostCSS
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader', // Ensure this is included
      ],
    },
  ],
},
