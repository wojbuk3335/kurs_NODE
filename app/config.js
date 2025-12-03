require('dotenv').config()

module.exports={
    PORT:process.env.PORT||'3000',
    DATABASE:process.env.DATABASE || 'mongodb+srv://wbukowski1985_db_user:13r2KteToN4bUcpw@3cluster0.lorpoxv.mongodb.net/kurs-node?retryWrites=true&w=majority&appName=3Cluster0'
}