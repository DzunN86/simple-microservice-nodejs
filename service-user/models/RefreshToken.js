module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        token: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false
        }
    },{
        tableName: 'refresh_token',
        timeStamps: true
    });

    return RefreshToken;
}