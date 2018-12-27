var focusableElements = [
  "a[href]",
  "area[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])'
];

var keyList = {
  tab: 9,
  escape: 27
};

var breakpoints = {
  na: 0,
  xs: 320, // Smartphone
  sm: 600, // Tablets
  md: 900, // Tablets Landscape and small desktops
  lg: 1200, // Desktops
  xl: 1800 // Large Desktop
};