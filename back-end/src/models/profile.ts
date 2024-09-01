import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config/connection'
import User from './user'

interface ProfileAttributes {
    id: number
    user_id: string
    creci: string
    phone: number
    city: string
    state: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

interface ProfileCreationAttributes extends Optional<ProfileAttributes, 'id'> {}

class Profile
    extends Model<ProfileAttributes, ProfileCreationAttributes>
    implements ProfileAttributes
{
    public id!: number
    public user_id!: string
    public creci!: string
    public phone!: number
    public city!: string
    public state!: string
    public createdAt?: Date
    public updatedAt?: Date
    public deletedAt?: Date
}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creci: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'createdat',
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'updatedat',
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deletedat',
        },
    },
    {
        sequelize,
        modelName: 'Profile',
        tableName: 'profile',
        timestamps: true,
    }
)

// Definições de associação
Profile.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' })
User.hasOne(Profile, { foreignKey: 'user_id', sourceKey: 'id' })

export default Profile
