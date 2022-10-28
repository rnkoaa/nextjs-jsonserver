"use client";

import Link from "next/link";
import {  useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  let segments : string[] = useSelectedLayoutSegments();
  const active = href === `/${segments.length ? segments[0]: ""}`


  // const active = href === `/${segment}`;
  console.log({href, segments, active})

  // console.log(`Href ${href}, active ${active}, segment ${segment}`);
  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}
