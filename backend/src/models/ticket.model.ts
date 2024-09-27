import { Schema, model } from 'mongoose';

//interface
interface Ticket {
    _id: string;
    companyId: string;
    clientId?: string;
    subject: string;
    description: string;
    status: 'open' | 'in progress' | 'closed';
    createdAt: Date;
    updatedAt: Date;
    assignedTo?: string;
    priority?: 'low' | 'medium' | 'high';
    tags?: string[];
}

//schema
const ticketSchema = new Schema<Ticket>({
    _id: {
        type: String,
        required: true
    },
    companyId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['open', 'in progress', 'closed'],
        default: 'open'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    assignedTo: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        required: false,
        enum: ['low', 'medium', 'high']
    },
    tags: {
        type: [String],
        required: false
    }

});

//model
const Ticket = model<Ticket>('Ticket', ticketSchema);

export default Ticket;