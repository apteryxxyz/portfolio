import { Globe } from 'lucide-icons';
import {
  SiChromewebstore as ChromeWebStore,
  SiDiscord as Discord,
  SiGithub as Github,
  SiGoogleplay as GooglePlay,
  SiSteam as Steam,
} from 'simple-icons';
import { installs, likes } from './fetchers.ts';

export interface Project {
  status: ProjectStatus;
  id: string;
  name: string;
  description: string;
  types: ProjectType[];
  roles: ProjectRole[];
  technologies: string[];
  timeline?: ProjectTimeline;
  providers: ProjectProvider[];
  colour?: `#${string}`;
  featured?: boolean;
}

export enum ProjectStatus {
  Active = 'Active',
  Passive = 'Passive',
  OnHold = 'On Hold',
  Archived = 'Archived',
}

export enum ProjectType {
  Website = 'Website',
  Api = 'API',
  Mobile = 'Mobile',
  Discord = 'Discord',
  Extension = 'Extension',
  Plugin = 'Plugin',
  Library = 'Library',
}

export enum ProjectRole {
  Developer = 'Developer',
}

export interface ProjectTimeline {
  start: Date;
  end?: Date;
}

export interface ProjectProvider {
  icon?: React.FC<{ className?: string }>;
  name: string;
  url?: string;
  installs?: number | (() => Promise<number>);
  likes?: number | (() => Promise<number>);
}

//

