import express from 'express'
import cors from 'cors'
import immobileRoutes from './routes/immobileRoutes'
import sequelize from './config/connection'

const app = express()
const port = process.env.PORT || 3000

// Middleware para analisar o corpo das requisições JSON
app.use(express.json())

// Middleware CORS
app.use(cors())

// Rotas
app.use('/api', immobileRoutes)

// Inicializa o banco de dados e o servidor
const startServer = async () => {
    try {
        // Sincroniza os modelos com o banco de dados
        await sequelize.sync({ force: false })
        console.log('Banco de dados sincronizado com sucesso.')

        // Inicia o servidor
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error)
    }
}

startServer()
