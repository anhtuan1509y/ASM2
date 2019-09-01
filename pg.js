const{Client, Pool} = require('pg')

var client = new Client({
    host: "ec2-54-221-214-3.compute-1.amazonaws.com",
    database: "d88qom8t9ksa8r",
    port: 5432,
    password: "d538c1dfac5b2e7d8e4c1044862dd42401bc61b516b561f13e15e4eb1e73c2f3",
    user: "qoguzmpwlvcnzc"
})

client.connect();

module.exports = client;