export const projects: Project[] = [
  {
    status: ProjectStatus.Active,
    id: 'evaluate',
    name: 'Evaluate',
    description:
      'Test code in any programming language with Evaluate! Quickly run snippets with optional input and command-line arguments using our easy online platform. Created using a multitude of technologies and powered by the Piston execution engine.',
    types: [ProjectType.Website, ProjectType.Discord, ProjectType.Extension],
    roles: [ProjectRole.Developer],
    technologies: ['TypeScript', 'React', 'Next.js', 'TailwindCSS'],
    timeline: {
      start: new Date('2022-01-01'),
    },
    providers: [
      {
        icon: Globe,
        name: 'Website',
        url: 'https://evaluate.run/',
      },
      {
        icon: Discord,
        name: 'Discord App',
        url: 'https://evaluate.run/products/discord-bot',
        installs: 363 + 441,
      },
      {
        icon: ChromeWebStore,
        name: 'Browser Extension',
        url: 'https://evaluate.run/products/browser-extension',
        installs: 20 + 1,
      },
    ],
    colour: '#2fc186',
    featured: true,
  },

  {
    status: ProjectStatus.Active,
    id: 'jacksucksatlife-soundboard',
    name: 'JackSucksAtLife Soundboard',
    description:
      'A soundboard app featuring many of the great phrases the content creator JackSucksAtLife has said, from questions to insults and even some strange noises.',
    types: [ProjectType.Mobile],
    roles: [ProjectRole.Developer],
    technologies: [
      'TypeScript',
      'React',
      'React Native',
      'Expo',
      'TailwindCSS',
    ],
    timeline: {
      start: new Date('2023-11-28'),
    },
    providers: [
      {
        icon: GooglePlay,
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=xyz.apteryx.jacksucksatlife',
        installs: 1500,
      },
    ],
    colour: '#39add8',
  },

  {
    status: ProjectStatus.Active,
    id: 'next-ws',
    name: 'next-ws',
    description:
      'next-ws is a simple package that adds WebSocket support to your Next.js app directory. With next-ws, you no longer need to create a separate WebSocket server to handle WebSocket connections. Instead, you can handle WebSocket connections directly in your Next.js API routes.',
    types: [ProjectType.Library],
    roles: [ProjectRole.Developer],
    technologies: ['TypeScript'],
    providers: [
      {
        name: 'NPM',
        installs: installs.npm('next-ws'),
      },
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/apteryxxyz/next-ws',
        likes: likes.github('apteryxxyz/next-ws'),
      },
    ],
  },

  {
    status: ProjectStatus.OnHold,
    id: 'darkviperau-soundboard',
    name: 'DarkViperAU Soundboard',
    description:
      'A soundboard app featuring many of the great phrases the content creator DarkViperAU has said, from questions to insults and even some strange noises.',
    types: [ProjectType.Mobile],
    roles: [ProjectRole.Developer],
    technologies: [
      'TypeScript',
      'React',
      'React Native',
      'Expo',
      'TailwindCSS',
    ],
    timeline: {
      start: new Date('2020-01-16'),
    },
    providers: [
      {
        icon: GooglePlay,
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.blackbox.darkviperau',
        installs: 2100,
      },
    ],
    colour: '#242448',
  },

  {
    status: ProjectStatus.Active,
    id: 'enhanced-ms',
    name: 'enhanced-ms',
    description:
      'enhanced-ms is a flexible library for formatting milliseconds into human-readable durations and vice versa. It is an enhanced version of the popular ms with support for multiple inputs, localisation, and more options.',
    types: [ProjectType.Library],
    roles: [ProjectRole.Developer],
    technologies: ['TypeScript'],
    providers: [
      {
        name: 'NPM',
        installs: installs.npm('enhanced-ms'),
      },
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/apteryxxyz/enhanced-ms',
        likes: likes.github('apteryxxyz/enhanced-ms'),
      },
    ],
  },

  {
    status: ProjectStatus.Active,
    id: 'steam-plugin-non-steam-playtimes',
    name: 'Non-Steam Playtimes',
    description: 'A Steam plugin that tracks playtime for non-Steam games.',
    types: [ProjectType.Plugin],
    roles: [ProjectRole.Developer],
    technologies: ['Python', 'TypeScript'],
    providers: [
      {
        icon: Steam,
        name: 'Millennium',
        url: 'https://steambrew.app/plugin?id=02bed50d10a8',
        installs: installs.millennium('02bed50d10a8'),
      },
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/apteryxxyz/steam-plugin-non-steam-playtimes',
        likes: likes.github('apteryxxyz/steam-plugin-non-steam-playtimes'),
      },
    ],
  },

  {
    status: ProjectStatus.Active,
    id: 'jellyfin-plugin-air-times',
    name: 'AirTimes',
    description:
      'Air Times is a Jellyfin plugin that provides accurate, localised series air times using data from TheTVDB.',
    types: [ProjectType.Plugin],
    roles: [ProjectRole.Developer],
    technologies: ['C#'],
    providers: [
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/apteryxxyz/jellyfin-plugin-air-times',
        likes: likes.github('apteryxxyz/jellyfin-plugin-air-times'),
      },
    ],
  },

  {
    status: ProjectStatus.Passive,
    id: 'qwaroo',
    name: 'Qwaroo',
    description:
      'A website that offers a variety of fun and challenging games based on comparing different aspects of the world, such as population, area, age, and more. Created using Next.js and written custom scripts to fetch game data from various sources, often by web scraping.',
    types: [ProjectType.Website],
    roles: [ProjectRole.Developer],
    technologies: ['TypeScript', 'React', 'Next.js', 'TailwindCSS'],
    timeline: {
      start: new Date('2023-11-01'),
    },
    providers: [
      {
        icon: Globe,
        name: 'Website',
        url: 'https://qwaroo.vercel.app/',
      },
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/apteryxxyz/qwaroo',
        likes: likes.github('apteryxxyz/qwaroo'),
      },
    ],
    colour: '#3399ff',
  },

  {
    status: ProjectStatus.Archived,
    id: 'covid-in-nz',
    name: 'COVID in NZ',
    description:
      'COVID in NZ was created to help people understand the impact of COVID-19 in New Zealand. It provided a comprehensive overview of the pandemic, including information on the number of cases, deaths, and recoveries in New Zealand, as well as information on the spread of the virus in the country.',
    types: [ProjectType.Website, ProjectType.Api],
    roles: [ProjectRole.Developer],
    technologies: ['TypeScript', 'React', 'Next.js'],
    timeline: {
      start: new Date('2021-10-01'),
      end: new Date('2022-12-01'),
    },
    providers: [
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/apteryxxyz/covidinnz',
        likes: likes.github('apteryxxyz/covidinnz'),
      },
    ],
    colour: '#ffe119',
  },

  {
    status: ProjectStatus.Archived,
    id: 'werewolves-companion',
    name: 'Werewolves Companion',
    description:
      'Wolvesville Companion was an Android app and Discord bot made for the players of Wolvesville, by the players. It contained helpful features such as game information, role information, tips & tricks (submitted by players), media links and more.',
    types: [ProjectType.Mobile, ProjectType.Discord],
    roles: [ProjectRole.Developer],
    technologies: ['JavaScript'],
    timeline: {
      start: new Date('2018-07-18'),
      end: new Date('2021-04-05'),
    },
    providers: [
      {
        name: 'Google Play',
        installs: 1000,
      },
      {
        icon: Github,
        name: 'Source Code',
        url: 'https://github.com/ApteryxXYZ/Werewolf-Companion',
        likes: likes.github('ApteryxXYZ/Werewolf-Companion'),
      },
    ],
    colour: '#ff4183',
  },
];
