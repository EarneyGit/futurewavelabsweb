'use client';

import { ParticleWave } from "@/components/ui/particle-wave";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";

const Hero = () => {
  const text = "POWERING INDIA'S NEXT WAVE";
  const words = text.split(" ");
  
  // Voice Assistant State
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState("idle");
  const [retellWebClient, setRetellWebClient] = useState<RetellWebClient | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
    },
  };

  // Initialize Retell Web Client
  useEffect(() => {
    const client = new RetellWebClient();
    setRetellWebClient(client);

    // Set up event listeners
    client.on("call_started", () => {
      console.log("✅ Call started");
      setCallStatus("connected");
      setIsCallActive(true);
    });

    client.on("call_ended", () => {
      console.log("🔚 Call ended");
      setCallStatus("idle");
      setIsCallActive(false);
      setIsLoading(false);
    });

    client.on("error", (error) => {
      console.error("❌ Retell error:", error);
      setCallStatus("error");
      setIsCallActive(false);
      setIsLoading(false);
    });

    client.on("update", (update) => {
      console.log("📊 Call update:", update);
    });

    return () => {
      if (client) {
        client.stopCall();
      }
    };
  }, []);

  const handleVoiceCall = async () => {
    if (!retellWebClient) {
      console.error("❌ Retell client not initialized");
      return;
    }

    if (isCallActive) {
      console.log("🔚 Ending call...");
      retellWebClient.stopCall();
      setCallStatus("idle");
      setIsCallActive(false);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setCallStatus("connecting");
      
      console.log("🚀 Starting voice call...");
      
      const response = await fetch('/api/create-retell-web-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.details || 'Failed to create web call');
      }

      console.log("✅ Web call created:", data);
      
      await retellWebClient.startCall({
        accessToken: data.access_token,
        sampleRate: data.sample_rate || 24000,
        captureDeviceId: "default",
        playbackDeviceId: "default",
      });

    } catch (error) {
      console.error("❌ Error starting voice call:", error);
      setCallStatus("error");
      setIsCallActive(false);
      setIsLoading(false);
    }
  };

  const getCallStatusMessage = () => {
    switch (callStatus) {
      case "idle":
        return "Talk with AI Agent";
      case "connecting":
        return "Connecting...";
      case "connected":
        return "End Call";
      case "error":
        return "Try Again";
      default:
        return "Talk with AI Agent";
    }
  };

  const getCallStatusColor = () => {
    switch (callStatus) {
      case "idle":
        return "from-red-500 to-red-600";
      case "connecting":
        return "from-yellow-500 to-yellow-600";
      case "connected":
        return "from-green-500 to-green-600";
      case "error":
        return "from-red-600 to-red-700";
      default:
        return "from-red-500 to-red-600";
    }
  };

  const getCallIcon = () => {
    if (isCallActive) {
      return <PhoneOff className="w-6 h-6" />;
    }
    if (callStatus === "connecting") {
      return <Phone className="w-6 h-6 animate-pulse" />;
    }
    return <Mic className="w-6 h-6" />;
  };

  return (
    <section className="relative w-full h-screen bg-background overflow-hidden">
      <ParticleWave />
      
      {/* Hero Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight uppercase whitespace-nowrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent"
                variants={wordVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Accelerating progress across News, AI, SaaS, Solar and Construction.
          </motion.p>

          {/* Voice Assistant Button */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.button
              id="startCallButton"
              onClick={handleVoiceCall}
              disabled={isLoading}
              className={`
                relative px-8 py-4 text-lg font-semibold rounded-full
                border-2 transition-all duration-300 ease-out
                flex items-center gap-3 group
                ${isCallActive 
                  ? 'bg-red-500 hover:bg-red-600 border-red-400 text-white' 
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-400 text-white'
                }
                ${isLoading
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105 hover:shadow-lg'
                }
                shadow-lg backdrop-blur-sm
              `}
              whileHover={!isLoading ? { 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
              } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isCallActive ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, repeat: isCallActive ? Infinity : 0, ease: "linear" }}
              >
                {getCallIcon()}
              </motion.div>
              <span>
                {getCallStatusMessage()}
              </span>
              
              {/* Pulse effect when active */}
              {isCallActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-300"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.button>
            
            {/* Call Status Display */}
            {callStatus !== "idle" && (
              <motion.p
                id="callStatus"
                className={`
                  text-center text-sm font-medium px-4 py-2 rounded-full max-w-md
                  ${callStatus.includes("error") || callStatus.includes("Failed") 
                    ? 'text-red-300 bg-red-500/20' 
                    : callStatus === "connected"
                    ? 'text-green-300 bg-green-500/20'
                    : callStatus === "connecting"
                    ? 'text-yellow-300 bg-yellow-500/20'
                    : 'text-blue-300 bg-blue-500/20'
                  }
                  backdrop-blur-sm border border-white/10
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {callStatus === "connected" && "🎙️ Connected with Aura, your AI assistant"}
                {callStatus === "connecting" && "⏳ Connecting to voice agent..."}
                {callStatus === "error" && "❌ Connection failed, please try again"}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.button
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
          onClick={() => {
            const nextSection = document.querySelector('#expertise');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          whileHover={{ y: -5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white transition-colors duration-300"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 