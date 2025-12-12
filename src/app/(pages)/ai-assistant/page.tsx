"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function PortfolioAssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Nick's portfolio AI. Ask me about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [
      ...messages,
      { role: "user" as const, content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/portfolio-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const replyContent = data.reply?.content ?? "No response";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: replyContent },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong reaching the portfolio assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
      px={2}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 700,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Ask My AI Project Tutor
        </Typography>

        <Box
          sx={{
            flex: 1,
            maxHeight: "50vh",
            overflowY: "auto",
            borderRadius: 1,
            border: "1px solid rgba(255,255,255,0.12)",
            p: 1,
          }}
        >
          {messages.map((m, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  px: 1.5,
                  py: 1,
                  maxWidth: "80%",
                  bgcolor:
                    m.role === "user" ? "primary.main" : "background.paper",
                  color: m.role === "user" ? "primary.contrastText" : "inherit",
                  fontSize: 14,
                }}
              >
                {m.content}
              </Box>
            </Box>
          ))}
        </Box>

        <Box display="flex" gap={1}>
          <TextField
            fullWidth
            multiline
            minRows={1}
            maxRows={4}
            placeholder="Ask about my projects, skills, or experience..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="contained" disabled={loading} onClick={handleSend}>
            {loading ? "..." : "Send"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
