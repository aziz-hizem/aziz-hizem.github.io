const gh = (name) => `https://github.com/aziz-hizem/${name}`

// Featured work, in priority order: DevOps first, then AI, then software.
export const featured = [
  {
    id: 'azure-devops-cicd-pipeline',
    title: 'Azure DevOps CI/CD Pipeline',
    area: 'DevOps',
    image: '/projects/azure-devops-cicd-pipeline.svg',
    tagline: 'A complete software delivery pipeline on Azure, built during a two-month DevOps internship at an airline.',
    description:
      'Build, tests, secret scanning and a SonarQube quality gate that blocks bad code, then Docker packaging and promotion through Dev, Staging and Production with a manual approval, all on Terraform-managed infrastructure.',
    highlights: [
      'Azure Pipelines with an enforced quality gate: run 1 failed on purpose, run 2 passed (evidence kept in the repo)',
      'Container build pushed to Azure Container Apps, Azure SQL migrations with Alembic',
      'Infrastructure as code with Terraform; GitHub Actions re-runs the checks on every push',
    ],
    stack: ['Azure DevOps', 'Terraform', 'Docker', 'SonarQube', 'Gitleaks', 'Python', 'FastAPI', 'GitHub Actions'],
    links: [{ label: 'Repository', href: gh('azure-devops-cicd-pipeline') }],
  },
  {
    id: 'pill-blister-classifier',
    title: 'Pill Blister Classifier',
    area: 'Computer Vision',
    image: '/projects/pill-blister-classifier.webp',
    tagline: 'Inspects pill blister packs with classical image processing: counts pills, detects empty cells and flags color anomalies.',
    description:
      'No machine learning involved: thresholding, morphology and watershed segmentation do the work, with a Tkinter debug UI that shows every pipeline step. A second version runs headless on a Raspberry Pi 5 and reports the result with LEDs and a servo.',
    highlights: [
      'Pill counting and per-pill color labeling',
      'Empty-cell and color-anomaly detection',
      'Desktop debug app and Raspberry Pi 5 hardware version',
    ],
    stack: ['Python', 'OpenCV', 'NumPy', 'Tkinter', 'Raspberry Pi 5'],
    links: [{ label: 'Repository', href: gh('pill-blister-classifier') }],
  },
  {
    id: 'spiderbot-rust-detection',
    title: 'SpiderBot — Rust Detection',
    area: 'Computer Vision · Robotics',
    image: '/projects/spiderbot-rust-detection.webp',
    tagline: 'Real-time rust and corrosion detection for a spider robot that inspects metal surfaces.',
    description:
      'Three YOLO models trained and compared on public corrosion datasets (up to 14k images). The best one runs live on the robot: a Raspberry Pi camera streams over Wi-Fi to a PC that draws the detections and counts affected regions.',
    highlights: [
      'YOLOv8n → YOLO11n → YOLO11s, documented with training curves and confusion matrices',
      'Live detection on the robot camera stream, tested end to end',
      'Annotated video recording for inspection reports',
    ],
    stack: ['Python', 'Ultralytics YOLO', 'OpenCV', 'Raspberry Pi', 'Roboflow datasets'],
    links: [{ label: 'Repository', href: gh('spiderbot-rust-detection') }],
  },
  {
    id: 'f1-chatbot',
    title: 'F1 Chatbot',
    area: 'LLM · Full-stack',
    image: '/projects/f1-chatbot.webp',
    tagline: 'Ask anything about Formula 1 history in plain English and get answers backed by real data.',
    description:
      'An LLM turns each question into SQL, the query runs read-only against a database of every season from 1950 to 2024, and the rows are turned back into a conversational answer. React chat UI on a FastAPI backend.',
    highlights: [
      'Text-to-SQL with schema and few-shot prompting on Llama 3.1 (Groq)',
      'Safe execution: only SELECT statements run, on a database opened read-only',
      'React chat UI with 11 switchable team themes',
    ],
    stack: ['React', 'FastAPI', 'SQLite', 'Groq API', 'Llama 3.1'],
    links: [{ label: 'Repository', href: gh('F1-Chatbot-V2') }],
  },
  {
    id: 'cinecasa',
    title: 'Cinecasa',
    area: 'Desktop App',
    image: '/projects/cinecasa.webp',
    tagline: 'A home cinema app that turns local movie and TV folders into a streaming-style library.',
    description:
      'Scans your drives, matches files on TMDB and shows posters, ratings, cast and episodes. Playback runs in MPC-HC while Cinecasa follows your progress and resumes at the exact second you stopped. Includes themed hubs, auto-play next episode and search.',
    highlights: [
      'Electron + React + TypeScript with a typed IPC bridge',
      'SQLite library with a local artwork cache for instant startup',
      'Exact resume by tracking the MPC-HC player position',
    ],
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Tailwind CSS', 'TMDB API'],
    links: [{ label: 'Repository', href: gh('cinecasa') }],
  },
  {
    id: 'astar-pathfinding-visualizer',
    title: 'A* Pathfinding Visualizer',
    area: 'Algorithms',
    image: '/projects/astar-pathfinding-visualizer.webp',
    tagline: 'An interactive maze editor that shows the A* search algorithm exploring the grid step by step.',
    description:
      'A* implemented from scratch as a stepwise class so the UI can render the frontier, the explored set and the current node after every expansion. Draw walls, run the search animated or one step at a time, save mazes as JSON.',
    highlights: ['A* with Manhattan heuristic, written without any pathfinding library', 'Step-by-step mode and speed control', 'Pygame canvas embedded in a Tkinter window'],
    stack: ['Python', 'Pygame', 'Tkinter'],
    links: [{ label: 'Repository', href: gh('astar-pathfinding-visualizer') }],
  },
  {
    id: 'flappy-fish-neat-ai',
    title: 'Flappy Fish NEAT AI',
    area: 'Machine Learning',
    image: '/projects/flappy-fish-neat-ai.webp',
    tagline: 'An underwater Flappy Bird clone where neural networks teach themselves to play through neuroevolution.',
    description:
      'Each fish is controlled by a small neural network. Generation after generation, NEAT keeps the networks that survive longest and mutates them, until one plays indefinitely. Playable by hand as well.',
    highlights: [
      'NEAT neuroevolution with neat-python: 50 fish per generation, network structure evolves from zero hidden neurons',
      'Shared game module for human play and training',
      'Fitness, species and best genome reported every generation',
    ],
    stack: ['Python', 'Pygame', 'neat-python'],
    links: [{ label: 'Repository', href: gh('flappy-fish-neat-ai') }],
  },
]

