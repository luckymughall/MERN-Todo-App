const mongoose = require("mongoose");
const listschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user: [
        {
            type:mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
}, {
    timestamps: true // Add this line to automatically add createdAt and updatedAt fields
});

module.exports=mongoose.model("List",listschema);