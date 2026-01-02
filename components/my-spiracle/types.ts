// =============================================================================
// MY SPIRACLE - SHARED TYPES
// Types used across the My Spiracle profile components
// =============================================================================

import type { LucideIcon } from "lucide-react";

// Book-related types
export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
}

export interface LibraryBook extends Book {
  status: "completed" | "in_progress" | "abandoned";
  progress: number;
  finishedDate: string | null;
}

export interface CurrentlyListeningBook extends Book {
  narrator: string;
  progress: number;
  timeRemaining: string;
  lastListened: string;
}

// Collection types
export interface CollectionUser {
  id: string;
  name: string;
  initials: string;
  color: string;
}

export interface CollectionSocialData {
  count: number;
  featured: CollectionUser[];
}

export interface Collection {
  id: string;
  name: string;
  isPublic: boolean;
  bookCount: number;
  covers: string[];
  savedBy: CollectionSocialData | null;
  commentCount: number;
}

// Book club types
export interface BookClub {
  id: string;
  name: string;
  memberCount: number;
  currentBook: Book;
  dueDate: string;
}

// Review types
export interface Review {
  id: string;
  book: Book;
  rating: number;
  excerpt: string;
  helpfulCount: number;
}

// Achievement types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  earnedDate: string;
}

// Genre/Stats types
export interface FavouriteGenre {
  name: string;
  percentage: number;
  color: string;
}

export interface ListeningStats {
  totalListeningHours: number;
  booksCompleted: number;
  booksThisYear: number;
  currentStreak: number;
  averagePerWeek: number;
}

export interface ListeningPersonality {
  title: string;
  description: string;
}

// Taste profile types
export interface TasteDimension {
  name: string;
  primary: { tag: string; percentage: number };
  secondary: { tag: string; percentage: number } | null;
  tertiary?: { tag: string; percentage: number } | null;
}

export interface TasteProfile {
  booksAnalyzed: number;
  dimensions: TasteDimension[];
  essence: string;
}

// AI suggestion type
export interface AISuggestion {
  reason: string;
  book: Book;
}

// Full profile type (for composition)
export interface UserProfile {
  id: string;
  screenName: string;
  displayName: string;
  avatar: string;
  bio: string;
  memberSince: string;
  memberMonths: number;
  isProfilePublic: boolean;
  stats: ListeningStats;
  listeningPersonality: ListeningPersonality;
  favouriteGenres: FavouriteGenre[];
  currentlyListening: CurrentlyListeningBook;
  upNext: Book[];
  aiSuggestion: AISuggestion;
  collections: Collection[];
  library: LibraryBook[];
  shortlist: Book[];
  bookClubs: BookClub[];
  reviews: Review[];
  totalHelpfulVotes: number;
  tasteProfile: TasteProfile;
  achievements: Achievement[];
}
