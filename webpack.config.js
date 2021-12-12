const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: { main: './src/scripts/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: ''
	},
    mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			  // добавили правило для обработки файлов картинок
			{
				// регулярное выражение, которое ищет все файлы с такими расширениями
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash][ext]'
				}
			},
			  // добавили правило для обработки файлов шрифтов
			{
				// регулярное выражение, которое ищет все файлы с такими расширениями
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash][ext]'
				}
			},
		  // правило для css:
			{
				// применять это правило только к CSS-файлам
				test: /\.css$/i,
				// при обработке этих файлов нужно использовать
				// MiniCssExtractPlugin.loader и css-loader
				use: [MiniCssExtractPlugin.loader, 
				{
				  loader: 'css-loader',
					// добавьте объект options
				  options: { importLoaders: 1 }
				},
				// Добавьте postcss-loader
				'postcss-loader'
				]
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
		  template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(), // РїРѕРґРєР»СЋС‡РµРЅРёРµ РїР»Р°РіРёРЅР° РґР»СЏ РѕР±СЉРµРґРёРЅРµРЅРёСЏ С„Р°Р№Р»РѕРІ
	]
};