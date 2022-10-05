const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./routes/userRouter');
const wishesRouter = require('./routes/wishesRouter');
const apiRouter = require('./routes/apiRouter');
const anotherPageRouter = require('./routes/anotherPageRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/api/user', userRouter);
app.use('/api/wishes', wishesRouter);
app.use('/api/v1', apiRouter);
app.use('/api/another', anotherPageRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
