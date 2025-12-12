"use client";

import { FC } from "react";
import {
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { projectIds } from "@/app/components/resume-sections/Projects";

type Section = {
  id: string; // must match the DOM element id
  label: string;
  subsections?: Section[];
};

interface FloatingTocProps {
  offset?: number; // navbar height offset (px)
}

const sections: Section[] = [
  {
    id: "contact",
    label: "Contact",
  },
  {
    id: "professional-profile",
    label: "Professional Profile",
  },
  {
    id: "technical-skills",
    label: "Technical Skills",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "projects",
    label: "Projects",
    subsections: projectIds.map((p) => ({
      id: p.id,
      label: p.title,
    })),
  },
];

export const FloatingTOC: FC<FloatingTocProps> = ({ offset = 64 }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    const targetY = rect.top + scrollTop - 18 - offset; // extra 18px padding

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: offset,
        left: 0, // flush with left side of screen
        zIndex: 1200,
        width: 240,
        display: { xs: "none", md: "block" },
        height: `calc(100vh - ${offset}px)`, // full height minus navbar
      }}
    >
      <Paper
        elevation={4}
        square
        sx={{
          height: "100%",
          overflowY: "auto",
          width: 240,
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            mt: 2,
            mx: 2,
            display: "block",
            borderBottom: 1,
            borderColor: "divider",
            pb: 1.5,
          }}
        >
          Table of Contents
        </Typography>

        <List dense disablePadding>
          {sections.map((section) => (
            <Box key={section.id} sx={{ mb: 0.5 }}>
              {/* Top-level section */}
              <ListItemButton
                onClick={() => handleScrollTo(section.id)}
                sx={{
                  mb: section.subsections?.length ? 0.25 : 0,
                }}
              >
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { fontSize: 13 },
                    ml: 1,
                  }}
                />
              </ListItemButton>

              {/* Subsections (e.g., individual projects) */}
              {section.subsections?.map((sub) => (
                <ListItemButton
                  key={sub.id}
                  onClick={() => handleScrollTo(sub.id)}
                  sx={{
                    mb: 0.25,
                    pl: 4, // indent to show hierarchy
                  }}
                >
                  <ListItemText
                    primary={sub.label}
                    primaryTypographyProps={{
                      variant: "caption",
                      sx: { fontSize: 12, color: "text.secondary" },
                    }}
                  />
                </ListItemButton>
              ))}
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
};
