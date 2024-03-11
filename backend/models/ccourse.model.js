const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    prerequisites: [{ type: Schema.Types.ObjectId, ref: 'Course' }],

    admin: { type: Schema.Types.ObjectId, ref: 'User', required: true },

    lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }]

}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
