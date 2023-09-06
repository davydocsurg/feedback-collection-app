// controllers/feedbackController.js

import Feedback from "../models/Feedback";
import {
    notifySupportTeam,
    sendAcknowledgmentEmail,
} from "../services/SendgridService";

export const submitFeedback = async (req, res) => {
    try {
        const { name, email, feedback } = req.body;

        // Send acknowledgment email
        await sendAcknowledgmentEmail(email, name);

        // Send notification to support team
        await notifySupportTeam(name, email, feedback);

        // Save feedback to database
        await Feedback.create({ name, email, feedback });

        return res
            .status(200)
            .json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message ?? "Internal server error",
        });
    }
};
