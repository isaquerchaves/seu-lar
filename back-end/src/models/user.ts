import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config/connection'

interface UserAttributes {
    id: string
    name: string
    email: string
    email_verified: string
    image: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes
{
    public id!: string
    public name!: string
    public email!: string
    public email_verified!: string
    public image!: string
}

User.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email_verified: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
    }
)

export default User
