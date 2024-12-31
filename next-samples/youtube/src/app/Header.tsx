"use client";

import Link from "next/link";
import { Menu, Search, Mic, Upload, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useSidebar } from "./use-sidebar";

export const Header = () => {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-4 md:gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={toggle}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">メニュー</span>
          </Button>

          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 fill-red-600"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
            </svg>
            <span className="hidden font-bold sm:inline-block">YouTube</span>
            <span className="text-xs align-top">JP</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2 md:gap-4">
          <form className="flex w-full max-w-lg items-center">
            <div className="relative flex flex-1">
              <Input
                type="search"
                placeholder="検索"
                className="rounded-r-none border-r-0 pl-4 pr-10"
              />

              <Button
                type="submit"
                variant="outline"
                size="icon"
                className="absolute right-0 rounded-none px-4"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">検索</span>
              </Button>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-l-none border-l-0"
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">音声検索</span>
            </Button>
          </form>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Upload className="h-5 w-5" />
            <span className="sr-only">作成</span>
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0 relative">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
            >
              9+
            </Badge>
            <span className="sr-only">通知</span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="@username" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
