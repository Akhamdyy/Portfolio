import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMMANDS = {
  help: "Available commands: bio, projects, skills, contact, clear, exit, whoami, car, university, sudo",
  whoami: "Ali Khaled Hamdy // Senior Computer Engineering Student @ Cairo University",
  bio: "Specializing in Backend Architectures, OS Concepts, and Fintech. Currently optimizing alikhaled.dev.",
  skills: "Languages: C, Java, Python, JavaScript, Dart, Assembly 8086. Frameworks: Spring Boot, React, Flutter, Node.js.",
  projects: "Type 'ls projects' to see my featured engineering builds.",
  "ls projects": "1. PressurePal (Flutter) | 2. AcquirerBank (Spring Boot) | 3. OS-Simulator (C) | 4. Microservice Gateway (Node.js)",
  contact: "Email: alikhaledhamdy@gmail.com | LinkedIn: linkedin.com/in/Akhamdyy",
  university: "Cairo University Faculty of Engineering // Senior-1 Student. Major: Computer Engineering.",
  car: "2014 Volkswagen Passat B7 // 1.4 TSI Single Turbo (CAXA). Status: Tuned for performance.",
  sudo: "ACCESS GRANTED. EXECUTING SYSTEM OVERRIDE..."
};

export default function Terminal({ isOpen, setIsOpen, onSudo }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(["Welcome to AK-OS v1.0.2", "Type 'help' to begin..."]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      
      if (cmd === 'clear') {
        setHistory([]);
      } else if (cmd === 'exit') {
        setIsOpen(false);
      } else if (cmd === 'sudo') {
        setHistory([...history, `> ${input}`, COMMANDS.sudo]);
        onSudo(); // Trigger the matrix rain in App.jsx
      } else {
        const response = COMMANDS[cmd] || `Command not found: ${cmd}. Type 'help' for options.`;
        setHistory([...history, `> ${input}`, response]);
      }
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed top-0 left-0 w-full h-[45vh] bg-slate-950/95 border-b border-blue-500/30 backdrop-blur-xl z-[999] font-mono p-6 text-sm text-blue-400 overflow-hidden shadow-2xl"
          onClick={() => inputRef.current?.focus()}
        >
          <div ref={scrollRef} className="h-full overflow-y-auto mb-4 scrollbar-hide">
            {history.map((line, i) => (
              <div key={i} className={line.startsWith('>') ? "text-white" : "text-blue-400/80"}>
                {line}
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-purple-500 font-bold">ak-os@guest:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none text-white flex-1"
                autoFocus
                spellCheck="false"
              />
            </div>
          </div>
          <div className="absolute bottom-2 right-6 text-[10px] text-slate-600 uppercase tracking-widest font-black">
            Root Access Enabled // Press ` to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}