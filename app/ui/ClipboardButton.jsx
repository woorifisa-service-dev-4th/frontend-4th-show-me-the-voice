"use client"

import { useState } from "react"
import { Clipboard, Check } from "lucide-react"

export default function ClipboardButton({ value }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center p-2 rounded-md text-sm font-medium transition-colors 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                  bg-primary text-primary-foreground hover:bg-primary/90`}
      aria-label={isCopied ? "Copied!" : "Copy to clipboard"}
    >
      {isCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
    </button>
  )
}

