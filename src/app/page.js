"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
const MarkdownEditor = dynamic(() => import("./components/MarkdownEditor"), { ssr: false });

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col space-y-6 p-4">
      <h1 className="text-2xl font-bold">Markdown ➜ HTML 預覽器</h1>
      <MarkdownEditor />
    </div>
  );
}
