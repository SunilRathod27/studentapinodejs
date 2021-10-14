const config = {
    user :'Sunil',
    password :'root',
    server:'localhost',
    database:'school',
    options:{
        trustedconnection: true,
        trustServerCertificate: true,
        enableArithAbort : true, 
        instancename :'SQLSERVER    '
    },
    port : 1433
}

module.exports = config; 