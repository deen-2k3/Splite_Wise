import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import GroupRouter from "./routes/GroupCreationRoute.js";
import ExpenseManagement from "./routes/BalanceSettelRoute.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/group",GroupRouter)
app.use("/api/v1/Expense",ExpenseManagement);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
