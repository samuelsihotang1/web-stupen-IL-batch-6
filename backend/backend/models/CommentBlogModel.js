import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const CommentBlog = db.define('comment_blog', {
    id_blog: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'blog',
            key: 'id'
        }
    },
    id_user: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    description: {
        type: DataTypes.TEXT,
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
    timestamps: false,
    primaryKey: ['id_blog', 'id_user']
});

export default CommentBlog;
