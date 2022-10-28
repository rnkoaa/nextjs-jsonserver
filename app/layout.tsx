import Link from "next/link";
import NavLink from "./nav-link"

/*            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/todos">Todos</Link>
            <Link href="/albums">Albums</Link>
            */

export default function RootLayout({ children}: {children: React.ReactNode}) {
  return (
    <html>
      <head>
        <title> Nested Layouts by example</title>
      </head>
      <body>
        <header>
          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/posts">Posts</NavLink>
            <NavLink href="/todos">Todos</NavLink>
            <NavLink href="/albums">Albums</NavLink>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
