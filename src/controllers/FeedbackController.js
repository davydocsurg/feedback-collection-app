// controllers/feedbackController.js

import { sendAcknowledgmentEmail } from "../services/SendgridService";

export const submitFeedback = async (req, res) => {
    try {
        const { name, email, feedback } = req.body;

        // Send acknowledgment email
        await sendAcknowledgmentEmail(email, name);

        // Handle feedback submission and saving to database
        // ...

        res.status(200).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
