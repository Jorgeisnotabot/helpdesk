import Ticket from "../models/ticket.model.js";
import { Request, Response } from "express";

export const createTicket = async (req: Request, res: Response): Promise<Response> => {
    const ticket = new Ticket(req.body);

    if (!ticket.companyId || !ticket.subject || !ticket.description || !ticket.status) {
        return res.status(400).send({ message: "Please fill all required fields" });
    }

    const newTicket = new Ticket(ticket);

    try {
        await newTicket.save();
        return res.status(201).send({
            success: true,
            data: newTicket
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error creating ticket: ", error.message);
            return res.status(500).send({ message: "Error creating ticket" });
        } else {
            console.error("An unknown error occurred");
            return res.status(500).send({ message: "An unknown error occurred" });
        }
    }
}