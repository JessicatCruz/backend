const mongoose = require("mongoose");

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Path: {
        type: String,
        required: true
    },   
},{
    timestamps: true,
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

File.virtual('url').get(function() {
    return `http://http://localhost:3333/files/${encodeURIComponent(this.Path)}`

})

module.exports = mongoose.model('File', File);