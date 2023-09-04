import express from "express";
import mongoDBConnection from "./config/database";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", routes);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, async () => {
    console.info(`Server listening on port ${PORT}`);
    await mongoDBConnection();
});

export default app;
