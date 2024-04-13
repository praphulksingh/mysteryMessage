import dbConnect from "@/lib/dbconnect";
import UserModel from "@/model/user.model";
import bcryptjs from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request:Request){
    await dbConnect();

   try {
    const {email, username, password}=await request.json()
   } catch (error) {
    console.error("Error while regestering user",error)
    return Response.json({
        success:false,
        message:"Error Regestring user"
    },{
        status:500
    })
   }
}

