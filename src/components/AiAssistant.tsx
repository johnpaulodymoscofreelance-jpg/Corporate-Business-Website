import React, { useState } from 'react';
import { ChatMessage } from '../types';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  ShieldCheck,
  RefreshCw,
  ArrowRight
} from 'lucide-react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onOpenDemo }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Greetings. I am NEXUS AI, your executive digital strategist. How may I assist you with sovereign AI architecture, cloud modernization, or ROI benchmarks today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      source: 'NEXUS Sovereign Neural Engine'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      const data = await res.json();
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.reply || 'Thank you for your query. Our strategic advisory team is available to assist.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source || 'NEXUS Strategic AI'
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'NEXUS AI is operating in high-security offline mode. How can we direct your enterprise inquiry?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'NEXUS Offline Advisory Matrix'
      };
      setMessages(prev => [...prev, aiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border-l border-purple-500/30 w-full max-w-lg h-full flex flex-col justify-between shadow-2xl relative text-white">

        {/* Drawer Header */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold flex items-center space-x-2">
                <span>NEXUS AI Executive Assistant</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </h3>
              <p className="text-[10px] text-purple-300 font-mono">Gemini 2.5 Neural Core • Zero-Data-Leakage</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 grow">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col space-y-1 ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-red-600 text-white rounded-br-none'
                    : 'bg-slate-950 border border-red-500/30 text-slate-200 rounded-bl-none shadow-lg'
                }`}
              >
                {m.text}
              </div>

              <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono px-1">
                <span>{m.timestamp}</span>
                {m.source && <span className="text-rose-400">• {m.source}</span>}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center space-x-2 text-xs text-rose-300 font-mono bg-slate-950 p-3 rounded-xl border border-red-500/20 w-fit animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-red-400" />
              <span>Synthesizing Enterprise Intelligence Response...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex overflow-x-auto space-x-2 no-scrollbar">
          <button
            onClick={() => setInput('What services does NEXUS provide for Banking?')}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-[10px] text-slate-300 hover:bg-slate-700 whitespace-nowrap"
          >
            Banking Solutions?
          </button>
          <button
            onClick={() => setInput('How does sovereign LLM prevent data leakage?')}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-[10px] text-slate-300 hover:bg-slate-700 whitespace-nowrap"
          >
            Sovereign LLM Security?
          </button>
          <button
            onClick={() => setInput('What is average ROI on digital transformation?')}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-[10px] text-slate-300 hover:bg-slate-700 whitespace-nowrap"
          >
            Expected ROI?
          </button>
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <form onSubmit={handleSend} className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask NEXUS AI a strategic question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500 grow"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shrink-0 flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>SOC2 Type II Protected Session</span>
            </span>
            <button onClick={() => { onClose(); onOpenDemo(); }} className="text-red-400 hover:underline">
              Schedule Exec Demo →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
