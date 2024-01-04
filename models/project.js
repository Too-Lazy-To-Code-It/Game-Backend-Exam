import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },

        nbrTaskMax: {
            type: Number,
            required: true
        }
    });

export default model('Project', ProjectSchema);