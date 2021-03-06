'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        nickname: DataTypes.STRING
    }, {
        freezeTableName: true,
        underscored: true
    });
};