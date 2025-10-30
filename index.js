
const express = require('express');
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const app = express();
const PORT = 3000;
require('dotenv').config();
  const http = require('http');
  const server = http.createServer(app);
  const { Server } = require('socket.io');
  const io = new Server(server);
  // Make io accessible in your routes
  app.set('io', io);

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch(err => {
    console.error('❌ MongoDB connection error:', err);
});

  const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    priority: { type: String, enum: ['high', 'medium', 'low'], required: true },
    category: { type: String, default: 'other' },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    recurring: { type: Boolean, default: false },
    notification: { type: Boolean, default: false }
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String },
  email: { type: String },
  passwordHash: { type: String, required: true },
  profileUrl: String,
  watchlist: [{
        videoId: String,
        videoName: String,
        videoPoster: String,
        videoSize: Number,
        addedAt: { type: Date, default: Date.now }
      }],
  schedule: {
        Monday: [taskSchema],
        Tuesday: [taskSchema],
        Wednesday: [taskSchema],
        Thursday: [taskSchema],
        Friday: [taskSchema],
        Saturday: [taskSchema],
        Sunday: [taskSchema]
      },
    // In your User schema (not shown above)
 eventsByDate: {
      type: Map,
      of: [Object], // Array of task/event objects per date (e.g., "2025-07-22")
      default: {}
    }

});


const User = mongoose.model('User', userSchema);

const chatMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reactions: {
    type: Map, // e.g., { "👍": ["userId1", "userId2"], "❤️": ["userId3"] }
    of: [mongoose.Schema.Types.ObjectId],
    default: {}
  },
  replyTo: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage', default: null },
  repliedUsersNotified: { type: [mongoose.Schema.Types.ObjectId], default: [] } // Users notified via red dot
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

  // --- Schemas ---
  const folderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    folderId: { type: String, unique: true, default: () => uuidv4() },
    name: { type: String, required: true },
    parentId: { type: String, default: null },
    createdAt: { type: Date, default: Date.now }
  });

  const fileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    fileId: { type: String, required: true },
    folderId: { type: String, default: null },
    uniqueId: { type: String, required: true },
    size: { type: Number, required: true },
    uploadedAt: { type: Date, default: Date.now }
  });

  const Folder = mongoose.model('Folder', folderSchema);
  const File = mongoose.model('File', fileSchema);

// File store for the Method zone
// Define file schema and model
const mfileSchema = new mongoose.Schema({
  name: String,
  fileId: String,
  link: String,
  uniqueId: { type: String, unique: true },
  size: Number,
  thumbId: String,
  streamLink: String,
  hashCode: String,
  discription: String,
  labels: [String]
});

const MFile = mongoose.model('MFile', mfileSchema);


// --- Telegram Bot Setup ---
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const NBOT_TOKEN = process.env.NBOT_TOKEN;
const Nbot = new TelegramBot(NBOT_TOKEN, { polling: true });
const OWNER_ID = Number(process.env.OWNER_ID);
const Subscribers_Channel = process.env.Subscribers_Channel;

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session = require('express-session')
app.use(session({
    secret: 'secret-key', // Use a strong secret in production
    resave: false,
    saveUninitialized: false
}));

const requireLogin = (req, res, next) => {
    if (req.session && req.session.userId) {
        next(); // User is logged in
    } else {
        res.redirect('/login'); // Not logged in
    }
}

// --- Routes ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/students', async (req, res) => {
    const students = await Student.find().sort({ joined: -1 });
    res.json(students);
});



// -- Files Setup ---
require('./session.js')(app, express, User, bot, Subscribers_Channel);
require('./courses.js')(app, User, bot, BOT_TOKEN);
require('./userprofile.js')(app, User, File);
require('./Tools/tools.js')(app);
require('./call.js');
require('./Support/support.js')(app, express, User, bot, Subscribers_Channel, Nbot, path);
require('./Features/features.js')(app, express, User, BOT_TOKEN, bot, Subscribers_Channel, Nbot, path, ChatMessage, io, Folder, File, MFile);
require('./Policies/polices.js')(app, path);
require('./Admin/admin.js')(app, User, bot, BOT_TOKEN, MFile);
// --- Start Server ---
server.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
    console.log('Diwali gayi abb suru hoga mera action with high potential.');
});


