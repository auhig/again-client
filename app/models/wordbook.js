'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("wordbook", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        freezeTableName: true,
        underscored: true
    });
};