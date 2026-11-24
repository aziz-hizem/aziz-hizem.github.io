const gh = (name) => `https://github.com/aziz-hizem/${name}`

// Featured work, in page order: opens with the F1 chatbot, then alternates fields.
// `field` and `short` are shown on the 'Next' connector that points to a project.
export const featured = [
  {
    id: 'f1-chatbot',
    title: 'F1 Chatbot',
    area: 'LLM · Full-stack',
    field: 'AI chatbot',
    short: 'F1 Chatbot',
    image: '/projects/f1-chatbot.webp',
    tagline: 'Ask Formula 1 history questions in plain English and get answers from real data.',
    highlights: [
      '[[Text-to-SQL]] with two LLMs: one writes the query, one phrases the answer',
      'Read-only database covering every season from 1950 to 2024',
    ],
    stack: ['React', 'FastAPI', 'SQLite', 'Groq API', 'GPT-OSS'],
    links: [{ label: 'Repository', href: gh('f1-chatbot') }],
  },
  {
    id: 'azure-devops-cicd-pipeline',
    title: 'Azure DevOps CI/CD Pipeline',
    area: 'DevOps',
    field: 'DevOps & Cloud',
    short: 'Azure Pipeline',
    image: '/projects/azure-devops-cicd-pipeline.webp',
    tallImage: true, // portrait diagram: narrower image column, capped height
    tagline: 'A full CI/CD pipeline on Azure, built during a DevOps internship at Nouvelair.',
    highlights: [
      'A [[quality gate]] that blocks bad code before it ships',
      'Secret, dependency and image scans: a vulnerable image never reaches the registry',
      'One Docker image promoted Dev → Staging → Production, with a manual approval for Production',
      'Infrastructure written in [[Terraform]], one database per environment',
    ],
    stack: ['Azure DevOps', 'Terraform', 'Docker', 'SonarQube', 'Gitleaks', 'Python', 'FastAPI', 'GitHub Actions'],
    links: [{ label: 'Repository', href: gh('azure-devops-cicd-pipeline') }],
  },
  {
    id: 'flappy-fish-neat-ai',
    title: 'Flappy Fish NEAT ML',
    area: 'Machine Learning',
    field: 'Machine learning',
    short: 'Flappy Fish',
    image: '/projects/flappy-fish-neat-ai.webp',
    tagline: 'Neural networks teach themselves to play an underwater Flappy Bird clone.',
    highlights: [
      '[[NEAT neuroevolution]]: 50 fish per generation, the network structure evolves',
      'Each fish sees three inputs: its height and the distances to the next pipes',
      'Scored on survival and pipes passed; the fittest breed the next generation',
      'Playable by hand too, on the same game engine',
    ],
    stack: ['Python', 'Pygame', 'neat-python'],
    links: [{ label: 'Repository', href: gh('flappy-fish-neat-ai') }],
  },
  {
    id: 'spotify-chatbot',
    title: 'Spotify Chatbot',
    area: 'LLM · RAG',
    field: 'AI chatbot + RAG',
    short: 'Spotify Chatbot',
    image: '/projects/spotify-chatbot.webp',
    tagline: 'Manage your Spotify playlists by chatting in plain English.',
    highlights: [
      'An LLM turns each request into a JSON action run on the Spotify Web API',
      '[[RAG]] experiment: retrieves API docs from a vector store so the LLM can write new actions',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Groq API', 'RAG', 'ChromaDB', 'Sentence Transformers', 'Spotify Web API'],
    links: [{ label: 'Repository', href: gh('spotify-chatbot') }],
  },
  {
    id: 'spiderbot-rust-detection',
    title: 'SpiderBot — Rust Detection',
    area: 'Computer Vision · Robotics',
    field: 'Computer vision',
    short: 'SpiderBot',
    image: '/projects/spiderbot-rust-detection.webp',
    tagline: 'Real-time rust detection for a spider robot that inspects metal surfaces.',
    highlights: [
      'Fine-tuned [[YOLO11]] on 14,412 images, 62% mean average precision',
      'Runs live on the robot’s Raspberry Pi camera stream',
    ],
    stack: ['Python', 'Ultralytics YOLO', 'OpenCV', 'Raspberry Pi', 'Roboflow datasets'],
    links: [{ label: 'Repository', href: gh('spiderbot-rust-detection') }],
  },
  {
    id: 'pill-blister-classifier',
    title: 'Pill Blister Classifier',
    area: 'Computer Vision',
    field: 'Computer vision',
    short: 'Pill Classifier',
    image: '/projects/pill-blister-classifier.webp',
    tagline: 'Inspects pill blister packs: counts pills, finds empty cells and odd colors.',
    highlights: [
      'Classical computer vision with [[OpenCV]], no machine learning',
      'Runs on a desktop and on a Raspberry Pi 5 with LEDs and a servo',
    ],
    stack: ['Python', 'OpenCV', 'NumPy', 'Tkinter', 'Raspberry Pi 5'],
    links: [{ label: 'Repository', href: gh('pill-blister-classifier') }],
  },
]

// Work in progress, shown on its own.
export const current = {
  id: 'shakedown',
  title: 'Shakedown',
  status: 'In progress',
  image: '/projects/shakedown.webp',
  tagline: 'Test-deploy every pull request before it is merged.',
  description: 'A GitHub Action that compares a pull request with main once both are running.',
  highlights: [
    'Startup, memory, image size and vulnerabilities, side by side; serious regressions block the merge',
    'Next step: test-deploys in a temporary [[Kubernetes]] cluster',
  ],
  stack: ['Python', 'Docker', 'Kubernetes (kind)', 'Git', 'GitHub Actions', 'Linux'],
  links: [{ label: 'Repository', href: gh('shakedown') }],
}

// Everything else, one line each.
export const more = [
  {
    id: 'cinecasa',
    title: 'Cinecasa',
    summary:
      'Home cinema desktop app that turns local movie and TV folders into a streaming-style library, with TMDB artwork and playback that resumes at the exact second you stopped.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'TMDB API'],
    links: [{ label: 'Repository', href: gh('cinecasa') }],
  },
  {
    id: 'realtime-face-detection',
    title: 'Real-time Face Detection',
    summary: 'Webcam face detection with a Tkinter GUI and an image CLI, built as the vision module for a robot.',
    stack: ['Python', 'OpenCV', 'dlib'],
    links: [{ label: 'Repository', href: gh('realtime-face-detection') }],
  },
  {
    id: 'clipsync',
    title: 'ClipSync',
    summary: 'Syncs copied text between two computers on the same network, in both directions, over TCP sockets.',
    stack: ['Python', 'PyQt6', 'Sockets'],
    links: [{ label: 'Repository', href: gh('clipsync') }, { label: 'Download', href: `${gh('clipsync')}/releases/latest` }],
  },
  {
    id: 'memory-monitor',
    title: 'Memory Monitor',
    summary: 'Tiny Windows tray app (~10 MB) that logs RAM usage to CSV to find out how much memory you really need.',
    stack: ['C#', '.NET 8', 'Win32'],
    links: [{ label: 'Repository', href: gh('memory-monitor') }, { label: 'Download', href: `${gh('memory-monitor')}/releases/latest` }],
  },
  {
    id: 'proxiwash-dryer-notifier',
    title: 'ProxiWash Dryer Notifier',
    summary: 'Watches a residence laundry dryer on the ProxiWash website with Selenium and alerts you when the cycle ends.',
    stack: ['Python', 'Selenium', 'CustomTkinter'],
    links: [{ label: 'Repository', href: gh('proxiwash-dryer-notifier') }, { label: 'Download', href: `${gh('proxiwash-dryer-notifier')}/releases/latest` }],
  },
  {
    id: 'astar-pathfinding-visualizer',
    title: 'A* Pathfinding Visualizer',
    summary: 'Interactive maze editor that shows the A* search algorithm exploring the grid step by step, written from scratch without a pathfinding library.',
    stack: ['Python', 'Pygame', 'Tkinter'],
    links: [{ label: 'Repository', href: gh('astar-pathfinding-visualizer') }],
  },
  {
    id: 'arduino-joystick-controller',
    title: 'Arduino Joystick Controller',
    summary: 'DIY game controller: mouse steering plus an Arduino joystick for throttle and brake, merged into a virtual gamepad.',
    stack: ['Arduino', 'Python', 'vJoy', 'AutoHotkey'],
    links: [{ label: 'Repository', href: gh('Arduino-Joystick-Controller-and-Mouse-Steering') }],
  },
]

// Shown in the first screen: each field with its projects; every name jumps to its card.
// Each field lists its projects line by line; a line can hold several, shown comma-separated.
export const projectMap = [
  {
    group: 'Artificial Intelligence & ML',
    lines: [[['F1 Chatbot', 'f1-chatbot'], ['Flappy Fish ML', 'flappy-fish-neat-ai']], [['Spotify Chatbot', 'spotify-chatbot']]],
  },
  { group: 'DevOps & Cloud', lines: [[['Azure Pipeline', 'azure-devops-cicd-pipeline']], [['Shakedown', 'now']]] },
  { group: 'Computing & Automation', lines: [[['SpiderBot', 'spiderbot-rust-detection']], [['Pill Classifier', 'pill-blister-classifier']]] },
]
