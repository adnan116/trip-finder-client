"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Image as ImageIcon, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import PropertyMap from "@/components/chat/PropertyMap";
import {
  sampleProperties,
  filteredProperties,
  type Property,
} from "@/lib/sampleProperties";
import WeatherInfo from "./WeatherInfo";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  mapData?: Property[];
  showWeather?: boolean;
}

const ShimmerLoading = () => (
  <div className="w-full animate-pulse space-y-4">
    <div className="bg-gray-300 rounded h-12 w-2/3"></div>
    <div className="bg-gray-300 rounded h-12 w-1/2"></div>
    <div className="bg-gray-300 rounded h-12 w-3/4"></div>
  </div>
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state to track loading
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: `${Date.now()}-bot`,
        sender: "bot",
        text: "Hello! I'm your property assistant. I can help you find properties and check weather conditions. Here's the current overview:",
        mapData: sampleProperties,
        showWeather: true,
      };
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      sender: "user",
      text: message,
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsBotTyping(true);
    setIsLoading(true); // Start loading

    const query = message.trim();
    const newProperties = await fetchProperties(query);

    setTimeout(() => {
      const botResponses: Message[] = [
        {
          id: `${Date.now()}-bot-text`,
          sender: "bot",
          text: generateBotResponse(query),
        },
        {
          id: `${Date.now()}-bot-data`,
          sender: "bot",
          text: "Here's the updated map and current weather information:",
          mapData: newProperties,
          showWeather: true,
        },
      ];

      setMessages((prev) => [...prev, ...botResponses]);
      setIsBotTyping(false);
      setIsLoading(false); // End loading
    }, 1500);
  };

  const generateBotResponse = (query: string): string => {
    const responses = [
      `I've found some properties matching "${query}". Let me show you the details.`,
      `Based on your interest in "${query}", I've updated the map with relevant properties.`,
      `I've searched for properties related to "${query}". Here's what I found.`,
      `Great question about "${query}"! I've found some matching properties.`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const fetchProperties = async (query: string): Promise<Property[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return filteredProperties;
  };

  return (
    <>
      <div style={{ minHeight: "fit-content" }}>
        <Button
          className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[800px] h-[80vh] max-h-[95vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>Property Assistant</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col h-full space-y-4">
              <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-md">
                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-4">
                    <div
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-black"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>

                    {msg.mapData && (
                      <div className="w-full">
                        <PropertyMap properties={msg.mapData} />
                      </div>
                    )}

                    {msg.showWeather && (
                      <div className="w-full">
                        <WeatherInfo />
                      </div>
                    )}
                  </div>
                ))}

                {isBotTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-300 text-black">
                      Typing...
                    </div>
                  </div>
                )}

                {/* Shimmer loading effect */}
                {isLoading && <ShimmerLoading />}

                <div ref={chatEndRef} />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex items-center space-x-2 p-4 bg-white border-t"
              >
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="shrink-0"
                >
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="shrink-0"
                >
                  <Mic className="h-5 w-5" />
                </Button>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit" size="icon" className="shrink-0">
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
