import { connect } from 'mongoose';


export const connectDB = async () => {
    try {
         const connection = await connect(process.env.MONGO_URI || '');
            console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error('An unknown error occurred');
        }
        process.exit(1);
    }
}