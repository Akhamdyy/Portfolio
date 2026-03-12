import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Terminal as TerminalIcon, Cpu } from 'lucide-react';

const CODE_SNIPPET = `// Shortest Job First (SJF) Scheduler
void schedule(Process p[], int n) {
    sort_by_burst_time(p, n);
    int current_time = 0;
    for(int i=0; i<n; i++) {
        p[i].waiting = current_time;
        current_time += p[i].burst;
        p[i].turnaround = current_time;
    }
}`;

export default function LogicLab() {
  const [isRunning, setIsRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <section className="py-24 px-8 md:px-24 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Cpu className="text-blue-500" /> Virtual Logic Lab
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Code Editor Side */}
          <div className="p-6 border-r border-slate-800 bg-slate-950/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-slate-500">scheduler.c</span>
              <button 
                onClick={runSimulation}
                disabled={isRunning}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all disabled:opacity-50"
              >
                {isRunning ? "Compiling..." : <><Play size={12} fill="currentColor" /> Run Code</>}
              </button>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto">
              <code>{CODE_SNIPPET}</code>
            </pre>
          </div>

          {/* Visualization Side */}
          <div className="p-6 bg-slate-900 flex flex-col justify-center items-center relative min-h-[300px]">
            <AnimatePresence mode='wait'>
              {!showResult && !isRunning && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-slate-600 text-center">
                  <TerminalIcon size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="text-sm">Execute the logic to view system output</p>
                </motion.div>
              )}

              {isRunning && (
                <motion.div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                    />
                  ))}
                </motion.div>
              )}

              {showResult && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 block mb-4 text-center">Generated Gantt Chart</span>
                  <div className="flex h-12 w-full border border-slate-800 rounded-lg overflow-hidden">
                    <div className="bg-blue-600 w-[20%] flex items-center justify-center text-[10px] font-bold border-r border-slate-900">P1</div>
                    <div className="bg-indigo-600 w-[30%] flex items-center justify-center text-[10px] font-bold border-r border-slate-900">P2</div>
                    <div className="bg-purple-600 w-[50%] flex items-center justify-center text-[10px] font-bold">P3</div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-500">
                    <span>0ms</span><span>4ms</span><span>10ms</span><span>20ms</span>
                  </div>
                  <button onClick={() => setShowResult(false)} className="mt-8 text-[10px] text-slate-500 underline mx-auto block">Reset Simulation</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}