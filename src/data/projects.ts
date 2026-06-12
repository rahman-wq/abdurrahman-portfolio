export type ProjectStatus = 'active' | 'live' | 'dev' | 'planning';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  url: string | null;
}

export const projects: Project[] = [
  {
    id: 'P1',
    title: 'APLARANJA',
    subtitle: 'Manajemen Aset PJU — Dishub Mataram',
    description:
      'Sistem manajemen aset lampu jalan untuk Dinas Perhubungan Kota Mataram. ' +
      '3.000+ tiang PJU terdaftar dengan QR Code unik per aset, ' +
      'inventory spare part, laporan kerusakan lapangan, dan dashboard analitik realtime.',
    status: 'active',
    statusLabel: 'Active · Internal',
    stack: ['Laravel 10', 'Livewire', 'MySQL', 'QR Code', 'Tailwind'],
    url: null,
  },
  {
    id: 'P2',
    title: 'ATCS CCTV Publik',
    subtitle: 'Dashboard CCTV 17 Simpang — Dishub Mataram',
    description:
      'Dashboard pemantauan CCTV lalu lintas 17 simpang kota Mataram secara realtime. ' +
      '42 channel kamera via MediaMTX HLS relay, low-latency streaming, ' +
      'dan integrasi peta interaktif berbasis Leaflet.',
    status: 'active',
    statusLabel: 'Active · Internal',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'MediaMTX', 'HLS.js', 'Leaflet', 'FastAPI', 'Python'],
    url: null,
  },
  {
    id: 'P3',
    title: 'Kios Aminah POS',
    subtitle: 'Sistem Kasir Web — rotigrosirntb.com',
    description:
      'Aplikasi kasir web offline-first untuk kios grosir roti AOK di Mataram. ' +
      'Struk thermal, manajemen konsinyasi DN, piutang pelanggan, ' +
      'portal investor dengan kalkulasi bagi hasil, monitor TV realtime, ' +
      'dan modul Web POS multi-kasir.',
    status: 'active',
    statusLabel: 'Active · Live',
    stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Clerk', 'IndexedDB', 'Tailwind', 'PWA'],
    url: 'https://rotigrosirntb.com',
  },
  {
    id: 'P5',
    title: 'AI & Automation Tools',
    subtitle: 'Integrasi AI & Otomasi ke Workflow Pemerintahan',
    description:
      'Ekosistem otomasi terintegrasi untuk mendukung kerja teknis pemerintahan. ' +
      'REST API & Telegram Bot untuk monitoring sistem, skrip otomasi Linux, ' +
      'dan pipeline data berbasis Python untuk kebutuhan analisis lapangan.',
    status: 'active',
    statusLabel: 'Active',
    stack: ['Python', 'Linux', 'Bash', 'REST API', 'Telegram Bot', 'FastAPI'],
    url: null,
  },
  {
    id: 'P6',
    title: 'Smart Kandang IoT',
    subtitle: 'Monitoring Kandang Broiler — Lombok Tengah',
    description:
      'Sistem IoT pemantauan kandang ayam broiler 13.000 ekor. ' +
      'Sensor suhu, kelembapan, dan amonia per zona; alert Telegram; ' +
      'dashboard Grafana; dan firmware ESP32 via MQTT.',
    status: 'planning',
    statusLabel: 'Coming Soon',
    stack: ['Vite', 'React', 'Three.js', 'TypeScript', 'ESP32', 'ESP8266', 'MQTT', 'Raspberry Pi', 'InfluxDB', 'Grafana', 'Node-RED', 'Cloudflare Pages'],
    url: 'https://smartfarm.abdurrahman.sbs',
  },
];
