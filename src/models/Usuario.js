const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt'); 

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: { 
        type: DataTypes.STRING, 
        allowNull: false
    },
    tipo: { 
        type: DataTypes.ENUM('COMUM', 'ADMIN'), 
        defaultValue: 'COMUM' 
    },
    codigo: { 
        type: DataTypes.STRING, 
        allowNull: true ,
        unique: true
    }
}, {
    tableName: 'tb_usuarios',
    timestamps: true,
    hooks: {
        beforeCreate: async (user) => {
            if (user.senha) user.senha = await bcrypt.hash(user.senha, 10);
        }
    }
});

module.exports = Usuario;