import {z} from "zod";

export const messageSchema=z.object({
    content:z.string().min(1,{message:"Message cannot be empty"})
    .max(300,{message:"Message cannot be more than 300 character"})


})