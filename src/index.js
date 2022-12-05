const app = require('./app')
const sequelize = require('./database/database')
async function main(){
  try{
    await sequelize.sync({force:false})
    console.log('Conexión a la base de datos correcta')
    app.listen(3000)
    console.log('Server is listening on port', 3000)
  }catch(err){
    console.log(err)
  }
}

main()