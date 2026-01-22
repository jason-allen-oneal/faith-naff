
import React, { useState, useRef, useEffect } from 'react';
import { chatWithFaith } from '../services/llm';
import { ChatMessage } from '../types';

const AskFaith: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const updatedHistory = [...messages, { role: 'user', content: userMessage }];

    setInput('');
    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      const aiResponse = await chatWithFaith(updatedHistory);
      setMessages(prev => [...prev, { role: 'model', content: aiResponse }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ask" className="py-24 bg-[#2d3e33] text-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold serif mb-4">Ask Faith</h2>
          <p className="text-stone-300">Have a question about my platform or vision for Caldwell County? Ask my campaign assistant below.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden flex flex-col h-[500px] shadow-2xl">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                <i className="fas fa-comment-dots text-4xl"></i>
                <p>Ask about "economic plans", "schools", or "environment"</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg ${msg.role === 'user' ? 'bg-stone-100 text-[#2d3e33] rounded-br-none' : 'bg-stone-800 text-stone-100 rounded-bl-none border border-white/5'}`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 p-4 rounded-lg rounded-bl-none border border-white/5 flex space-x-2">
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-black/20 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How will you help local small businesses?"
              className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-stone-500"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-stone-100 text-[#2d3e33] px-6 py-2 rounded-md font-bold hover:bg-white disabled:opacity-50 transition-all"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        
        <p className="mt-4 text-center text-xs text-stone-400 italic">
          Disclaimer: This is an AI assistant representing Faith Naff's policy positions.
        </p>
      </div>
    </section>
  );
};

export default AskFaith;
