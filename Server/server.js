const express = require('express')
const app = express();
const cors=require('cors');
const mailSender = require('./utils/mailSender.js')
mailSender("madhumishra663@gmail.com", "otp", "895");

// packages
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

require('dotenv').config();

// connection to DB and cloudinary
const { connectDB } = require('./config/database');
const { cloudinaryConnect } = require('./config/cloudinary');

// routes
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profile');

const courseRoutes = require('./routes/course');
// const mailSender = require('./utils/mailSender');


// middleware 


app.use(express.json()); // to parse json body
app.use(cookieParser());
app.use(
    cors({
        // origin: 'http://localhost:5173', // frontend link
        origin: "*",
        credentials: true
    })
);
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp'
    })
)


const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'
app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});

// connections
connectDB();
cloudinaryConnect();

// mount route
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/course', courseRoutes);




// Default Route
app.get('/', (req, res) => {
    res.send(`<div>
    This is Default Route  
    <p>Everything is OK</p>
    </div>`);
})
