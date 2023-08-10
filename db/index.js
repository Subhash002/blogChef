import mongoose from "mongoose";

const connectToDb = () =>
  mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.sivzjy9.mongodb.net/blog?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

export default connectToDb;
