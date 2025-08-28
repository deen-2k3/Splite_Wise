import mongoose from "mongoose";

const BalanceSettleSchema = mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "group",
      require: true,
    },
   
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    To: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    amount: {
      type: Number,
      require: true,
      min: 0,
    },
    isSettle: {
      type: Boolean,
      default: false,
    },
    settlementMethod: {
      type: String,
      enum: ["cash", "upi", "bank", "other"],
      default: null,
    },
    settledAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Balance", BalanceSettleSchema);
