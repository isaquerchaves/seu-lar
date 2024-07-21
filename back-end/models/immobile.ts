import { Model, DataTypes, Optional, ModelAttributes } from 'sequelize'
import sequelize from '../config/connection'

// Define a interface para os atributos obrigatórios e opcionais
interface ImmobileAttributes {
    id: number
    title: string
    description?: string
    district?: string
    city?: string
    state?: string
    price?: number
    status?: boolean
    type?: string
    purpose?: string
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date
}

interface ImmobileCreationAttributes
    extends Optional<ImmobileAttributes, 'id'> {}

// Cria a classe do modelo Immobile
class Immobile
    extends Model<ImmobileAttributes, ImmobileCreationAttributes>
    implements ImmobileAttributes
{
    public id!: number
    public title!: string
    public description?: string
    public district?: string
    public city?: string
    public state?: string
    public price?: number
    public status?: boolean
    public type?: string
    public purpose?: string
    public created_at?: Date
    public updated_at?: Date
    public deleted_at?: Date
}

// Inicializa o modelo Immobile
Immobile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        district: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        type: {
            type: DataTypes.STRING,
        },
        purpose: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        deleted_at: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: 'Immobile',
        tableName: 'immobile',
        timestamps: false,
    }
)

export default Immobile
