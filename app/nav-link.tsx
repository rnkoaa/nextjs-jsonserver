import Link from "next/link"
// import { useSelectedLayoutSegment } from "next/navigation"

export default function NavLink({ href, children}: {href: string, children: React.ReactNode}) {

  return (
    <Link href={href}>{children}</Link>
  )

  {/* let segment = useSelectedLayoutSegment() */}

  {/* let active = href === `/${segment}` */}

  {/* console.log(active) */}

  {/* return <Link href={href}> */}
  {/*   {children} */}
  {/* </Link> */}
}
