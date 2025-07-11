"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs({ overview, projects, feedback }) {
  const [tab, setTab] = useState("Overview");

  const renderContent = () => {
    switch (tab) {
      case "Projects":
        return (
          <ul className="list-disc pl-6">
            {projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        );
      case "Feedback":
        return (
          <ul className="list-disc pl-6">
            {feedback.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        );
      default:
        return <p>{overview}</p>;
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {["Overview", "Projects", "Feedback"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded transition-all duration-200 ${
              tab === t
                ? "bg-blue-500 text-white scale-105"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Animate tab content */}
      <div className="bg-white p-4 rounded shadow min-h-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
