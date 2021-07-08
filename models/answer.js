const mongoose = require('mongoose')


const schema = mongoose.Schema

const ansSchema = new schema({
    score: {
        type: String
    }
})
module.exports=mongoose.model('Answer', ansSchema )