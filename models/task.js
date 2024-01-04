import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TaskSchema = new Schema(
    {
        employeeId: {
            type: String,
            required: true
        },
        projectId: {
            type: String,
            required: true
        },
        status: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

export default model('Task', TaskSchema);