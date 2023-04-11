require('dotenv').config();
import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL;

let cached = global.mongoose

if (!cached) { cached = global.mongoose = {conn: null, promise: null} }

const connect = async () => {

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
       try {
           cached.promise = await mongoose.connect(DB_URL, {
               useNewUrlParser: true,
               useUnifiedTopology: true
           });
       } catch(e) {
           console.error(e);
       }
    }

    cached.conn = await cached.promise;

    return cached.conn
}

export default connect;