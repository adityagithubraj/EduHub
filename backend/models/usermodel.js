const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type:String,
        require:true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        default:'student',
        required: true
    },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]

}, { timestamps: true });

const User = mongoose.model('USER', userSchema);

module.exports = {User}
