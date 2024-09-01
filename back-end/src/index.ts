import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import sequelize from './config/connection'
import User from './models/user' // Corrigir caminho se necessário
import Profile from './models/profile' // Corrigir caminho se necessário

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use('/api', routes)

// Definir as associações entre os modelos
Profile.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' })
User.hasOne(Profile, { foreignKey: 'user_id', sourceKey: 'id' })

const startServer = async () => {
    try {
        await sequelize.sync({ force: false })
        console.log('Banco de dados sincronizado com sucesso.')
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error)
    }
}

startServer()
