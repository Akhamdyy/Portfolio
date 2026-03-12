import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Configuring OSPF and RIP Routing Protocols",
    date: "November 2025",
    description: "A deep dive into complex network topology configuration and troubleshooting using Cisco Packet Tracer.",
    readTime: "5 min read"
  },
  {
    title: "TCP/UDP Protocol Analysis & Handshakes",
    date: "October 2025",
    description: "Analyzing packet captures to understand the TCP three-way handshake and UDP DNS lookups using Wireshark.",
    readTime: "4 min read"
  },
  {
    title: "Designing a Phase-Locked Loop (PLL) System",
    date: "December 2025",
    description: "Control systems engineering notes on state-space analysis, stability, and controller design for a PLL project.",
    readTime: "8 min read"
  }
];

export default function Extras() {
  return (
    <section className="py-20 px-8 md:px-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* GitHub Graph */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Open Source Activity</h2>
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl overflow-x-auto">
            {/* REPLACE 'yourusername' WITH YOUR ACTUAL GITHUB USERNAME */}
            <GitHubCalendar 
              username="Akhamdyy" 
              colorScheme="dark"
              theme={{
                dark: ['#0f172a', '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa']
              }}
            />
          </div>
        </div>

        {/* Technical Notes / Blog */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Technical Notes</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10 }}
                className="group cursor-pointer border-l-2 border-slate-700 hover:border-blue-500 pl-6 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {post.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}