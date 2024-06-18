import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const CategoryBlog = db.define('category_blog', {
    id_blog: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'blog',
            key: 'id'
        }
    },
    category: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default CategoryBlog;
