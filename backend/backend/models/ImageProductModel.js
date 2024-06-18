import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const ImageProduct = db.define(
	'image_product',
	{
		id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
		},
		id_product: {
			type: DataTypes.CHAR(36),
			allowNull: false,
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
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

export default ImageProduct;
