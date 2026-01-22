import { NextResponse } from "next/server";
// import { verifyToken } from "@/services/auth.service";

export async function authMiddleware(request) {
    // Authentication middleware logic
    // 1. Get token from cookies/headers
    // 2. Verify token
    // 3. Check roles

    return NextResponse.next();
}
