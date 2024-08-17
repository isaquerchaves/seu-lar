import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config/connection'

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

// Criando a classe do modelo Profile
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

// Iniciando o modelo Profile
Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: true,
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

export default Profile
