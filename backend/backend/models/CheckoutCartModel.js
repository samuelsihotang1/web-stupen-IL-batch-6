import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Cart from "./Cart.js"; // Pastikan Anda sudah memiliki model Cart
import Checkout from "./Checkout.js"; // Pastikan Anda sudah memiliki model Checkout

const { DataTypes } = Sequelize;

const CheckoutCart = db.define('checkout_cart', {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        allowNull: false
    },
    id_cart: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: Cart,
            key: 'id'
        }
    },
    id_checkout: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: Checkout,
            key: 'id'
        }
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

export default CheckoutCart;

(async()=>{
    await db.sync();
})();
