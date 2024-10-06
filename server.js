const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your MongoDB connection string
const CONNECTION_STRING = "mongodb+srv://shrihariss29:8BDeFKpxGecP1vlc@todo.auqt1.mongodb.net/?retryWrites=true&w=majority&appName=Todo";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Schema and Model
const counterSchema = new mongoose.Schema({
  count: { type: Number, required: true },
});

const Counter = mongoose.model("Counter", counterSchema);

// Create an initial counter if none exists
(async () => {
  try {
    const result = await Counter.findOne({});
    if (!result) {
      const initialCounter = new Counter({ count: 0 });
      await initialCounter.save();
      console.log("Initial counter created with count 0.");
    } else {
      console.log("Counter already exists.");
    }
  } catch (error) {
    console.error("Error creating initial counter:", error);
  }
})();

// Route to get the current counter value
// Route to get the current counter value
app.get("/", async (req, res) => {
  try {
    const counter = await Counter.findOne({});
    res.json(counter);
  } catch (error) {
    res.status(500).json({ error: "Error fetching counter" });
  }
});

// Route to update the counter value
app.post("/", async (req, res) => {
  const { count } = req.body;
  try {
    const updatedCounter = await Counter.findOneAndUpdate({}, { count }, { new: true });
    res.json(updatedCounter);
  } catch (error) {
    res.status(500).json({ error: "Error updating counter" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
