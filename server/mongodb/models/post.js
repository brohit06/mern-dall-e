import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, require: true },
  prompt: { type: String, require: true },
  photo: {
    type: String,
    required: true,
  },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
