import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        registrationDeadline: Date,
        organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        status: {
            type: String,
            enum: ["draft", "upcoming", "ongoing", "completed"],
            default: "draft",
        },
        rules: [String],
        tracks: [String],
    },
    { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
