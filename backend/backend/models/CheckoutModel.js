import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const Checkout = db.define('checkout', {
    id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    id_carts: {
        type: DataTypes.JSON,
        allowNull: true
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Checkout;
