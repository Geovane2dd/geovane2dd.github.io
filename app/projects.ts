export type Project = {
  name: string;
  year: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Ajazzy",
    year: "2026",
    summary:
      "Linux driver for Ajazz mice, whose configuration software only runs on Windows. The USB HID protocol was reverse-engineered from packet captures to control DPI, RGB and macros natively.",
    stack: ["C", "libusb", "USB HID", "Wireshark"],
    repo: "https://github.com/Geovane2dd/Ajazzy",
  },
  {
    name: "asmttp",
    year: "2026",
    summary:
      "Static file server written entirely in x86-64 assembly. No libc and no runtime: raw Linux syscalls and zero-copy sendfile.",
    stack: ["x86-64 assembly", "Linux", "sendfile(2)"],
    repo: "https://github.com/Geovane2dd/asmttp",
    demo: "https://asmttp.geovanedd.com",
  },
  {
    name: "LinkPure",
    year: "2025",
    summary:
      "Removes tracking parameters and affiliate tokens from shopping URLs. Runs without client-side dependencies.",
    stack: ["TypeScript", "Next.js"],
    repo: "https://github.com/geovane2dd/LinkPure",
    demo: "https://linkpure.geovanedd.com",
  },
  {
    name: "B3 API",
    year: "2024",
    summary:
      "REST API exposing current and historical data from the Brazilian stock exchange for developers and financial applications.",
    stack: ["Node.js", "REST"],
    repo: "https://github.com/geovane2dd/B3API",
  },
  {
    name: "Little Dolly",
    year: "2024",
    summary: "Website for the band Little Dolly, built for promoting their music.",
    stack: ["React", "Tailwind CSS"],
    repo: "https://github.com/bandalittledolly/Website",
  },
  {
    name: "FlexTux Bot",
    year: "2023",
    summary:
      "Discord bot with economy, moderation and utility modules, made for busy servers.",
    stack: ["Node.js", "Discord.js"],
    repo: "https://github.com/geovane2dd/FlexTux",
  },
];

export const skills = [
  { area: "Systems", items: "x86-64 assembly, C, Linux, USB protocols" },
  { area: "Web", items: "TypeScript, React, Next.js, Tailwind CSS" },
  { area: "Backend", items: "Node.js, REST APIs, Docker" },
  { area: "Practice", items: "Self-hosting, privacy-first design, open source" },
];
