'use client'

import ChatBubble from "@/components/custom/ChatBubble";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { useState } from "react";

export default function Chat() {
  const [mockMessages, setMockMessages] = useState([
    {
      side: "driver",
      message: "Halo, pesanan sesuai aplikasi ya"
    },
    {
      side: "customer",
      message: "Iya betul"
    },
    {
      side: "driver",
      message: "Apakah titik jemputnya sudah sesuai?"
    },
    {
      side: "customer",
      message: "Sudah"
    },
    {
      side: "driver",
      message: "Baik, mohon ditunggu ya"
    },
  ])

  return (
    <>
      <div className="py-3 mb-6 border-b-2 shadow-md">
        <div className="flex px-6 items-center ">
          <Button variant="ghost" asChild>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
            </Link>
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" width={50} height={50} className="rounded-full"/>
          </Avatar>
          <div className="ml-4">
            <p className="font-medium">Ujang Stephen</p>
            <p className="text-sm">B 2024 ALI</p>
          </div>
        </div>
      </div>
      <main className="space-y-4 px-6 flex flex-col overflow-y-scroll mb-6">
        { mockMessages.map((message) => (
          <ChatBubble
            key={message.message}
            message={message.message}
            side={message.side}
          />
        )) }
      </main>
    </>
  )
}