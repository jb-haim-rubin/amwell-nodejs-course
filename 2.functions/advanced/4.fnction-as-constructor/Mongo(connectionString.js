function Mongo(connectionString) {
    this.connectionString = connectionString
}
Mongo.prototype.initDB = function () {
    //this.connectionString
    return {
        run(query) {
            debugger
            //running query
        },
    }
}
Mongo.prototype.connect = function (onConnect) {
    const mongo = this.initDB()
    onConnect(mongo)
}

function Query() {}
Query.prototype.setConnection = function (mongoRef) {
    debugger
    this.mongoRef = mongoRef
}
Query.prototype.runQuery = function (query) {
    this.mongoRef.run(query)
}
const mng = new Mongo('//localhost:3434/db')
const query = new Query()
mng.connect(query.setConnection.bind(query))
query.runQuery('Select * from')
