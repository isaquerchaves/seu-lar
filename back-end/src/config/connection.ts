import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('seu_lar', 'seu_lar_owner', '4LZFdTnW7KfR', {
    host: 'ep-steep-heart-a5b5ubcz.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
})

export default sequelize
