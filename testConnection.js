const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "teste-dominando-nodejs",
    "teste-dominando-nodejs_owner",
    "npg_IZzhYAa3lx0E",
    {
        host: "ep-yellow-breeze-a4n2q7af-pooler.us-east-1.aws.neon.tech",
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

sequelize.authenticate()
    .then(() => console.log("🔥 Conexão com o Neon estabelecida com sucesso!"))
    .catch(err => console.error("❌ Erro ao conectar com o Neon:", err));
