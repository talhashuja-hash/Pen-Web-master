const mongoose = require("mongoose")

const mongoURI = "mongodb+srv://talha12345:talha12345@tco.pnjpm.mongodb.net/nowproject?authSource=admin&replicaSet=atlas-gkrv8y-shard-0&w=majority"
exports.connection =
            mongoose
                    .connect(mongoURI, { useUnifiedTopology: true }, { useNewUrlParser: true })
                    .then(() => console.log('conection find'))
                    .catch((err) => console.log('err'));