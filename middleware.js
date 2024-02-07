// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

export default function middleware(request) {
  const url = request.nextUrl.clone();
  if (
    url.pathname.includes("company") ||
    url.pathname.includes("products") ||
    url.pathname.includes("resources")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
