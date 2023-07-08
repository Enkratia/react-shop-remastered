const path = require("path");
const loaderUtils = require("loader-utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new TerserWebpackPlugin(), new CssMinimizerPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

const getLocalIdent = (context, localIdentName, localName) => {
  const base = path.parse(context.resourcePath)?.name?.replace(/\.module/, "");

  const hasRootModifier = localName[4] === "_";

  const hash = loaderUtils.getHashDigest(
    path.posix.relative(context.rootContext, context.resourcePath) + localName,
    "md5",
    "base64",
    5,
  );

  if (localName.startsWith("root")) {
    if (hasRootModifier) {
      return `${base}__${localName.replace("root", "")}--${hash}`;
    }
    return `${base}--${hash}`;
  }

  return `${base}_${localName}--${hash}`;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "@src/index.tsx",
    // analytics: "./analytics.ts",
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".png", ".json"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devtool: isDev ? "source-map" : false,
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: false,
    port: 9000,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                getLocalIdent,
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|ico)$/,
        type: "asset/resource",
        generator: {
          filename: isDev ? "img/[name][ext]" : "img/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: isDev ? "fonts/[name][ext]" : "fonts/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
};
