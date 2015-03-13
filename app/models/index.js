'use strict';

var Sequelize = require('sequelize');
var database = require('../config').database;

var sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: database.dialect,
        pool: database.pool
    }
);

// 模型定义文件名
var models = [
    'user',
    'word',
    'wordbook'
];

// 注册模型
models.forEach(function (model) {
    // 将文件名转换为驼峰式类名（例如：foo-bar -> FooBar）
    var className = model.replace(/(?:^|-)(\w)/g, function (m, c) {
        return c.toUpperCase();
    });
    module.exports[className] = sequelize.import(__dirname + '/' + model);
});

// 描述实体间依赖关系
(function (m) {
    m.Word.belongsTo(m.Wordbook);
    m.Wordbook.hasMany(m.Word, {as: 'Words'});
})(module.exports);

module.exports.sequelize = sequelize;
