import mongoose from "mongoose";
import validator from "validator";

const FeedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            validate: [validator.isEmail, "Please provide a valid email."],
        },
        feedback: {
            type: String,
            required: [true, "Feedback is required"],
            minlength: [10, "Feedback should be at least 10 characters long"],
        },
    },
    {
        timestamps: true,
    }
);

const Example = mongoose.model("Example", FeedbackSchema);

export default Example;
