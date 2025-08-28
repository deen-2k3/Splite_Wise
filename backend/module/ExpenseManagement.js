import mongoose from "mongoose";

const ExpenseManagementSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Amount: {
    type: Number,
    required: true
  },
  PaidBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  SplitType: {
    type: String,
    enum: ["equal", "percentage", "share"], // ✅ allowed split types
    required: true
  },
  MembersInvolved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" // usually this refers to users, not groups
    }
  ],
  GroupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group", // ✅ optional, for linking to group
    required: true
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Expense", ExpenseManagementSchema);
