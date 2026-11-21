const paths = {
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowLeft: "M19 12H5M11 6l-6 6 6 6",
  arrowOut: "M7 17 17 7M9 7h8v8",
  restart: "M4 12a8 8 0 1 0 2.6-5.9M4 4v5h5",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  check: "M5 12.5l4.5 4.5L19 7.5",
  warning: "M12 9v4M12 17h.01M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  flask: "M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.500L14 9V3M7.500 15h9",
  chart: "M4 20V10M10 20V4M16 20v-7M21 20H3",
  route: "M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 8v4a4 4 0 0 0 4 4h6",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  scale: "M12 4v16M7 20h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7ZM19 7l-3 7a3 3 0 0 0 6 0l-3-7Z",
  slides: "M3 5h18v11H3zM8 20h8M12 16v4",
  tools: "M14.500 6.500a4 4 0 0 0 5 5L11 20a2.100 2.100 0 0 1-3-3l8.500-8.500ZM14.500 6.500 17 4l3 3-2.500 2.500",
  help: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9.500 9.500a2.500 2.500 0 1 1 3.500 2.300c-.7.4-1 1-1 1.700M12 17h.01",
  chevron: "M6 9l6 6 6-6",
  cube: "M12 3 4 7.500v9L12 21l8-4.500v-9L12 3ZM4 7.500l8 4.500 8-4.500M12 12v9",
  list: "M9 6h11M9 12h11M9 18h11M4.500 6h.01M4.500 12h.01M4.500 18h.01",
  plus: "M12 5v14M5 12h14",
  sparkle: "M12 3l1.900 4.900L19 9.800l-5.100 1.900L12 16.600l-1.900-4.900L5 9.800l5.100-1.900L12 3ZM18 15l.700 1.800L20.500 17.500l-1.800.700L18 20l-.700-1.800-1.800-.700 1.800-.700L18 15Z",
  dna: "M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M7 21c0-2 10-2 10 0M8.500 7h7M8.500 17h7",
  atom: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 20c4.4 0 8-3.6 8-8s-3.600-8-8-8-8 3.600-8 8 3.600 8 8 8ZM5 5c3 3 11 11 14 14M19 5C16 8 8 16 5 19",
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17.500l9 5 9-5",
  microscope: "M6 20h12M9 20V9h4v11M13 12h3a3 3 0 0 1 3 3v2M9 5h4M11 5V3",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM16 16l5 5",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
