import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const ImageProduct = db.define(
	'image_product',
	{
		id_product: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'products',
				key: 'id',
			},
		},
		image: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.literal(
				'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
			),
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

export default ImageProduct;
