const gh = (name) => `https://github.com/aziz-hizem/${name}`

// Featured work, in priority order: DevOps first, then AI, then software.
export const featured = [
  {
    id: 'azure-devops-cicd-pipeline',
    title: 'Azure DevOps CI/CD Pipeline',
    area: 'DevOps',
    image: '/projects/azure-devops-cicd-pipeline.webp',
    tallImage: true, // portrait diagram: narrower image column, capped height
    tagline: 'A complete software delivery pipeline on Azure, built during a two-month DevOps internship at Nouvelair (Tunisian airline).',
    description:
      'Build, tests, secret scanning and a SonarQube quality gate that blocks bad code, then Docker packaging and promotion through Dev, Staging and Production with a manual approval, all on Terraform-managed infrastructure.',
    highlights: [
      'Azure Pipelines with an enforced quality gate: run 1 failed on purpose, run 2 passed (evidence kept in the repo)',
      'Container build pushed to Azure Container Apps, Azure SQL migrations with Alembic',
      'Infrastructure as code with Terraform',
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
      'Text-to-SQL with schema and few-shot prompting: a small model writes the SQL, a larger one the answer',
      'Safe execution: only SELECT statements run, on a database opened read-only',
      'React chat UI with 11 switchable team themes',
    ],
    stack: ['React', 'FastAPI', 'SQLite', 'Groq API', 'GPT-OSS'],
    links: [{ label: 'Repository', href: gh('f1-chatbot') }],
  },
  {
    id: 'spotify-chatbot',
    title: 'Spotify Chatbot',
    area: 'LLM · RAG',
    image: '/projects/spotify-chatbot.webp',
    tagline: 'Manage Spotify playlists by chatting in plain English, plus a RAG experiment that lets an LLM write code from the Spotify API docs.',
    description:
      'The chat app turns a request like "add Blinding Lights to my Road Trip playlist" into a strict JSON intent, which a FastAPI backend runs on the Spotify Web API. The RAG experiment goes further: the API reference is scraped and embedded into a vector store, and the endpoints most relevant to a request are retrieved so the model can write code for actions nobody coded by hand.',
    highlights: [
      'Retrieval-augmented generation (experimental): Playwright scraper, Sentence Transformers embeddings, ChromaDB retrieval of the top 5 endpoints',
      'Retrieved docs fed into a Jinja2 prompt so the LLM generates the Python for the request',
      'Chat app: few-shot intent extraction in JSON mode, OAuth refresh-token flow, batch track adding',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Groq API', 'ChromaDB', 'Sentence Transformers', 'Spotify Web API'],
    links: [{ label: 'Repository', href: gh('spotify-chatbot') }],
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
  id: 'shakedown',
  title: 'Shakedown',
  status: 'In progress',
  image: '/projects/shakedown.webp',
  tagline: 'Test-deploy every pull request before it is merged.',
  description:
    'A GitHub Action that builds both the pull request and the main branch, runs them side by side in CI and tells the reviewer what the change does once it is packaged and running: does it still start, how fast, how much memory, how big the image is and which vulnerabilities it adds. Serious regressions block the merge, with a maintainer override.',
  works: [
    'Installable command-line tool, the same one that will run in CI',
    'Builds main and the pull request straight from git history and compares them',
    'Markdown report, plus a merge gate through exit codes (pass, regression, misconfigured)',
    'A sample app that shows the point: dropping "-slim" from one base image makes it 9× bigger',
  ],
  roadmap: [
    'GitHub Action that runs on every pull request and posts the report as a comment',
    'Test-deploy both versions in a temporary Kubernetes cluster (kind)',
    'Startup time, memory and Linux image checks (added packages, running as root)',
    'Vulnerability comparison with Trivy',
    'Results on real pull requests from open-source projects',
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
    id: 'astar-pathfinding-visualizer',
    title: 'A* Pathfinding Visualizer',
    summary: 'Interactive maze editor that shows the A* search algorithm exploring the grid step by step, written from scratch without a pathfinding library.',
    stack: ['Python', 'Pygame', 'Tkinter'],
    links: [{ label: 'Repository', href: gh('astar-pathfinding-visualizer') }],
  },
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
    id: 'arduino-joystick-controller',
    title: 'Arduino Joystick Controller',
    summary: 'DIY game controller: mouse steering plus an Arduino joystick for throttle and brake, merged into a virtual gamepad.',
    stack: ['Arduino', 'Python', 'vJoy', 'AutoHotkey'],
    links: [{ label: 'Repository', href: gh('Arduino-Joystick-Controller-and-Mouse-Steering') }],
  },
]
