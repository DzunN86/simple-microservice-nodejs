module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['admin', 'student'],
            allowNull: false,
            defaultValues: 'student'
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }

    }, {
        tebleName: 'users',
        timeStamps: true
    });

    return User;
}