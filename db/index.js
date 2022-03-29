const mysql=require('mysql')
module.exports={
    config:{
        host:'124.223.212.23',
        port:3306,
        user:'playwith',
        password:'kJcTbxyFRwZkRLfz',
        database:'playwith'
    },
    connection(sql,arr,callback){
        const pool=mysql.createPool(this.config)
        pool.getConnection((err,connection)=>{
            if(!err){
                connection.query(sql,arr,callback)
                connection.release()
            }else{
                return err
            }
        })

    }
}