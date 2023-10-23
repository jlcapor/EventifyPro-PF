const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Users', {
        id: {
          type: DataTypes.UUID,
          defaultValue : DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apelledo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        } 
})
}