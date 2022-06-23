const { Schema, model } = require("mongoose");

const phonesSchema = new Schema ({

    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number

})

const PhonesModel = model("Phone", phonesSchema)

module.exports = PhonesModel;