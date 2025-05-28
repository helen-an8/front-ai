// tools card
const SaveTools = document.querySelector(".parent_web");
const tool = [
  {
    id: 1,
    link: "https://www.remove.bg/",
    icon: `<div class="bg-remove bg-warning"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m23.976 10.89l19.23 9.637l-19.23 9.698l-19.257-9.698z" stroke-width="1"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.2 23.287L4.94 26.13c-.361.31-.779.916 0 1.282l19.035 9.7l18.95-9.421c.571-.28.836-1.2.224-1.617l-5.342-2.824" stroke-width="1"/></svg></div>`,
    name: "REMOVE BG",
    info: "Erase image background accurately and in a short time",
    category: "image",
  },
  {
    id: 2,
    link: "https://cssgrid-generator.netlify.app/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#e1e1e1" d="M4 10h4v4H4zm0 9v-3h4v3zm6 0v-3h4v3zm6 0v-3h4v3zm0-5v-4h4v4zm0-6V5h4v3zm-2-3v3h-4V5zm0 5v4h-4v-4zM4 8V5h4v3zM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/></svg>`,
    name: "CSS GRID GENERATOR",
    info: "Helps build quick planning and better organization faster",
    category: "css",
  },
  {
    id: 3,
    link: "https://fontawesome.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512"><path fill="#00a3f2" d="M91.7 96c14.6-9.2 24.3-25.5 24.3-44c0-28.7-23.3-52-52-52S12 23.3 12 52c0 16.7 7.8 31.5 20 41v419h64v-64h373.6c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4z"/></svg>`,
    name: "FONT AWESOME",
    info: "It contains thousands of free icons that add beauty to the site",
    category: "icon",
  },
  {
    id: 4,
    link: "https://www.pinterest.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#f90000" d="M11.935 2.375a9.625 9.625 0 0 0-3.507 18.563a9.1 9.1 0 0 1 0-2.75l1.135-4.813A3.5 3.5 0 0 1 9.3 12c0-1.334.777-2.338 1.74-2.338a1.21 1.21 0 0 1 1.217 1.375c0 .532-.218 1.236-.446 1.974c-.125.407-.254.825-.352 1.23a1.375 1.375 0 0 0 1.43 1.74c1.705 0 3.025-1.809 3.025-4.407a3.804 3.804 0 0 0-4.022-3.919a4.166 4.166 0 0 0-4.345 4.18a3.73 3.73 0 0 0 .688 2.193a.3.3 0 0 1 .068.275c-.075.303-.24.963-.268 1.093c-.027.13-.144.213-.323.13c-1.203-.563-1.952-2.316-1.952-3.732c0-3.032 2.207-5.823 6.36-5.823c3.333 0 5.932 2.378 5.932 5.562c0 3.313-2.062 5.98-4.998 5.98a2.59 2.59 0 0 1-2.207-1.1l-.598 2.29a10.7 10.7 0 0 1-1.196 2.523a9.7 9.7 0 0 0 2.88.399a9.625 9.625 0 0 0 0-19.25"/></svg>`,
    name: "PINTEREST",
    info: "It contains thousands of images that help build the site",
    category: "image",
  },
  {
    id: 5,
    link: "https://bennettfeely.com/clippy/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100"><circle cx="70" cy="30" r="15" fill="#4285F4" /><circle cx="20" cy="40" r="15" fill="#F44336" /><circle cx="80" cy="70" r="15" fill="#34A853" /><circle cx="30" cy="80" r="15" fill="#FBBC05" /></svg>`,
    name: "CLIP PATH CSS",
    info: "It helps organize the borders and makes the work easier and less complicated",
    category: "image",
  },
  {
    id: 6,
    link: "https://uiverse.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100" ><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#4A00E0;stop-opacity:1" /><stop offset="100%" style="stop-color:#8E2DE2;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="black" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"font-family="Arial" font-size="36" fill="url(#grad)">UI</text> <rect x="25" y="65" width="50" height="5" fill="url(#grad)" /></svg>`,
    name: "UIVERSE",
    info: "Thousands of free front-end designs are ready to be used and provide ideas",
    category: "template",
  },
  {
    id: 7,
    link: "http://coolors.co/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#00fbf2" d="M7.08 11.25A4.84 4.84 0 0 1 8 9.05L4.43 5.49A9.88 9.88 0 0 0 2 11.25zM9.05 8a4.84 4.84 0 0 1 2.2-.91V2a9.88 9.88 0 0 0-5.76 2.43zm3.7-6v5A4.84 4.84 0 0 1 15 8l3.56-3.56A9.88 9.88 0 0 0 12.75 2M8 15a4.84 4.84 0 0 1-.91-2.2H2a9.88 9.88 0 0 0 2.39 5.76zm3.25 1.92a4.84 4.84 0 0 1-2.2-.92l-3.56 3.57A9.88 9.88 0 0 0 11.25 22zM16 9.05a4.84 4.84 0 0 1 .91 2.2h5a9.88 9.88 0 0 0-2.39-5.76zM15 16a4.84 4.84 0 0 1-2.2.91v5a9.88 9.88 0 0 0 5.76-2.39zm1.92-3.25A4.84 4.84 0 0 1 16 15l3.56 3.56A9.88 9.88 0 0 0 22 12.75z"/></svg>`,
    name: "COLORS",
    info: "Generates harmonious colors for your site and makes color selection easy",
    category: "color",
  },
  {
    id: 8,
    link: "https://cssgradient.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#3de139" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 13a3 3 0 1 1 3-3a3 3 0 0 1-3 3m2.75-7.17A5 5 0 0 0 13 7.1v-3a7.94 7.94 0 0 1 3.9 1.62zM11 7.1a5 5 0 0 0-1.75.73L7.1 5.69A7.94 7.94 0 0 1 11 4.07zM7.83 9.25A5 5 0 0 0 7.1 11h-3a7.94 7.94 0 0 1 1.59-3.9zM7.1 13a5 5 0 0 0 .73 1.75L5.69 16.9A7.94 7.94 0 0 1 4.07 13zm2.15 3.17a5 5 0 0 0 1.75.73v3a7.94 7.94 0 0 1-3.9-1.62zm3.75.73a5 5 0 0 0 1.75-.73l2.15 2.14a7.94 7.94 0 0 1-3.9 1.62zm3.17-2.15A5 5 0 0 0 16.9 13h3a7.94 7.94 0 0 1-1.62 3.9zM16.9 11a5 5 0 0 0-.73-1.75l2.14-2.15a7.94 7.94 0 0 1 1.62 3.9z"/></svg>`,
    name: "CSS GRADIENT",
    info: "It generates beautiful color gradients and gives a beautiful blend of colors",
    category: "color",
  },
  {
    id: 9,
    link: "https://fonts.google.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#f04e86" stroke-linecap="round" stroke-linejoin="round" d="M6.57 40.134C8.358 29.57 12.686 5.907 16.727 5.504s5.83 36.996 5.83 36.996" stroke-width="1.4"/><path fill="none" stroke="#f04e86" stroke-linecap="round" stroke-linejoin="round" d="M6.57 23.684c4.674-2.135 18.93-6.464 24.356-6.464m3.487 7.162c-3.198-4.796-7.008-2.198-7.18 2.65c-.174 4.848 4.682 4.668 6.471 1.263" stroke-width="1.4"/><path fill="none" stroke="#f04e86" stroke-linecap="round" stroke-linejoin="round" d="M35.024 21.837c-1.154 4.329-3.348 15.238.52 15.988s5.887-7.994 5.887-7.994M40.215 13.12a1.219 1.219 0 0 0-1.958-1.293a1.217 1.217 0 0 0-2.402.342c.027 1.226 1.327 2.983 1.327 2.983s2.082-.663 2.821-1.642q.14-.17.212-.39" stroke-width="1.4"/></svg>`,
    name: "GOOGLE FONTS",
    info: "It contains many fonts in all languages ​​that give beauty to the site",
    category: "library",
  },
  {
    id: 10,
    link: "https://www.free-css.com/free-css-templates?spm=a2ty_o01.29997173.0.0.8168c921jm2TNw",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#828282" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 9h10.5v3.5H4zm0 5.5h10.5V18H5c-.55 0-1-.45-1-1zM19 18h-2.5V9H20v8c0 .55-.45 1-1 1"/></svg>`,
    name: "WEP TEMPLATS",
    info: "Provides ready-made HTML, CSS, and Bootstrap websites with a modern design",
    category: "template",
  },
  {
    id: 11,
    link: "https://iconify.design/?spm=a2ty_o01.29997173.0.0.4abbc921LLlDcG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><mask id="lineMdIconify2Static0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-width="1.3" d="M3.25 22.25h17.5"/><path d="M7 3v3M5 8v11h14v-11"/><path stroke="#000" stroke-width="4" d="M12 16v4.5M12 3l8.5 5.5"/><path d="M12 3l8.5 5.5"/><path stroke="#000" stroke-width="4" d="M12 3l-8.5 5.5"/><path d="M12 3l-8.5 5.5M12 11.5v9"/></g><circle cx="12" cy="11.5" r="3.5"/><circle cx="12" cy="11.5" r="1.5" fill="#fff"/></mask><rect width="24" height="24" fill="#828282" mask="url(#lineMdIconify2Static0)"/></svg>`,
    name: "ICONIFY",
    info: "Contains thousands of icons in svg css URL PNG Components formatt",
    category: "icon",
  },
  {
    id: 12,
    link: "https://haikei.app/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="60" height="60"><circle cx="120" cy="80" r="60" fill="#f7931e"/> <circle cx="80" cy="120" r="60" fill="#ec0c6c"/> <!-- الحرف B --> <text x="85" y="135" font-size="80" font-weight="bold" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif"> B </text> </svg>`,
    name: "HAIKEI",
    info: "Create SVG elements to enhance user interfaces aesthetically",
    category: "css",
  },
  {
    id: 13,
    link: "https://nekocalc.com/px-to-rem-converter",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="none" stroke="#0301ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M4 8h2m-2 4h3m-3 4h2M8 4v2m4-2v3m4-3v2"/></svg>`,
    name: "NEKOCALC",
    info: "Calculates CSS units and converts them from px to rem, making work easier",
    category:"css"
  },
  {
    id: 14,
    link: "https://favicon.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 60 60" width="60" height="60"><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7a5cff"/><stop offset="100%" stop-color="#634bff"/></linearGradient></defs><g transform="rotate(-10 30 30)"><rect x="5" y="5" width="50" height="50" rx="10" fill="url(#grad)"/></g><g transform="rotate(-10 30 30)"><text x="30" y="34"font-size="32"font-weight="900"font-family="'Inter', 'Poppins', sans-serif"fill="#ffffff"text-anchor="middle"dominant-baseline="middle">F</text></g></svg>`,
    name: "FAVICON",
    info: "Creates favicon icon in all sizes and gives you link with image in zip format",
    category: "icon",
  },
  {
    id: 15,
    link: "http://smoothshadows.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 15 15"><g fill="#fff" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.783 13.376c1.956-3.423 1.956-8.329 0-11.752l.434-.248c2.044 3.577 2.044 8.671 0 12.248z" opacity="0.05"/><path d="M7.282 13.478c1.957-3.483 1.957-8.473 0-11.956l.436-.244c2.043 3.634 2.043 8.81 0 12.445z" opacity="0.1"/><path d="M7.821 13.506c1.904-3.51 1.905-8.492.004-12.005l.44-.238c1.981 3.662 1.98 8.822-.004 12.482z" opacity="0.15"/><path d="M8.413 13.429c1.782-3.5 1.783-8.354.001-11.855l.446-.227c1.854 3.644 1.853 8.666-.002 12.309z" opacity="0.2"/><path d="M9.024 13.296c1.633-3.458 1.635-8.119.006-11.58l.452-.212c1.693 3.595 1.69 8.412-.005 12.005z" opacity="0.25"/><path d="M9.668 13.066c1.442-3.37 1.443-7.754.003-11.125l.46-.196c1.493 3.496 1.492 8.022-.003 11.517z" opacity="0.3"/><path d="M10.331 12.746c1.224-3.225 1.225-7.255.004-10.482l.467-.177c1.265 3.341 1.264 7.497-.003 10.836z" opacity="0.35"/><path d="M11.016 12.299c.978-3.002.979-6.586.002-9.588l.476-.155c1.009 3.103 1.008 6.796-.003 9.898z" opacity="0.4"/><path d="M11.721 11.668c.704-2.655.705-5.671.003-8.327l.483-.128c.725 2.74.724 5.844-.002 8.583z" opacity="0.45"/><path d="M12.443 10.752c.41-2.114.41-4.391 0-6.505l.49-.095a17.9 17.9 0 0 1 .001 6.695z" opacity="0.5"/><path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346"/></g></svg>`,
    name: "SMOOTH SHADOW",
    info: "Create shadows on elements easily and professionally, giving an aesthetic look",
    category :"shadow",
  },
  {
    id: 16,
    link: "https://animista.net/play/basic/scale-down/scale-down-ver-top",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#c3ce00" d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"/></svg>`,
    name: "ANIMISTA",
    info: "Generates ready made and professional CSS animations, which speeds up work",
    category:"css"
  },
  {
    id: 17,
    link: "https://css-loaders.com/classic/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill="white" /><path fill="#000" d="M9.5 3C8.7 3 8 3.7 8 4.5s.5 1.4 1.2 1.7l.3.1c.3.1.5.3.5.6v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7c.1.8.7 1.4 1.5 1.4s1.4-.6 1.5-1.4v-.7c-.1-.7-.5-1.4-1.2-1.6h-.2l-.1-.1c-.3-.1-.5-.4-.5-.7s.2-.5.5-.5c.2 0 .4.2.5.4v.2c.1.2.3.4.5.4c.3 0 .5-.2.5-.5c0-.8-.7-1.5-1.5-1.5M6 3c-.8 0-1.5.7-1.5 1.5S5 5.9 5.7 6.2l.3.1c.3.1.5.3.5.6v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7C4.6 8.4 5.2 9 6 9s1.4-.6 1.5-1.4v-.7c-.1-.7-.5-1.4-1.2-1.6h-.2L6 5.2c-.3-.1-.5-.4-.5-.7S5.7 4 6 4c.2 0 .4.2.5.4v.2c.1.2.3.4.5.4c.3 0 .5-.2.5-.5C7.5 3.7 6.8 3 6 3M2.5 3c-.8 0-1.4.6-1.5 1.4v3.2c.1.8.7 1.4 1.5 1.4S3.9 8.4 4 7.6v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4V4.4c.1-.2.3-.4.5-.4s.4.2.5.4v.7c.1.2.3.4.5.4s.4-.2.5-.4v-.7C3.9 3.6 3.3 3 2.5 3"/></svg>`,
    name: "CSS LOADERS",
    info: "It contains thousands of downloads with animations that give beauty to the site",
    category : "css",
  },
  {
    id: 18,
    link: "https://www.chartjs.org/docs/latest/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16"><path fill="none" stroke="#ff3e80" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m4.75 11.25l2.5-4.5l2.5 2.5l3.5-6m-11.5-1.5v12.5h12.5"/></svg>`,
    name: "CHART JS",
    info: "A JavaScript library that generates interactive statistical charts using pre-made code",
    category : "library",
  },
  {
    id: 19,
    link: "https://html-css-js.com/css/generator/text-shadow/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#717171" d="M3 3h13v3h-5v12H8V6H3zm9 4h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/></svg>`,
    name: "TEXT SHADOW",
    info: "Text shadow designs are quick and ready to use and the shadow can be easily modified",
    category : "shadow",
  },
  {
    id: 20,
    link: "https://www.w3schools.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#02c82b" d="M20.228 5.464s.605.648 1.45.648c.666 0 1.151-.403 1.151-.955c0-.677-.619-.989-1.368-.989h-.441l-.264-.595l1.17-1.387c.25-.298.462-.485.462-.485s-.188.01-.567.01h-1.905V.713h3.902v.73L22.253 3.25c.883.125 1.747.754 1.747 1.862c0 1.09-.825 2.098-2.25 2.098c-1.359 0-2.112-.855-2.112-.855l.59-.892zm-7.611 1.348l5.154 9.176l2.543-4.535l-4.866-8.662H9.785L7.438 6.97L5.092 2.79H0l7.41 13.197l.028-.048l.03.048l5.149-9.176zM.053 22.208h.753c0 .22.192.431.533.431c.317 0 .528-.158.528-.37c0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994c0-.504.5-.964 1.205-.964c.576 0 1.228.293 1.219 1.012H1.8c0-.22-.202-.36-.432-.36c-.25 0-.423.144-.423.346c0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94c0 .657-.658 1.017-1.316 1.017c-.638 0-1.286-.388-1.3-1.08zm3.282-.624c0-1.027.826-1.7 1.762-1.7c.561 0 1.017.25 1.315.625l-.567.45a.96.96 0 0 0-.734-.326c-.561 0-.965.404-.965.95c0 .543.404.956.965.956a.96.96 0 0 0 .734-.327l.567.451a1.65 1.65 0 0 1-1.315.624c-.936 0-1.762-.676-1.762-1.703m6.954-.197V23.2h-.806v-1.756c0-.519-.312-.797-.672-.797c-.37 0-.825.216-.825.845v1.713h-.807v-5h.811v2.25c.159-.394.682-.576 1.003-.576c.835.005 1.296.566 1.296 1.507zm.845.197c0-1.027.796-1.7 1.718-1.7s1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.922 0-1.718-.676-1.718-1.703m2.634 0c0-.557-.417-.95-.916-.95s-.907.393-.907.95c0 .566.408.955.907.955s.916-.39.916-.955m1.498 0c0-1.027.796-1.7 1.718-1.7s1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.917 0-1.718-.676-1.718-1.703m2.634 0c0-.557-.417-.95-.916-.95s-.907.393-.907.95c0 .566.408.955.907.955c.504 0 .916-.39.916-.955m1.704 1.622v-5h.806v5zm1.685-.998h.753c0 .22.192.431.533.431c.316 0 .528-.158.528-.37c0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994c0-.504.499-.964 1.205-.964c.575 0 1.228.293 1.219 1.012h-.768c0-.22-.202-.36-.432-.36c-.25 0-.423.144-.423.346c0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94c0 .657-.658 1.017-1.316 1.017c-.638 0-1.281-.388-1.295-1.08z"/></svg>`,
    name: "W3 SCHOOLS",
    info: "Provides a study plan for all programming languages ​​with questions",
    category : "library",
  },
  {
    id: 21,
    link: "https://app.uizard.io/",
    icon: `<div class="bg-remove bg-warning d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M23.163 0h-1.488v1.488h1.488zm-5.207 10.423V7.44h2.976v2.977h2.975v.943c0 1.091-.092 2.383-.306 3.398c-.12.567-.3 1.13-.512 1.672a12 12 0 0 1-.741 1.56a11.7 11.7 0 0 1-1.246 1.775l-.025.03l-.042.049c-.115.134-.228.268-.353.398a12 12 0 0 1-.45.449a11.83 11.83 0 0 1-6.98 3.243A16 16 0 0 1 12 24c-.314-.001-.94-.033-1.252-.065a11.84 11.84 0 0 1-6.98-3.243a12 12 0 0 1-.45-.45a8 8 0 0 1-.368-.415h-.001l-.051-.06a11.7 11.7 0 0 1-1.246-1.777a12 12 0 0 1-.74-1.56a10.6 10.6 0 0 1-.513-1.671c-.214-1.016-.306-2.307-.306-3.397V.186h5.952v10.237s0 .784.01 1.041l.002.06c.012.332.024.658.059.982c.098.919.301 1.79.72 2.528c.122.213.245.42.392.616a6 6 0 0 0 3.957 2.34c.202.03.61.055.815.055s.613-.025.815-.055a6 6 0 0 0 3.957-2.34c.148-.196.27-.403.392-.616c.419-.737.622-1.61.72-2.528c.035-.325.047-.65.06-.983l.002-.059c.01-.257.01-1.041.01-1.041m.742-8.19h2.233v2.231h2.976v2.977h-2.976V4.465h-2.233z"/></svg></div>`,
    name: "UIZARD",
    info: "Automatically generate UI designs and convert graphics and text to code",
    category : "ai",
  },
  {
    id: 22,
    link: "https://www.khroma.co/train",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#666" d="M6.375 23.999c-.95 0-1.95-.749-1.95-2.2v-3.4c0-1.349.85-2.899 2.05-3.548l4.75-2.8l-4.75-2.8C5.325 8.5 4.425 7 4.425 5.65V2.2c0-1.45 1-2.2 2.002-2.2c.4 0 .849.1 1.249.35l10.7 6.35c.75.45 1.15 1.149 1.15 1.849c0 .75-.452 1.45-1.15 1.85l-2.55 1.5l2.55 1.501c.75.45 1.2 1.15 1.2 1.85c0 .75-.452 1.45-1.2 1.85L7.674 23.65c-.45.25-.85.35-1.3.35zm7.15-10.599l-5.85 3.45c-.45.25-.9 1.05-.9 1.55v3.05l10.15-6zM6.775 2.6v3.05c0 .5.45 1.3.9 1.55l5.85 3.45l3.45-2.05z"/></svg>`,
    name: "KHROMA",
    info: "Generate colors in a professional and modern way and display them",
    category : "color",
  },
  {
    id: 23,
    link: "https://chatgpt.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" color="#fff"><path d="M11.745 14.85L6.905 12V7c0-2.21 1.825-4 4.076-4c1.397 0 2.63.69 3.365 1.741"/><path d="M9.6 19.18A4.1 4.1 0 0 0 13.02 21c2.25 0 4.076-1.79 4.076-4v-5L12.16 9.097"/><path d="M9.452 13.5V7.67l4.412-2.5c1.95-1.105 4.443-.45 5.569 1.463a3.93 3.93 0 0 1 .076 3.866"/><path d="M4.49 13.5a3.93 3.93 0 0 0 .075 3.866c1.126 1.913 3.62 2.568 5.57 1.464l4.412-2.5l.096-5.596"/><path d="M17.096 17.63a4.09 4.09 0 0 0 3.357-1.996c1.125-1.913.457-4.36-1.492-5.464l-4.413-2.5l-5.059 2.755"/><path d="M6.905 6.37a4.09 4.09 0 0 0-3.358 1.996c-1.126 1.913-.458 4.36 1.492 5.464l4.413 2.5l5.048-2.75"/></g></svg>`,
    name: "CHAT GPT",
    info: "Smart assistant that helps solve software problems accurately",
    category : "ai",
  },
  {
    id: 24,
    link: "https://www.shapedivider.app/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#00e7ee" d="M12.045.033a12.181 12.182 0 0 0-1.361.078a17.512 17.513 0 0 1 1.813 1.433l.48.438l-.465.45a15 15 0 0 0-1.126 1.205l-.178.215a9 9 0 0 1 .86-.05a8.154 8.155 0 1 1-4.286 15.149a15.764 15.765 0 0 1-1.841.106h-.86a22 22 0 0 0 .264 2.866a11.966 11.967 0 1 0 6.7-21.89M8.17.678a12.181 12.182 0 0 0-2.624 1.275a16 16 0 0 1 1.813.43A18.551 18.552 0 0 1 8.17.678M9.423.75a16.237 16.238 0 0 0-.995 1.998a16.15 16.152 0 0 1 1.605.66a7 7 0 0 1 .43-.509q.35-.43.716-.817A15 15 0 0 0 9.423.75M4.68 2.949a14.969 14.97 0 0 0 0 2.336c.587-.065 1.196-.1 1.812-.107a17 17 0 0 1 .48-1.748a16.48 16.481 0 0 0-2.292-.481M3.62 3.5a12 12 0 0 0-1.858 2.38a17 17 0 0 1 1.877-.444A17 17 0 0 1 3.62 3.5m4.406.287c-.143.437-.265.888-.38 1.347a8.3 8.3 0 0 1 1.67-.803c-.423-.2-.845-.38-1.29-.544M6.3 6.216a14 14 0 0 0-1.555.108c.064.523.157 1.038.272 1.554A8.4 8.4 0 0 1 6.3 6.216m-2.55.137a15.3 15.3 0 0 0-2.602.716H1.07v.079a17.104 17.105 0 0 0 1.267 2.544l.043.071l.072-.049a16 16 0 0 1 1.734-1.083l.057-.035V8.54a17 17 0 0 1-.408-2.094v-.092zM.644 8.095l-.063.2A11.844 11.845 0 0 0 0 11.655v.209l.143-.152a17.706 17.707 0 0 1 1.584-1.447l.057-.043l-.043-.064a16 16 0 0 1-1.025-1.87zm3.77 1.253l-.18.1c-.465.273-.93.573-1.375.889l-.065.05l.05.064c.309.437.645.867.996 1.276l.137.165v-.208a8.2 8.2 0 0 1 .364-2.15zM2.2 10.853l-.072.05a16.6 16.6 0 0 0-1.813 1.734l-.058.058l.066.057a15.5 15.5 0 0 0 1.991 1.483l.072.05l.043-.08a16.738 16.74 0 0 1 1.053-1.64v-.05l-.043-.05a17 17 0 0 1-1.19-1.54zm1.855 2.071l-.121.172a15 15 0 0 0-.917 1.433l-.043.072l.071.043a17 17 0 0 0 1.562.766l.193.086l-.086-.193a8 8 0 0 1-.66-2.172zm-3.976.48v.2a11.758 11.759 0 0 0 .946 3.326l.078.186l.072-.194a16.215 16.216 0 0 1 .845-2l.057-.063l-.064-.043a17.197 17.198 0 0 1-1.776-1.284zm2.543 1.805l-.035.08a15.764 15.765 0 0 0-.983 2.479v.08h.086a16.15 16.152 0 0 0 2.688.5l.072.007v-.086a18 18 0 0 1 .164-2.056v-.065H4.55a16 16 0 0 1-1.849-.896zm2.544 1.169v.114a17 17 0 0 0-.151 1.828v.078h.931c.287 0 .624.014.946 0h.209l-.166-.129a8 8 0 0 1-1.64-1.834zm-3.29 2.1l.115.172a12 12 0 0 0 2.502 2.737l.157.129v-.201a22.578 22.58 0 0 1-.2-2.336v-.071h-.072a16 16 0 0 1-2.3-.387z"/></svg>`,
    name: "SHEP DIVIDER",
    info: "To add attractive separators between the site sections with the code",
    category:"css"
  },
  {
    id: 25,
    link: "https://looka.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256"><path fill="#0062ee" d="m235.34 116.72l-96.06-96.06a16 16 0 0 0-22.56 0l-96.06 96.06a16 16 0 0 0 0 22.56l96.06 96.06a16 16 0 0 0 22.56 0l96.06-96.06a16 16 0 0 0 0-22.56M128 32l56 56h-24a8 8 0 0 0-5.66 2.34L128 116.68l-26.34-26.34A8 8 0 0 0 96 88H72Zm-72 72h36.68l24 24l-24 24H56l-24-24Zm72 120l-56-56h24a8 8 0 0 0 5.66-2.34L128 139.31l26.34 26.35A8 8 0 0 0 160 168h24Zm72-72h-36.68l-24-24l24-24H200l24 24Z"/></svg>`,
    name: "LOOKA",
    info: "Generates a logo, making it easy to find the logo that suits your site",
    category:"ai"
  },
  {
    id: 26,
    link: "https://pagespeed.web.dev/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><mask id="lineMdSpeedLoop0"><path fill="none" stroke="#fff" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/></path><g transform="rotate(-100 12 14)"><path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"/></path><path fill="#fff" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"/></path><animateTransform attributeName="transform" begin="0.4s" dur="6s" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"/></g></mask><rect width="24" height="24" fill="#ee0042" mask="url(#lineMdSpeedLoop0)"/></svg>`,
    name: "PAGE SPEED",
    info: "Evaluates the speed of any website you submit to and its SEO reach",
    category:"ai"
  },
  {
    id: 27,
    link: "https://www.gulfpicasso.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#8300f0" d="M8.813 11.612c.457-.38.918-.38 1.386.011l.108.098l4.986 4.986l.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L15.415 14l.292-.293l.106-.095c.457-.38.918-.38 1.386.011l.108.098l4.674 4.675a4 4 0 0 1-3.775 3.599L18 22H6a4 4 0 0 1-3.98-3.603l6.687-6.69zM18 2a4 4 0 0 1 3.995 3.8L22 6v9.585l-3.293-3.292l-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14l-.307.306l-2.293-2.292l-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 15.585V6a4 4 0 0 1 3.8-3.995L6 2zm-2.99 5l-.127.007a1 1 0 0 0 0 1.986L15 9l.127-.007a1 1 0 0 0 0-1.986z"/></svg>`,
    name: "PICASSO GULF",
    info: "Generates images by describing the image with high accuracy and fine details",
    category:"ai"
  },
  {
    id: 28,
    link: "https://www.usegalileo.ai/create",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fff" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0m0 1.144c5.995 0 10.856 4.86 10.856 10.856S17.996 22.856 12 22.856S1.144 17.996 1.144 12S6.004 1.144 12 1.144M8.37 5.868a7 7 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472c-.115.665-.096 1.348-.143 2.017q-.018.526-.115 1.038c-.134.609-.397.798-1.016.83a3 3 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629c.033.429-.013.858.015 1.287c.018.406.073.808.156 1.2c.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0c-.43-.013-.591-.12-.632-.535c-.056-.535-.042-1.08-.075-1.62c-.064-1.001-.175-1.988-1.153-2.625c.503-.37.868-.812.983-1.398c.083-.41.134-.821.166-1.237c.028-.415-.023-.84.014-1.25c.06-.665.102-.937.9-.91c.12 0 .235-.017.369-.027v-1.31q-.239-.001-.454-.006m7.593.009a4.3 4.3 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005c.328.004.577.13.61.494c.032.332.031.669.064 1.006c.065.669.101 1.347.217 2.007c.102.544.475.95.941 1.283c-.817.549-1.057 1.333-1.098 2.215c-.023.604-.037 1.213-.069 1.822c-.028.554-.222.734-.78.748c-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0c.932-.055 1.495-.507 1.68-1.412q.117-.748.138-1.504c.032-.461.028-.927.074-1.384c.069-.715.397-1.01 1.112-1.057a1 1 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032c-.536-.023-.804-.203-.937-.71a5 5 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86c-.08-1.192-.794-1.753-1.887-1.786m-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.81.81 0 0 0-.834.78c0 .027 0 .05.004.078c0 .503.342.826.859.826c.507 0 .826-.332.826-.853c-.005-.503-.342-.836-.855-.831m2.963 0a.86.86 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83c.023-.457-.392-.854-.863-.854"/></svg>`,
    name: "GALILEO AL",
    info: "Generate a professional website with code or Figma",
    category:"ai"
  },
  {
    id: 29,
    link: "https://www.happyhues.co/",
    icon: `<div class="bg-remove bg-danger d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 20"><path fill="#312f2f" d="M7 5.2a2 2 0 0 1 2 2c0 .37-.11.71-.28 1C8.72 8.2 8 8 7 8s-1.72.2-1.72.2c-.17-.29-.28-.63-.28-1a2 2 0 0 1 2-2m6 0c1.11 0 2 .89 2 2c0 .37-.11.71-.28 1c0 0-.72-.2-1.72-.2s-1.72.2-1.72.2c-.17-.29-.28-.63-.28-1c0-1.11.89-2 2-2m-3 13.7a8.69 8.69 0 0 0 8.23-5.88l-1.32-.46C15.9 15.52 13.12 17.5 10 17.5s-5.9-1.98-6.91-4.94l-1.32.46A8.69 8.69 0 0 0 10 18.9"/></svg></div>`,
    name: "HAPPY HUES",
    info: "Generates a ready-made, consistent color scheme that can be used on the web",
    category:"color"
  },
  {
    id: 30,
    link: "https://freefrontend.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fff" d="M19.536 0H4.464A4.463 4.463 0 0 0 0 4.464v15.073A4.463 4.463 0 0 0 4.464 24h15.073A4.463 4.463 0 0 0 24 19.536V4.464A4.463 4.463 0 0 0 19.536 0m1.193 6.493v3.871l-.922-.005c-.507-.003-.981-.021-1.052-.041c-.128-.036-.131-.05-.192-.839c-.079-1.013-.143-1.462-.306-2.136c-.352-1.457-1.096-2.25-2.309-2.463c-.509-.089-2.731-.176-4.558-.177L10.13 4.7v5.82l.662-.033c.757-.038 1.353-.129 1.64-.252c.306-.131.629-.462.781-.799c.158-.352.262-.815.345-1.542c.033-.286.07-.572.083-.636c.024-.116.028-.117 1.036-.117h1.012v9.3h-2.062l-.035-.536c-.063-.971-.252-1.891-.479-2.331c-.311-.601-.922-.871-2.151-.95a11 11 0 0 1-.666-.059l-.172-.027l.02 2.926c.021 3.086.03 3.206.265 3.465c.241.266.381.284 2.827.368c.05.002.065.246.065 1.041v1.039H3.271v-1.039c0-.954.007-1.039.091-1.041c.05-.001.543-.023 1.097-.049c.891-.042 1.033-.061 1.244-.167a.7.7 0 0 0 .345-.328c.106-.206.107-.254.107-6.78c0-6.133-.006-6.584-.09-6.737a.94.94 0 0 0-.553-.436c-.104-.032-.65-.07-1.215-.086l-1.026-.027V2.622h17.458z"/></svg>`,
    name: "FREE FRONT-END",
    info: "Contains elements that facilitate design with their code",
    category:"template"
  },
  {
    id: 31,
    link: "https://www.webcrumbs.ai/",
    icon: `<svg class="ms-4" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 24 25"><g transform="skewX(-10)"><path fill="#db0707" d="m14.72 5.6l-2.24 8.68l-2.12-8.68H7.47l-2.12 8.68L3.11 5.6H0l4.01 12.65h2.74l2.17-8.18l2.16 8.18h2.74L17.83 5.6z"/></g></svg>`,
    name: "WEBCRUMBS",
    info: "Create UI elements from text description with code",
    category:"ai"
  },
  {
    id: 32,
    link: "https://apexcharts.com/docs/installation/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#0791db" stroke-linecap="round" stroke-linejoin="round" d="m24 20.039l8.714 15.264H26.75l10.33 7.088l5.42-4.378L24 5.609L5.5 38.013l5.42 4.378l10.33-7.088h-5.964z" stroke-width="1.4"/></svg>`,
    name: "APEXCHARTS",
    info: "JS library for creating charts, easier to use and supports all screens",
    category:"library"
  },
  {
    id: 33,
    link: "https://21st.dev/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4" stroke-width="1.4"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m29.596 18.815l3.904-1.939l-2.512 14.248M16.18 21.596c.514-2.913 3.557-5.21 6.473-4.63c1.912.38 3.19 2.092 3.034 4.098c-.116 1.492-.848 2.964-2.038 3.869c-2.205 1.676-9.149 6.191-9.149 6.191h9.44" stroke-width="1.4"/></svg>`,
    name: "21ST DEV",
    info: "Provides ready-made components and templates for React developers",
    category:"template"
  },
  {
    id: 34,
    link: "https://www.unsection.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#04d961" d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM10 8H8l-.117.007a1 1 0 0 0-.876.876L7 9v6l.007.117a1 1 0 0 0 .876.876L8 16l.117-.007a1 1 0 0 0 .876-.876L9 15v-2h1l.117-.007a1 1 0 0 0 0-1.986L10 11H9v-1h1l.117-.007a1 1 0 0 0 0-1.986zm5.994.886c-.083-.777-1.008-1.16-1.617-.67l-.084.077l-2 2l-.083.094a1 1 0 0 0 0 1.226l.083.094l.094.083a1 1 0 0 0 1.226 0l.094-.083l.293-.293V15l.007.117a1 1 0 0 0 1.986 0L16 15V9z"/></svg>`,
    name: "UNSICTION",
    info: "Contains 1,500 inspiration sites with modern designs and an SVG library",
    category:"template"
  },
  {
    id: 35,
    link: "https://readdy.ai/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#f951c0" d="m6.949 19.873l-.008.013a1.48 1.48 0 0 0-.001 1.47l.317.556c.263.464.756.75 1.29.75h.016a1.483 1.483 0 0 0 1.288-2.219l-.325-.57a1.484 1.484 0 0 0-2.577 0m3.49-6.107a1.48 1.48 0 0 0-.001 1.469l3.796 6.676c.264.464.756.75 1.29.75h.016a1.483 1.483 0 0 0 1.288-2.218l-3.812-6.677a1.484 1.484 0 0 0-2.577 0m.328-11.692L.197 20.464a1.466 1.466 0 0 0 1.272 2.198a1.47 1.47 0 0 0 1.273-.74l7.951-13.928a1.466 1.466 0 0 1 2.548.003L21.16 21.92a1.47 1.47 0 0 0 1.274.742h.099a1.466 1.466 0 0 0 1.273-2.193L13.312 2.078a1.466 1.466 0 0 0-2.545-.004"/></svg>`,
    name: "READDY",
    info: "Generates websites from text you write in a professional way ",
    category:"ai"
  },
  {
    id: 36,
    link: "https://rapidapi.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#516ff9" d="M8.308 2.914C10.876.027 15.128-.819 18.624.848c4.644 2.21 6.339 7.846 3.809 12.194l-5.687 9.77a2.4 2.4 0 0 1-1.455 1.107a2.42 2.42 0 0 1-1.818-.236l6.887-11.832c1.835-3.155.608-7.243-2.758-8.854c-2.528-1.208-5.613-.604-7.482 1.473a6.3 6.3 0 0 0-1.628 4.145a6.32 6.32 0 0 0 2.103 4.773l-4.021 6.919c-.157.273-.365.51-.617.699a2.4 2.4 0 0 1-.838.411a2.42 2.42 0 0 1-1.815-.237l4.364-7.513A8.6 8.6 0 0 1 6.34 10.7l-2.675 4.612a2.403 2.403 0 0 1-3.271.87L7.31 4.284c.29-.487.622-.948.998-1.37m7.983 3.784c1.666.956 2.242 3.081 1.277 4.734L10.936 22.81a2.4 2.4 0 0 1-1.455 1.109a2.4 2.4 0 0 1-1.816-.237l6.159-10.596a3.4 3.4 0 0 1-1.365-.61a3.4 3.4 0 0 1-.981-1.122a3.44 3.44 0 0 1-.194-2.898a3.47 3.47 0 0 1 2.097-2.026a3.5 3.5 0 0 1 2.91.268m-2.412 2.139a1.1 1.1 0 0 0-.426.933a1.09 1.09 0 0 0 .739.959a1.1 1.1 0 0 0 1.176-.314a1.08 1.08 0 0 0 .158-1.196a1.09 1.09 0 0 0-.839-.596a1.08 1.08 0 0 0-.808.214"/></svg>`,
    name: "RAPID API",
    info: "API Marketplace that supports NEXT and React and is almost free",
    category:"library"
  },
  {
    id: 37,
    link: "https://api-ninjas.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fff" d="M0 8.646v2.23h8.252v2.248H0v2.23h9.112a.62.62 0 0 0 .489-.201L12 12.819l2.399 2.334a.62.62 0 0 0 .49.201H24v-2.23h-8.252v-2.248H24v-2.23h-9.112a.62.62 0 0 0-.489.201L12 11.181L9.601 8.847a.62.62 0 0 0-.49-.201Z"/></svg>`,
    name: "API NINJAS",
    info: "It has a huge set of APIs and is free with daily limits.",
    category:"library"
  },
  {
    id: 38,
    link: "https://builder.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#000" d="M13.358.004c-.008 0-.175.02-.375.031q-.96.074-1.902.278c-.402.09-1.496.402-1.54.433c-.738.259-1.472.606-2.17.957c-.606.332-1.544.938-1.689 1.094a6 6 0 0 1-.304.242c-.387.309-1.172 1.102-1.528 1.543c-1.203 1.512-1.87 3.145-2.074 5.063c-.066.66 0 2.507.086 2.507c.02 0 .32-.132.684-.304c.191-.086.418-.192.511-.235s.602-.273 1.122-.515c.527-.243 1.046-.48 1.16-.532l.488-.226c.156-.07.297-.13.316-.13s-.007-.081-.058-.183a4.26 4.26 0 0 1-.48-1.996c0-1.152.402-2.246 1.23-3.344a8 8 0 0 1 1.32-1.32c.07-.054.172-.129.227-.176c.34-.261 1.437-.851 1.59-.851q.052 0 .035.066c-.012.04-.09.422-.18.844c-.082.434-.16.816-.172.86c-.008.038-.043.21-.074.378c-.035.168-.066.34-.074.38c-.012.042-.094.464-.192.948c-.093.48-.19.95-.21 1.047c-.02.094-.044.203-.047.246l-.157.801c-.01.043-.113.555-.23 1.14c-.117.587-.219 1.098-.23 1.141l-.153.766a9 9 0 0 1-.074.375q-.064.297-.114.598a1 1 0 0 0-.035.148c-.01.05-.062.3-.113.563c-.055.261-.105.539-.117.609s-.047.234-.074.363q-.04.17-.07.34q-.268 1.35-.544 2.7l-.07.378c-.012.043-.094.469-.195.95l-.207 1.046a4 4 0 0 0-.047.25l-.156.797c-.012.043-.118.559-.235 1.14c-.113.587-.215 1.099-.222 1.134c-.05.23-.286 1.437-.3 1.53l-.02.122l3.546-.012c3.137 0 4.184-.02 4.723-.07l.457-.043c.168-.012.328-.031.363-.035c.035-.008.152-.024.266-.035c.113-.012.351-.051.527-.086c.18-.032.367-.063.414-.07c.047-.012.203-.044.344-.079c.137-.03.273-.062.308-.07c.094-.02.73-.207.817-.242c.043-.02.238-.098.433-.18c1.258-.5 2.297-1.312 3.032-2.371c.136-.195.511-.824.511-.855c0-.012.07-.16.15-.332a7.8 7.8 0 0 0 .64-2.258c.05-.383.02-1.817-.05-1.926a1 1 0 0 1-.036-.191a6.05 6.05 0 0 0-3.172-4.23a6.7 6.7 0 0 0-1.23-.497l-.188-.043l.308-.203q.2-.133.39-.274q.378-.3.734-.625c.525-.535.845-.949 1.17-1.503c.265-.45.546-1.157.624-1.56a.6.6 0 0 1 .032-.14c.093-.265.093-1.61 0-1.761c-.008-.012-.02-.075-.032-.137a4 4 0 0 0-.1-.344c-.415-1.27-1.368-2.328-2.68-2.976C17.55.632 16.78.344 16.525.3a2 2 0 0 1-.265-.059a9 9 0 0 0-.93-.168A11 11 0 0 0 14.03 0c-.368.004-.669-.001-.673.003zm1.645 1.812c.972.254 1.742.891 2.082 1.723c.207.504.254.79.254 1.543c0 .613-.02.89-.114 1.277a4.28 4.28 0 0 1-2.28 2.918c-.22.114-.41.2-.512.235c-.012 0-.047.02-.079.031c-.273.113-1.418.371-1.46.328c-.012-.012.042-.297.11-.644c.07-.344.14-.688.147-.762a2 2 0 0 1 .04-.192a1 1 0 0 0 .034-.191c.012-.078.032-.16.04-.191c.011-.032.027-.114.035-.188c.011-.07.074-.39.136-.703c.067-.316.13-.613.137-.664c.008-.055.09-.48.192-.95c.093-.472.18-.91.19-.972c.013-.062.044-.234.075-.379c.031-.148.06-.308.07-.36c.172-.91.375-1.894.383-1.933c.024-.054.055-.047.52.074M13.84 11.824c.191.028.508.086.82.16c.172.036.664.235.926.371c1.465.758 2.273 2.356 2.098 4.133a7 7 0 0 1-.11.664c-.012.024-.023.09-.039.153a8 8 0 0 1-.352.949c-1.082 2.172-3.394 3.5-6.199 3.55l-.476.012l.023-.105l.043-.203c.012-.055.031-.184.055-.285l.058-.305c.012-.066.024-.148.036-.191c.007-.043.085-.446.168-.895c.09-.445.183-.926.214-1.062l.08-.399c.01-.086.022-.18.034-.21c.011-.032.023-.099.035-.15c.012-.054.04-.198.058-.323c.024-.125.106-.528.176-.895l.153-.777c.007-.067.043-.235.07-.38c.055-.261.078-.386.113-.609l.094-.472l.285-1.465c.117-.61.223-1.14.23-1.188q.019-.082.126-.093c.187-.024 1.05-.008 1.28.015z"/></svg>`,
    name: "BUILDER",
    info: "Generates websites from text and supports react and next languages.",
    category:"ai"
  },
  {
    id: 39,
    link: "https://ui.shadcn.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#000" d="M5.353 11.823a1.036 1.036 0 0 0-.395-1.422a1.063 1.063 0 0 0-1.437.399L.138 16.702a1.035 1.035 0 0 0 .395 1.422a1.063 1.063 0 0 0 1.437-.398zm11.216 0a1.036 1.036 0 0 0-.394-1.422a1.064 1.064 0 0 0-1.438.399l-3.382 5.902a1.036 1.036 0 0 0 .394 1.422c.506.283 1.15.104 1.438-.398zm7.293-4.525a1.036 1.036 0 0 0-.395-1.422a1.06 1.06 0 0 0-1.437.399l-3.383 5.902a1.036 1.036 0 0 0 .395 1.422a1.063 1.063 0 0 0 1.437-.399zm-11.219 0a1.035 1.035 0 0 0-.394-1.422a1.064 1.064 0 0 0-1.438.398l-3.382 5.903a1.036 1.036 0 0 0 .394 1.422c.506.282 1.15.104 1.438-.399z"/></svg>`,
    name: "SHADCN",
    info: "Contains ready-made UI components with REACT, NEXT and other frameworks",
    category:"tempalte"
  },
  {
    id: 40,
    link: "https://mui.com/material-ui/getting-started/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="69.19" height="60" viewBox="0 0 256 222"><path fill="#007fff" d="M215.771 151.107a7.11 7.11 0 0 0 3.57-6.144l.128-41.153a7.11 7.11 0 0 1 3.57-6.145l22.308-12.814A7.11 7.11 0 0 1 256 91.016v74.818a7.11 7.11 0 0 1-3.57 6.166l-84.19 48.357a7.11 7.11 0 0 1-7.07.007l-66.07-37.79a7.11 7.11 0 0 1-3.585-6.172v-37.726c0-.042.05-.07.093-.05c.035.022.085 0 .085-.05v-.042c0-.028.014-.057.043-.071l54.416-31.261c.05-.029.028-.107-.029-.107a.057.057 0 0 1-.057-.057l.107-36.986a7.111 7.111 0 0 0-10.667-6.187L95.064 87.17a7.11 7.11 0 0 1-7.097 0l-40.57-23.36a7.11 7.11 0 0 0-10.66 6.158v66.846a7.11 7.11 0 0 1-10.638 6.18L3.584 130.12A7.11 7.11 0 0 1 0 123.935L.2 7.095A7.11 7.11 0 0 1 10.851.946L87.974 45.24a7.11 7.11 0 0 0 7.083 0l77.1-44.296a7.11 7.11 0 0 1 10.653 6.172v116.867a7.11 7.11 0 0 1-3.562 6.166l-40.378 23.254a7.111 7.111 0 0 0 .028 12.338l22.273 12.68a7.11 7.11 0 0 0 7.061-.015zm4.672-104.835a7.111 7.111 0 0 0 10.767 6.094l21.334-12.8A7.11 7.11 0 0 0 256 33.472V7.387A7.111 7.111 0 0 0 245.233 1.3L223.9 14.1a7.11 7.11 0 0 0-3.457 6.095v26.084z"/></svg>`,
    name: "MATERISL",
    info: "A huge library of UI designs compatible with REACT and NEXT",
    category:"library"
  },
  {
    id: 41,
    link: "https://www.heroui.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fff" d="M6.353 0h11.294A6.353 6.353 0 0 1 24 6.353v11.294A6.353 6.353 0 0 1 17.647 24H6.353A6.353 6.353 0 0 1 0 17.647V6.353A6.353 6.353 0 0 1 6.353 0m7.755 6.913h-.933v6.702a2.9 2.9 0 0 1-.362 1.45c-.24.424-.596.77-1.025 1q-.664.366-1.553.365q-.888 0-1.55-.364a2.6 2.6 0 0 1-1.024-1a2.87 2.87 0 0 1-.365-1.45V6.912h-.933v6.767a3.56 3.56 0 0 0 .489 1.862c.327.547.798.994 1.362 1.292q.873.474 2.021.474q1.154 0 2.024-.471a3.47 3.47 0 0 0 1.36-1.293c.33-.565.5-1.21.49-1.864zm3.648 10.22V6.914h-.933v10.22h.933Z"/></svg>`,
    name: "HERO UI",
    info: "Provides components and ready-made templates compatible with React Next",
    category:"template"
  },
  {
    id: 42,
    link: "https://app.visily.ai/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512"><path fill="#0091fd" d="M159.7 237.4C108.4 308.3 43.1 348.2 14 326.6C-15.2 304.9 2.8 230 54.2 159.1c51.3-70.9 116.6-110.8 145.7-89.2s11.1 96.6-40.2 167.5m351.2-57.3C437.1 303.5 319 367.8 246.4 323.7c-25-15.2-41.3-41.2-49-73.8c-33.6 64.8-92.8 113.8-164.1 133.2c49.8 59.3 124.1 96.9 207 96.9c150 0 271.6-123.1 271.6-274.9c.1-8.5-.3-16.8-1-25"/></svg>`,
    name: "VISILY IO",
    info: "Rapid UI design using AI with code conversion to HTML and CSS",
    category:"ai"
  },
  {
    id: 43,
    link: "https://colorhunt.co/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 2048 2048"><path fill="#f7e51d" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-53 0-99-20t-82-55t-55-81t-20-100q0-53 13-103t42-96q6-11 11-17t12-16q25-39 37-71t13-81q0-53-20-99t-55-82t-81-55t-100-20q-48 0-80 12t-72 38q-10 7-16 12t-17 11q-45 28-95 41t-104 14q-53 0-99-20t-82-55t-55-81t-20-100q0-141 36-272t104-244t160-207t207-161T752 37t272-37m384 480q-33 0-62 12t-51 35t-34 51t-13 62q0 33 12 62t35 51t51 34t62 13q33 0 62-12t51-35t34-51t13-62q0-33-12-62t-35-51t-51-34t-62-13M512 928q33 0 62-12t51-35t34-51t13-62q0-33-12-62t-35-51t-51-34t-62-13q-33 0-62 12t-51 35t-34 51t-13 62q0 33 12 62t35 51t51 34t62 13m384-256q33 0 62-12t51-35t34-51t13-62q0-33-12-62t-35-51t-51-34t-62-13q-33 0-62 12t-51 35t-34 51t-13 62q0 33 12 62t35 51t51 34t62 13m384 1024q33 0 62-12t51-35t34-51t13-62q0-33-12-62t-35-51t-51-34t-62-13q-33 0-62 12t-51 35t-34 51t-13 62q0 33 12 62t35 51t51 34t62 13m256-384q33 0 62-12t51-35t34-51t13-62q0-33-12-62t-35-51t-51-34t-62-13q-33 0-62 12t-51 35t-34 51t-13 62q0 33 12 62t35 51t51 34t62 13"/></svg>`,
    name: "COLOR HUNT",
    info: "A huge library containing many harmonious colors",
    category:"color"
  },
  {
    id: 44,
    link: "https://getbootstrap.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><defs><linearGradient id="deviconBootstrap0" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613)scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9013fe"/><stop offset="1" stop-color="#6610f2"/></linearGradient><linearGradient id="deviconBootstrap1" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1e5fc"/></linearGradient><filter id="deviconBootstrap2" width="197" height="249" x="161.9" y="135.46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><path fill="url(#deviconBootstrap0)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"/><path fill="url(#deviconBootstrap1)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z" filter="url(#deviconBootstrap2)" transform="translate(1.494 2.203)scale(.24566)"/></svg>`,
    name: "BOOTSTRAP",
    info: "A popular CSS framework that contains ready-made components",
    category : "library"
  },
  {
    id: 45,
    link: "https://colormagic.app/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none" stroke="#fde600" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13.58 13.79c.27.68.42 1.43.42 2.21c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6c0-2.76 1.88-5.1 4.42-5.79"/><path d="M17.58 10.21C20.12 10.9 22 13.24 22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54"/><path d="M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8"/></g></svg>`,
    name: "COLOR MAGIC",
    info: "Generate and modify instant color palettes and extract colors",
    category : "color"
  },
  {
    id: 46,
    link: "https://flowbite.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="#1d27f7"><path d="M15.907 11.998L10.332 9.23a1 1 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974z"/><path d="m11.463 4.054l5.579 3.323A4 4 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65a3.1 3.1 0 0 1-1.55.951c-.022.007-.045.005-.07.01q-.093.045-.191.08l-2.72.667l-1.992 2.48c-.18.227-.41.409-.67.534c.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154a10 10 0 0 0-3.375-2.989a10.1 10.1 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"/><path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761a3.7 3.7 0 0 1 1.238-1.34a3.92 3.92 0 0 1 3.433-.245q.265.045.508.161l5.753 2.856q.123.075.236.165a2.13 2.13 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a10 10 0 0 0-2.5 3.496a9.9 9.9 0 0 0 .283 8.368a10 10 0 0 0 2.73 3.322a17 17 0 0 1-.424-2.729"/><path d="m19.102 16.163l-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.1 4.1 0 0 1-2 .53a3.95 3.95 0 0 1-1.983-.535a3.8 3.8 0 0 1-1.36-1.361a3.75 3.75 0 0 1-.51-1.85a2 2 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07q-.084.03-.162.07a1.8 1.8 0 0 0-.787 1.516v6.377a10.7 10.7 0 0 0 1.113 4.27a10.11 10.11 0 0 0 8.505-.53a10 10 0 0 0 3.282-2.858a9.9 9.9 0 0 0 1.75-3.97a19.6 19.6 0 0 1-2.845 2.216Z"/></g></svg>`,
    name: "FLOWBITE",
    info: "Tailwind library of pre-made components",
    category : "library"
  },
  {
    id: 47,
    link: "https://layout.bradwoods.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#f71d42" d="M3 3a1 1 0 0 0-1 1v4h5.5V3zm6.5 0v5h5V3zm7 0v5H22V4a1 1 0 0 0-1-1zm5.5 7h-5.5v4H22zm0 6h-5.5v5H21a1 1 0 0 0 1-1zm-7.5 5v-5h-5v5zm-7 0v-5H2v4a1 1 0 0 0 1 1zM2 14h5.5v-4H2zm7.5-4h5v4h-5z"/></svg>`,
    name: "LAYOUT BR",
    info: "Contains ready-made layout components with code",
    category :"css"
  },
  {
    id: 48,
    link: "https://uigradients.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="#b81df7" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4 22v-4h-4v4h-4v-4h-4v-4h4v-4h-4v-4h4V6h4v4h4V6h4v20Z"/><path fill="#b81df7" d="M14 10h4v4h-4zm0 8h4v4h-4zm4-4h4v4h-4z"/></svg>`,
    name: "UI GRADIENTS",
    info: "Contains a large collection of professional color gradients",
    category : "color"
  },
  {
    id: 49,
    link: "https://michalsnik.github.io/aos/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="#79f71d"><path d="M7.182 9.172L5.768 7.757L1.525 12l4.243 4.243l1.414-1.415L4.353 12zm9.636 5.656l1.414 1.415L22.475 12l-4.243-4.243l-1.414 1.415L19.646 12z"/><path fill-rule="evenodd" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"/></g></svg>`,
    name: "AOS",
    info: "Library that implements animation when scrolling",
    category : "library"
  },
  {
    id: 50,
    link: "https://mycolor.space/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#9b1df7" d="M11.228 10.333q.445 0 .75-.308q.305-.307.305-.753q0-.445-.308-.75q-.307-.305-.753-.305q-.445 0-.75.308q-.305.307-.305.753q0 .445.308.75q.307.305.753.305m9.264 10.917q-.723 0-2.392-.933t-3.579-2.336q-.59.26-1.231.39q-.642.129-1.315.129q-2.715 0-4.595-1.88T5.5 12.025q0-.673.133-1.327q.132-.654.392-1.244q-1.379-1.89-2.286-3.528t-.906-2.342q0-.328.182-.533q.183-.205.468-.205q.401 0 1.47.508Q6.021 3.86 7.408 4.7q.176.104.222.305t-.056.376q-.1.175-.301.232q-.202.056-.379-.048q-.763-.448-1.492-.83q-.729-.383-1.46-.724q.546 1.181 1.193 2.293q.648 1.111 1.396 2.198q.873-1.35 2.29-2.164q1.418-.813 3.154-.813q2.716 0 4.608 1.892t1.892 4.608q0 1.737-.816 3.164q-.817 1.427-2.167 2.3q1.106.767 2.24 1.427q1.134.659 2.334 1.219q-.335-.725-.72-1.454q-.387-.729-.835-1.492q-.103-.177-.047-.39q.057-.211.232-.314q.175-.102.387-.046t.313.23q.831 1.385 1.333 2.451t.502 1.469q0 .302-.204.481t-.535.18m-6.768-6.494q.31 0 .521-.21q.21-.21.21-.52t-.21-.521q-.209-.21-.52-.21t-.52.21q-.21.209-.21.52t.21.52q.209.21.52.21m1.266-3.326q.29 0 .483-.19t.193-.48t-.19-.483t-.48-.193t-.482.19q-.194.189-.194.48q0 .29.19.482q.19.194.48.194m-1.502 5.757q-1.93-1.465-3.575-3.13q-1.647-1.666-3.106-3.595q-.154.404-.231.78q-.077.374-.077.817q.012 1.084.444 2.095q.433 1.01 1.179 1.747q.746.736 1.725 1.16t2.064.434q.384 0 .788-.077t.789-.23m1.094-.353q1.296-.701 2.094-1.984t.798-2.85q0-2.283-1.609-3.88t-3.891-1.595q-1.567 0-2.837.789q-1.27.788-1.972 2.084q1.559 2.13 3.423 3.994t3.994 3.443m-2.27-5.168"/></svg>`,
    name: "COLOR SPACE",
    info: "Generate color gradients in a professional way",
    category : "color"
  },
  {
    id: 51,
    link: "https://www.colorhexa.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512"><path fill="#1df77c" d="M40 496h432a24.03 24.03 0 0 0 24-24v-72a24.03 24.03 0 0 0-24-24H40a24.03 24.03 0 0 0-24 24v72a24.03 24.03 0 0 0 24 24m8-88h416v56H48Zm-2.99-168.511a50.2 50.2 0 0 0 36.2 61.07l158.5 40.524a50.174 50.174 0 0 0 61.07-36.2l52.962-207.138L97.969 32.352l-12.01 46.974l-58-14.827l-7.926 31l58 14.828Zm76.035-168.208l193.767 49.54L294.568 200H88.135ZM286.387 232l-16.607 64.956a18.22 18.22 0 0 1-22.141 13.125l-158.5-40.525a18.22 18.22 0 0 1-13.124-22.14L80 231.82v.18ZM420 352c37.5 0 68-32.3 68-72c0-16.181-9.341-38.514-28.559-68.277c-13.285-20.576-26.39-37.021-26.941-37.711L420 158.37l-12.5 15.642c-.551.69-13.656 17.135-26.941 37.711C361.341 241.486 352 263.819 352 280c0 39.7 30.505 72 68 72m0-141.441c17.658 24.641 36 55.426 36 69.441c0 22.056-16.149 40-36 40s-36-17.944-36-40c0-14.015 18.343-44.8 36-69.441"/></svg>`,
    name: "COLOR HEXA",
    info: "The color box suggests a variety of shades.",
    category : "color"
  },
  {
    id: 52,
    link: "https://colors.eva.design/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="none" stroke="#1d22f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m14 12.648l2.37-2.37c.294-.293.44-.44.518-.598c.15-.3.15-.653 0-.954c-.078-.158-.224-.304-.517-.597s-.44-.439-.597-.517a1.07 1.07 0 0 0-.954 0c-.158.078-.305.224-.598.517l-2.37 2.371M14 12.648l-8.222 8.223c-.293.293-.44.439-.598.517c-.3.15-.653.15-.954 0c-.158-.078-.304-.224-.597-.517s-.439-.44-.517-.597a1.07 1.07 0 0 1 0-.954c.078-.158.224-.305.517-.598l8.223-8.222M14 12.648L11.852 10.5m7.648-8l-.11.299c-.146.391-.218.587-.36.73c-.144.143-.34.216-.731.36L18 4l.299.11c.391.145.587.218.73.36c.143.144.215.34.36.731l.111.299l.11-.299c.146-.391.218-.587.36-.73c.144-.143.34-.216.731-.36L21 4l-.299-.11c-.391-.145-.587-.218-.73-.36c-.143-.144-.215-.34-.36-.731zm0 10l-.11.299c-.146.391-.218.587-.36.73c-.144.143-.34.216-.731.36L18 14l.299.11c.391.146.587.218.73.36c.143.144.215.34.36.731l.111.299l.11-.299c.146-.391.218-.587.36-.73c.144-.143.34-.216.731-.36L21 14l-.299-.11c-.391-.146-.587-.218-.73-.36c-.143-.144-.215-.34-.36-.731zm-9-10l-.11.299c-.146.391-.218.587-.36.73c-.144.143-.34.216-.731.36L9 4l.299.11c.391.145.587.218.73.36c.143.144.216.34.36.731l.111.299l.11-.299c.146-.391.218-.587.36-.73c.144-.143.34-.216.731-.36L12 4l-.299-.11c-.391-.145-.587-.218-.73-.36c-.143-.144-.216-.34-.36-.731z" color="#1d22f7"/></svg>`,
    name: "COLOR DESIGN",
    info: "Provides automatic gradients for each color",
    category :"color"
  },
  {
    id: 53,
    link: "https://icons.getbootstrap.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#691df7" d="M18.002 2.997H5.999A3.01 3.01 0 0 0 2.997 6v12.002a3.01 3.01 0 0 0 3.002 3.001h12.003a3.01 3.01 0 0 0 3.001-3.001V6a3.01 3.01 0 0 0-3.001-3.003m-1.64 12.647c-.152.36-.389.68-.693.927a3.6 3.6 0 0 1-1.206.614q-.735.228-1.75.229H7.888V6.909h5.103q1.415-.002 2.267.646c.569.436.854 1.082.854 1.958q0 .794-.389 1.357q-.389.56-1.111.868v.034c.642.135 1.137.438 1.464.912q.492.71.493 1.789c0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589q-.462-.421-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435q.463-.435.464-1.229c-.005-.518-.156-.919-.464-1.193h-.014zm-.451-2.119c.299-.251.444-.613.444-1.084c0-.526-.131-.902-.397-1.116c-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372"/></svg>`,
    name: "BOOTSTRAP ICONS",
    info: "Free Bootstrap framework icons",
   category :"icon" 
  },
  {
    id: 54,
    link: "https://boxicons.com/icons/outer-shadow",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256"><path fill="#fff" d="M128 256C24.766 256 0 231.234 0 128S24.766 0 128 0s128 24.766 128 128s-24.766 128-128 128M91.764 63.348l-40.147 91.243c-1.825 4.432-3.389 10.166-3.389 15.12c0 22.68 15.902 38.583 38.582 38.583c7.433 0 13.605-1.953 19.88-3.938l.005-.003c6.489-2.053 13.089-4.141 21.305-4.141c8.312 0 14.754 2.07 21.118 4.114l.002.001c6.21 1.995 12.345 3.967 20.069 3.967c22.68 0 38.583-15.903 38.583-38.583c0-4.954-1.565-10.688-3.389-15.12l-40.146-91.243c-6.78-15.38-19.813-23.723-36.237-23.723s-29.458 8.342-36.236 23.723m-3.39 105.581L128 79.251l39.104 89.678c-11.21-5.474-25.287-8.081-39.104-8.081c-14.338 0-27.894 2.607-39.625 8.081"/></svg>`,
    name: "BOX ICONS",
    info: "A lightweight SVG library that supports React.",
   category :"icon" 
  },
  {
    id: 55,
    link: "https://remixicon.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#f71d1d" stroke-linecap="round" stroke-linejoin="round" d="m12.445 21.846l6.575-4.705V4.5l-6.575 4.705zM28.979 43.5l6.576-4.705V26.154l-6.576 4.705zm-9.959 0l-6.575-4.705m23.11-29.59L28.98 4.5v13.989l-9.96 7.126v-4.166l-6.575 4.705v12.641L19.02 43.5v-9.823l16.535-11.831z" stroke-width="1.4"/></svg>`,
    name: "ICON REMIX",
    info: "Contains a large collection of free icons",
   category :"icon" 
  },
  {
    id: 56,
    link: "https://neumorphism.io/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fff" d="M3 3h15v15H3zm16 16h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm-3 12h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7z"/></svg>`,
    name: "NEUMORPHISM IO",
    info: "Generate shadow with direct control of values",
   category :"shadow" 
  },
  {
    id: 57,
    link: "https://getcssscan.com/css-box-shadow-examples",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="none" stroke="#0cea0c" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"/></svg>`,
    name: "GET CSS SCAN",
    info: "Contains many ready-made shadow templates.",
   category :"shadow" 
  },
  {
    id: 58,
    link: "https://enjoycss.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277bd" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>`,
    name: "ENJOY CSS",
    info: "To generate CSS elements directly with values ​​and code",
   category :"css" 
  },
  {
    id: 59,
    link: "https://webcode.tools/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256"><path fill="#000" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M92.8 145.6a8 8 0 1 1-9.6 12.8l-32-24a8 8 0 0 1 0-12.8l32-24a8 8 0 0 1 9.6 12.8L69.33 128Zm58.89-71.4l-32 112a8 8 0 1 1-15.38-4.4l32-112a8 8 0 0 1 15.38 4.4m53.11 60.2l-32 24a8 8 0 0 1-9.6-12.8l23.47-17.6l-23.47-17.6a8 8 0 1 1 9.6-12.8l32 24a8 8 0 0 1 0 12.8"/></svg>`,
    name: "WEB CODE",
    info: "Professional CSS Effects Generator",
   category :"css" 
  },
  {
    id: 60,
    link: "https://motion.dev/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#e4f000" d="M8 17q-.425 0-.712-.288T7 16t.288-.712T8 15h5q-.35-.425-.562-.925T12.1 13H10q-.425 0-.712-.288T9 12t.288-.712T10 11h2.1q.125-.575.338-1.075T13 9H4q-.425 0-.712-.288T3 8t.288-.712T4 7h13q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm9-2q1.25 0 2.125-.875T20 12t-.875-2.125T17 9t-2.125.875T14 12t.875 2.125T17 15M3 13q-.425 0-.712-.288T2 12t.288-.712T3 11h4q.425 0 .713.288T8 12t-.288.713T7 13zm1 4q-.425 0-.712-.288T3 16t.288-.712T4 15h1q.425 0 .713.288T6 16t-.288.713T5 17z"/></svg>`,
    name: "MOTION",
    info: "A library containing components and animations for react and veu",
   category :"library" 
  },
  {
    id: 61,
    link: "https://animejs.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34.293 39.372A18.5 18.5 0 0 1 24 42.5C13.783 42.5 5.5 34.217 5.5 24S13.783 5.5 24 5.5S42.5 13.783 42.5 24h0" stroke-width="0.9"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30.167 30.167H24a6.167 6.167 0 1 1 6.167-6.166zc0 6.812 5.522 12.333 12.333 12.333V24" stroke-width="0.9"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24c0-6.811 5.522-12.333 12.333-12.333h0c6.811 0 12.333 5.522 12.333 12.333h0" stroke-width="0.9"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c-6.811 0-12.333-5.522-12.333-12.333h0c0-6.811 5.522-12.333 12.333-12.333h0" stroke-width="0.9"/></svg>`,
    name: "ANIME JS",
    info: "A powerful library for professional animation design with React",
   category :"library" 
  },
  {
    id: 62,
    link: "https://www.svgrepo.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#acacac" d="M5.13 10.71h3.74L6.22 8.06c-1.01 0-1.83-.82-1.83-1.84a1.83 1.83 0 0 1 1.83-1.83c1.02 0 1.84.82 1.84 1.83l2.65 2.65V5.13a1.84 1.84 0 0 1 0-2.59a1.81 1.81 0 0 1 2.58 0c.71.71.71 1.87 0 2.59v3.74l2.66-2.65a1.83 1.83 0 0 1 3.66 0c0 1.02-.82 1.84-1.83 1.84l-2.65 2.65h3.74a1.84 1.84 0 0 1 2.59 0c.72.71.72 1.87 0 2.58c-.71.71-1.87.71-2.59 0h-3.74l2.65 2.66c1.01 0 1.83.81 1.83 1.83a1.83 1.83 0 0 1-1.83 1.83c-1.02 0-1.83-.82-1.83-1.83l-2.66-2.65v3.74c.71.72.71 1.88 0 2.59c-.71.72-1.87.72-2.58 0a1.84 1.84 0 0 1 0-2.59v-3.74l-2.65 2.65c0 1.01-.82 1.83-1.84 1.83a1.83 1.83 0 0 1 0-3.66l2.65-2.66H5.13c-.72.71-1.88.71-2.59 0a1.81 1.81 0 0 1 0-2.58a1.84 1.84 0 0 1 2.59 0"/></svg>`,
    name: "SVG REPO",
    info: "A large collection of distinctive SVG icons",
   category :"icon" 
  },
  {
    id: 63,
    link: "https://finsweet.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none" stroke="#e318f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></g></svg>`,
    name: "LOTTIE FLOW",
    info: "Contains a set of animated icons",
   category :"icon" 
  },
  {
    id: 64,
    link: "https://easyfrontend.com/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><path fill="none" stroke="#1824f2" stroke-linecap="round" stroke-linejoin="round" d="M9.828 11a2 2 0 0 0-1.414.586l-3.328 3.328a2 2 0 0 0-.586 1.414V35a2 2 0 0 0 2 2h31.672a2 2 0 0 0 1.414-.586l3.328-3.328a2 2 0 0 0 .586-1.414V13a2 2 0 0 0-2-2z" stroke-width="2"/><path fill="none" stroke="#1824f2" stroke-linecap="round" stroke-linejoin="round" d="M25.411 30.496c.999 1.328 2.25 1.823 3.993 1.823h2.41c2.244 0 4.063-1.858 4.063-4.15v-.018c0-2.293-1.819-4.15-4.062-4.15h-2.66c-2.246 0-4.066-1.861-4.066-4.156c0-2.3 1.824-4.164 4.075-4.164h2.398c1.742 0 2.994.495 3.993 1.823m-23.432 6.495h5.313m2.83 8.319h-8.142V15.68h8.142" stroke-width="2"/></svg>`,
    name: "FRONT-END EAZY",
    info: "Front-end project design with UI components and code",
   category :"ai" 
  },
  {
    id: 65,
    link: "https://nivo.rocks/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128"><circle cx="63.93" cy="64" r="60" fill="#c33"/><circle cx="60.03" cy="63.1" r="56.1" fill="#f44336"/><path fill="#ff8a80" d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3"/></svg>`,
    name: "NIVO",
    info: "Contains ready-made graphic components with React code",
   category :"template" 
  },
  {
    id: 66,
    link: "https://squoosh.app/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none" stroke="#f25d18" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19.5l3-3l3 3M17 22v-5.5"/><circle cx="9" cy="9" r="2"/></g></svg>`,
    name: "SPUOOSH",
    info: "Compresses the image in webP format to reduce its size.",
   category :"image" 
  },
];
function renderTools(tools) {
  SaveTools.innerHTML = "";
  tools.forEach((tool) => { 
    SaveTools.innerHTML += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 mt-4 d-inline-block" data-aos="zoom-in">
      <div class="card w-100 align-items-center">
          <label class="ui-bookmark">
              <input type="checkbox" data-id="${tool.id}">
              <div class="bookmark d-flex justify-content-center align-items-center">
                  <svg viewBox="0 0 32 32"><g><path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path></g></svg>
              </div>
          </label>
          ${tool.icon}
          <span class="pt-2 d-block text-center text-light">${tool.name}</span>
          <p class="info text-light opacity-50 ms-2 pt-3">${tool.info}</p>  
          <button class="connectBtn d-flex justify-content-center align-items-center">
            <a href="${tool.link}" class="nav-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="white">
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
              </svg> Connect
            </a>
          </button>
      </div>
    </div>`;
  });
  updateBookmarks();
}
// bookmark
function updateBookmarks() {
  const bookmarkInputs = document.querySelectorAll(".ui-bookmark input");
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
  const count = document.querySelector(".count");

  count.textContent = localStorage.getItem("count") || 0;

  bookmarkInputs.forEach((input) => {
    const id = input.getAttribute("data-id");
    input.checked = bookmarks[id] || false;

    input.addEventListener("click", (e) => {
      if (!localStorage.getItem("first") && !localStorage.getItem("last")) {
        e.preventDefault();
        alert("please login");
        return;
      }
      bookmarks[id] = input.checked;
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      let currentCount = parseInt(count.textContent);
      if (input.checked) currentCount++;
      else currentCount--;
      count.textContent = currentCount;
      localStorage.setItem("count", currentCount);
    });
  });
}
const bgFilter = document.querySelectorAll(".bg-filter");

const dropLink = document.querySelector(".dropLink");
const dropItem = document.querySelector(".dropItem");
const faCaretDown = document.querySelector(".fa-caret-up");
open = false;
dropLink.addEventListener("click", () => {
  if (!open) {
    dropItem.style.transform = "translateY(0)";
    faCaretDown.style.transform = "rotate(180deg)";
    open = true;
  } else {
    dropItem.style.transform = "translateY(-50px)";
    faCaretDown.style.transform = "rotate(360deg)";
    open = false;
  }
});

renderTools(tool);

bgFilter.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.category;
    if (category === "all") {
      renderTools(tool);
    } else {
      const filtered = tool.filter((t) => t.category === category);
      renderTools(filtered);
    }
  });
});

function search(value) {
  if (!value) {
    renderTools(tool);
    return;
  }
  const filtered = tool.filter((t) => t.name.toLowerCase().includes(value.toLowerCase()));
  if (filtered.length === 0) {
    SaveTools.innerHTML = `<div class="container text-center"> 
            <div class="mt-5 pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"><path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3m9.5 6.5L22 22"/><path d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m1-16v3.4a.6.6 0 0 0 .6.6H20"/></g></svg>
                <h3 class="text-light text-center pt-3" style="background: linear-gradient(180deg , #9b11db , #d49ef1 , rgb(244, 216, 255));-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;">NO TOOLS FOUND</h3>
                <p class="text-light opacity-75">Sorry the tool you are looking for is not available Try searching for another tool <i class="fa-regular fa-face-laugh-beam"></i></p>
            </div>
        </div>`;
  } else {
    renderTools(filtered);
  }
}
// tooltip
  document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
