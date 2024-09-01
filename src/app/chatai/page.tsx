'use client'

import ChatBubble from "@/components/custom/ChatBubble";
import Loading from "@/components/custom/Loading";
import { Button } from "@/components/ui/button";
import { apiConfig, apiHeaders } from "@/config/api";
import { useOrder } from "@/contexts/OrderContext";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ChatAI() {
  const { order } = useOrder();

  const [mockMessage, setMockMessage] = useState()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGenerativeAI = async () => {
      const payload = {
        ...order,
        "AdditionalWastes": [
          {
            "Quantity": 1,
            "Name": "Tas Belanja",
            "Type": "primary",
            "Category": "reusable"
          }
        ]
      }

      const apiResponse = await fetch(`${apiConfig.API_URL}/v1/ai/generate`, {
        method: "POST",
        headers: apiHeaders,
        body: JSON.stringify(payload)
      });
      const res: APIResponse<GenAI> = await apiResponse.json();
      
      setMockMessage({
        side: "system",
        message: {
          preOutput: res.data.preOutput,
          output: res.data.preOutput
        }
      })
      setLoading(false);
    };

    fetchGenerativeAI();
  }, []);

  if (isLoading || mockMessage == undefined) {
    return <Loading message=""/>
  }

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
            <p className="font-medium">Asep Bensin</p>
          </div>
        </div>
      </div>
      <main className="space-y-4 px-6 flex flex-col overflow-y-scroll mb-6">
        <ChatBubble
          message={mockMessage.message.preOutput}
          side={mockMessage.side}
        />
        <ChatBubble
          message={mockMessage.message.output}
          side={mockMessage.side}
        />
      </main>
    </>
  )
}