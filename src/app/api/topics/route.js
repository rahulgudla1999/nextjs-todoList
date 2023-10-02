import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb"
import Topic from "../../../models/topic";

export default async function POST(request){
    const {title, description} = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message:"Topic Created", success:true},{status:201});
}