import {NextResponse} from 'next/server'
import {cookies} from 'next/headers'
const protectedRoutes = /^\/chatlist(\/.*)?$/;
const publicRoutes = ['/login', '/signup', '/']

export default async function middleware(req) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = false;
        /*protectedRoutes.test(path);*/
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = (await cookies()).get('session')?.value
    const session = null;
    // await decrypt(cookie)
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if (
        isPublicRoute &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}