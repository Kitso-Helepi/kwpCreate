import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, BookOpen, Clock, Globe } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatbotProps {
  onTriggerBooking: () => void;
}

export default function Chatbot({ onTriggerBooking }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to KWPCreate. I am your AI Design & Client Relations Partner. For over 70 years, we have directed monumental structures and urban spaces across Southern Africa. How can I assist you with your project requirements, master planning, or direct architectural consult booking today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Suggested dialogue options for lightning-quick consultative flow
  const suggestions = [
    "What services do you offer?",
    "Show me sustainable projects",
    "How do I book a senior director?",
    "Our budget & custom needs"
  ];

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    // Add user message to state
    const updatedMessages = [...messages, { role: "user", content: text } as Message];
    setMessages(updatedMessages);
    if (!textToSend) setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });

      if (!response.ok) {
        throw new Error("Failed to contact the digital advisor core");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text }
      ]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "We apologize, but connection to our local server is briefly blocked. Please connect with our senior directors directly using the Lead Generation forms below, or reach out to Pretoria administrative office."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Action Badge */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FFC40E] to-[#FFDA55] text-[#0D0D0D] shadow-[0_8px_32px_rgba(255,196,14,0.45)] hover:shadow-[0_8px_32px_rgba(255,196,14,0.6)] hover:scale-110 transition-all duration-300 border border-white/20 uppercase"
          aria-label="Open KWP Advisor AI"
          id="btn-open-chatbot"
        >
          <MessageSquare className="w-6 h-6" />
          
          {/* Notification Counter */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#7A2715] text-[10px] font-bold text-white border border-white/10 animate-bounce">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Main Chat Interface Window */}
      {isOpen && (
        <div
          className="w-[92vw] sm:w-[400px] h-[550px] rounded-3xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.95)] animate-fade-in"
          id="chat-window-inner"
        >
          {/* Elegant Modular Header */}
          <div className="p-4 bg-gradient-to-r from-[#111111] to-[#1A1A1A] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7A2715] to-[#A63B20] flex items-center justify-center relative shadow-[0_4px_12px_rgba(122,39,21,0.2)]">
                <Sparkles className="w-5 h-5 text-[#FFC40E]" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#0D0D0D]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold font-sans tracking-wide">AI Client Partner</span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#B3B3B3]">KWPCreate Advisory</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#B3B3B3] hover:text-white p-1 transition-colors"
              aria-label="Close Advisory Panel"
              id="btn-close-chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrolling message feed container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0D0D0D] to-[#111111] scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`flex flex-col max-w-[85%] ${
                  m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed font-sans ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-[#7A2715] to-[#A63B20] text-white rounded-tr-sm"
                      : "bg-white/5 border border-white/5 text-[#E5E5E5] rounded-tl-sm"
                  }`}
                >
                  {m.content}
                </div>
                <span className="text-[8px] font-mono text-[#B3B3B3] mt-1 uppercase tracking-widest">
                  {m.role === "user" ? "Your Inquiry" : "KWP AI Desk"}
                </span>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#B3B3B3] select-none">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC40E] animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC40E] animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC40E] animate-bounce" />
                </div>
                <span>Formulating spatial response...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-reply Suggestion Tabs */}
          <div className="px-4 py-2 bg-[#111111]/90 border-t border-white/5 overflow-x-auto whitespace-nowrap flex gap-2 no-scrollbar scroll-smooth">
            {suggestions.map((s, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(s)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-white font-medium border border-white/5 transition-all transition-colors duration-300 cursor-pointer"
                id={`chat-suggestion-${index}`}
              >
                <BookOpen className="w-3 h-3 text-[#FFC40E]" />
                {s}
              </button>
            ))}
          </div>

          {/* Input Panel Form element */}
          <div className="p-4 bg-[#111111] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about residential projects, timelines..."
                className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FFC40E] transition-colors"
                id="chatbot-input-field"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] text-[#0D0D0D] transition-transform hover:scale-105"
                id="chatbot-submit"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[8px] font-mono text-[#B3B3B3] mt-2 select-none uppercase tracking-widest">
              <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5 text-[#FFC40E]" /> Immediate Reply</span>
              <span className="flex items-center gap-1"><Globe className="w-2.5 h-2.5 text-[#FFC40E]" /> 1950 - 2026</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
