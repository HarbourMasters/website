export interface LockedPort {
  id: string
  name: string
  tagline: string
  icon: string
}


// Upcoming ports rendered ONLY in the GitHubStats grid as locked placeholders.
 
export const UPCOMING_PORTS: LockedPort[] = [
  { id: 'paperboat', name: 'Paperboat', tagline: 'Paper Mario 64', icon: '/icons/games/Paperboat.webp' },
  { id: 'township', name: 'Township', tagline: 'Animal Crossing', icon: '/icons/games/Township.webp' },
  { id: 'couragereborn', name: 'Courage Reborn', tagline: 'Twilight Princess', icon: '/icons/games/CourageReborn.webp' },
]
