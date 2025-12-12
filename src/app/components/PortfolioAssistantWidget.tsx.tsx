"use client";

import { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PortfolioAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m Nick’s AI portfolio assistant. Ask me about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/ai-assistant", {
        messages: newMessages,
      });
      const data = res.data;
      const replyContent =
        typeof data.reply?.content === "string"
          ? data.reply.content
          : Array.isArray(data.reply?.content)
          ? data.reply.content
              .map((c: { text?: string }) => c.text || c)
              .join("\n")
          : "Sorry, I didn’t understand that.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: replyContent },
      ]);
      console.log("AI Assistant Response:", replyContent);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops, something went wrong reaching the portfolio assistant.",
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
    <>
      {/* Floating button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1300,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            textAlign: "right",
            bgcolor: "background.paper",
            borderRadius: 0.5,
            boxShadow: 4,
            px: 0.5,
            py: 0.25,
            display: open ? "none" : "block",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "right",
              bgcolor: "transparent",
              px: 1,
              py: 0.25,
              whiteSpace: "pre-line",
            }}
          >
            {`Questions about my resume? \n Ask my AI assistant!`}
          </Typography>
        </Paper>
        <IconButton
          size="large"
          onClick={handleToggle}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            boxShadow: 4,
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
      </Box>

      {/* Chat panel */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: { xs: 320, sm: 360 },
            zIndex: 1300,
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 1.5,
              borderRadius: 1.5,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              maxHeight: 800,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 0.5,
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  AI Portfolio Assistant
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Ask about Nick’s projects & skills
                </Typography>
              </Box>
              <IconButton size="small" onClick={handleToggle}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Messages */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                p: 1,
              }}
            >
              {messages.map((m, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent:
                      m.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      px: 1.25,
                      py: 0.75,
                      my: 0.5,
                      borderRadius: 1,
                      maxWidth: "90%",
                      fontSize: 13,
                      bgcolor:
                        m.role === "user"
                          ? "primary.main"
                          : "background.default",
                      color:
                        m.role === "user"
                          ? "primary.contrastText"
                          : "text.primary",
                      border: m.role === "assistant" ? "1px solid" : "none",
                      borderColor:
                        m.role === "assistant" ? "divider" : "transparent",
                    }}
                  >
                    <Box
                      sx={{
                        // px: 1.25,
                        // py: 0.75,
                        borderRadius: 1,
                        maxWidth: "100%",
                        fontSize: 13,
                        bgcolor:
                          m.role === "user"
                            ? "primary.main"
                            : "background.default",
                        color:
                          m.role === "user"
                            ? "primary.contrastText"
                            : "text.primary",
                        // border: m.role === "assistant" ? "1px solid" : "none",
                        // borderColor:
                        //   m.role === "assistant" ? "divider" : "transparent",
                      }}
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <Typography
                              variant="body2"
                              sx={{ whiteSpace: "pre-wrap" }}
                            >
                              {children}
                            </Typography>
                          ),
                          li: ({ children }) => (
                            <li>
                              <Typography variant="body2" component="span">
                                {children}
                              </Typography>
                            </li>
                          ),
                          code: ({ children }) => (
                            <code
                              style={{
                                backgroundColor: "#333",
                                padding: "2px 4px",
                                borderRadius: 4,
                              }}
                            >
                              {children}
                            </code>
                          ),
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "#64b5f6",
                                textDecoration: "underline",
                              }}
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Input */}
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <TextField
                size="small"
                fullWidth
                placeholder="Ask about a project..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                variant="contained"
                size="small"
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >
                {loading ? "..." : "Send"}
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
