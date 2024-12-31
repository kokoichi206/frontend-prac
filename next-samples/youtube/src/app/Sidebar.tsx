"use client";

import { Home, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarItem = ({ icon, label, isActive }: SidebarItemProps) => {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-4 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent",
        isActive && "bg-accent"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div
      className={cn(
        "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 transform overflow-y-auto bg-background transition-transform duration-200 ease-in-out",
        !isOpen && "-translate-x-full"
      )}
    >
      <div className="space-y-1 p-2">
        <SidebarItem
          icon={<Home className="h-5 w-5" />}
          label="ホーム"
          isActive
        />
        <SidebarItem
          icon={<Video className="h-5 w-5" />}
          label="登録チャンネル"
        />
      </div>
    </div>
  );
};
