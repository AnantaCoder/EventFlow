import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
        leader: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        inviteCode: { type: String, unique: true },
    },
    { timestamps: true }
);

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);
