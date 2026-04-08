"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShareIcon,
  CheckIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import {
  shareNative,
  copyToClipboard,
  getShareUrls,
  openShareWindow,
  isShareSupported,
  type ShareData,
} from "@/lib/utils/share";

interface ShareButtonProps {
  data: ShareData;
  variant?: "button" | "icon";
  className?: string;
}

export function ShareButton({ data, variant = "button", className = "" }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNativeShare = async () => {
    const success = await shareNative(data);
    if (success) {
      setShowMenu(false);
    }
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(data.url);
    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowMenu(false);
      }, 2000);
    }
  };

  const handleSocialShare = (platform: keyof ReturnType<typeof getShareUrls>) => {
    const urls = getShareUrls(data);
    openShareWindow(urls[platform]);
    setShowMenu(false);
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: "💬",
      action: () => handleSocialShare("whatsapp"),
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
    },
    {
      name: "Twitter",
      icon: "🐦",
      action: () => handleSocialShare("twitter"),
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Facebook",
      icon: "📘",
      action: () => handleSocialShare("facebook"),
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Telegram",
      icon: "✈️",
      action: () => handleSocialShare("telegram"),
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Copy Link",
      icon: copied ? <CheckIcon className="w-5 h-5 text-green-500" /> : <LinkIcon className="w-5 h-5" />,
      action: handleCopyLink,
      color: "hover:bg-gray-50 dark:hover:bg-gray-800",
    },
  ];

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        onClick={() => {
          if (isShareSupported()) {
            handleNativeShare();
          } else {
            setShowMenu(!showMenu);
          }
        }}
        className={`
          inline-flex items-center gap-2 transition-colors
          ${variant === "button" 
            ? "px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700" 
            : "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          }
          ${className}
        `}
      >
        <ShareIcon className="w-5 h-5" />
        {variant === "button" && <span>Bagikan</span>}
      </button>

      {/* Share Menu */}
      <AnimatePresence>
        {showMenu && !isShareSupported() && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
            >
              <div className="p-2">
                <p className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Bagikan ke
                </p>
                {shareOptions.map((option, index) => (
                  <button
                    key={option.name}
                    onClick={option.action}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${option.color}
                    `}
                  >
                    <span className="text-xl">{option.icon}</span>
                    <span className="text-sm font-medium">{option.name}</span>
                    {option.name === "Copy Link" && copied && (
                      <span className="ml-auto text-xs text-green-500">Tersalin!</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
