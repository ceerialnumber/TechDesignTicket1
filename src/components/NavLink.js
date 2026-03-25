"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLink({ href, icon: Icon, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex flex-row items-center justify-center relative group px-4 py-2">
      <div className={cn(
        "flex flex-row items-center justify-center transition-all duration-500 ease-out gap-3",
        isActive ? "scale-110" : "scale-100"
      )}>
        <div className={cn(
          "p-2 rounded-full transition-all duration-500 shadow-xl",
          isActive 
            ? "bg-primary text-white shadow-primary/40" 
            : "bg-transparent text-on-surface-variant group-hover:text-primary"
        )}>
          <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
        </div>
        <span className={cn(
          "text-[11px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap",
          isActive ? "opacity-100 translate-x-0 w-auto" : "opacity-0 -translate-x-2 w-0 overflow-hidden"
        )}>
          {label}
        </span>
      </div>
    </Link>
  );
}