// Work in progress, shown on its own.
export const current = {
  id: 'spotify-chatbot',
  title: 'Spotify Chatbot',
  status: 'In progress',
  image: '/projects/spotify-chatbot.webp',
  tagline: 'Manage your Spotify playlists by chatting in plain English.',
  description:
    'Ask for "Blinding Lights and Levitating in my Road Trip playlist" and an LLM extracts a strict JSON intent that a FastAPI backend executes on the Spotify Web API, creating the playlist if it does not exist yet.',
  works: [
    'Intent extraction with few-shot prompting and JSON mode (no free-text parsing)',
    'Spotify OAuth refresh-token flow with automatic renewal',
    'Search, playlist lookup or creation, batch adding of tracks',
    'React chat interface',
  ],
  roadmap: [
    'Remove songs, create and delete playlists with the same intent design',
    'Playlist questions such as "what is in my Road Trip playlist"',
    'Multi-turn conversations so follow-ups like "add that one too" work',
    'Per-user Spotify login instead of a single refresh token',
    'Public deployment with a live demo',
  ],
  exploration:
    'A separate RAG experiment scrapes the Spotify Web API reference into a vector store so the model can write code for any endpoint from the documentation.',
  stack: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Groq API', 'Spotify Web API'],
  links: [{ label: 'Repository', href: gh('spotify-chatbot') }],
}

// Everything else, one line each.
export const more = [
  {
    id: 'memory-monitor',
    title: 'Memory Monitor',
    summary: 'Tiny Windows tray app (~10 MB) that logs RAM usage to CSV to find out how much memory you really need.',
    stack: ['C#', '.NET 8', 'Win32'],
    links: [{ label: 'Repository', href: gh('memory-monitor') }, { label: 'Download', href: `${gh('memory-monitor')}/releases/latest` }],
  },
  {
    id: 'clipsync',
    title: 'ClipSync',
    summary: 'Syncs copied text between two computers on the same network, in both directions, over TCP sockets.',
    stack: ['Python', 'PyQt6', 'Sockets'],
    links: [{ label: 'Repository', href: gh('clipsync') }, { label: 'Download', href: `${gh('clipsync')}/releases/latest` }],
  },
  {
    id: 'proxiwash-dryer-notifier',
    title: 'ProxiWash Dryer Notifier',
    summary: 'Watches a residence laundry dryer on the ProxiWash website with Selenium and alerts you when the cycle ends.',
    stack: ['Python', 'Selenium', 'CustomTkinter'],
    links: [{ label: 'Repository', href: gh('proxiwash-dryer-notifier') }, { label: 'Download', href: `${gh('proxiwash-dryer-notifier')}/releases/latest` }],
  },
  {
    id: 'realtime-face-detection',
    title: 'Real-time Face Detection',
    summary: 'Webcam face detection with a Tkinter GUI and an image CLI, built as the vision module for a robot.',
    stack: ['Python', 'OpenCV', 'dlib'],
    links: [{ label: 'Repository', href: gh('realtime-face-detection') }],
  },
  {
    id: 'f1-racer',
    title: 'F1 Racer',
    summary: 'Retro NES-style top-down Formula 1 racing game with procedurally drawn pixel art.',
    stack: ['Python', 'Pygame'],
    links: [{ label: 'Repository', href: gh('f1-racer') }],
  },
  {
    id: 'pixel-platformer',
    title: 'Pixel Platformer',
    summary: '2D pixel-art platformer with double jump, mask collisions, fire traps and switchable characters. Work in progress.',
    stack: ['Python', 'Pygame'],
    links: [{ label: 'Repository', href: gh('pixel-platformer') }],
  },
  {
    id: 'easylife',
    title: 'EasyLife',
    summary: 'Responsive landing page prototype for a home cleaning service, built for a client. Work in progress.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    links: [{ label: 'Repository', href: gh('easylife') }, { label: 'Live site', href: 'https://easylife-ten.vercel.app' }],
  },
  {
    id: 'arduino-joystick-controller',
    title: 'Arduino Joystick Controller',
    summary: 'DIY game controller: mouse steering plus an Arduino joystick for throttle and brake, merged into a virtual gamepad.',
    stack: ['Arduino', 'Python', 'vJoy', 'AutoHotkey'],
    links: [{ label: 'Repository', href: gh('Arduino-Joystick-Controller-and-Mouse-Steering') }],
  },
]
