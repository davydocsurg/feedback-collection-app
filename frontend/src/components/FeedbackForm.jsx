import React, { useState } from "react";
import Modal from "./Modal";

const FeedbackForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
        setShowModal(true);
        event.preventDefault();
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && <Modal handleCloseModal={handleCloseModal} />}
            <h1>Feedback Form</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label form="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="fullname"
                        placeholder="Your name.."
                    />

                    <label form="lname">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                    />

                    <label form="subject">Subject</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        rows={10}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default FeedbackForm;
