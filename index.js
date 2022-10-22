console.log('Hello Tanner');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./schemas/post');
const User = require('./schemas/user');
const { CommentModel } = require('./schemas/comment');

