// =============================================================================
// MY SPIRACLE - SAMPLE DATA
// Sample data for style guide display and development
// =============================================================================

import {
  BookOpen,
  Moon,
  Leaf,
  MessageSquare,
} from "lucide-react";
import type {
  UserProfile,
  Book,
  LibraryBook,
  Collection,
  BookClub,
  Review,
  Achievement,
  FavouriteGenre,
  TasteProfile,
  NotificationSettings,
  EmailPreferences,
  ConnectedAccount,
  Subscription,
  PaymentMethod,
  BillingHistoryEntry,
  Purchase,
  Address,
} from "./types";

// =============================================================================
// ELEANOR VANCE - Sample User Profile
// A moderately active member with a warm, literary presence
// =============================================================================

export const sampleProfile: UserProfile = {
  id: "eleanor-vance",
  screenName: "eleanor.v",
  displayName: "Eleanor Vance",
  avatar: "/images/avatar-eleanor.jpg",
  bio: "Midnight reader. Historical fiction devotee. Always looking for the next unreliable narrator.",
  memberSince: "November 2024",
  memberMonths: 14,
  isProfilePublic: true,

  stats: {
    totalListeningHours: 312,
    booksCompleted: 23,
    booksThisYear: 8,
    currentStreak: 12,
    averagePerWeek: 5.2,
  },

  listeningPersonality: {
    title: "The Night Owl Scholar",
    description: "You listen most between 10pm and 1am, favouring slow-burning literary fiction. You savour books rather than race through them.",
  },

  favouriteGenres: [
    { name: "Literary Fiction", percentage: 45, color: "bg-spiracle-forest" },
    { name: "Historical Fiction", percentage: 30, color: "bg-spiracle-burgundy" },
    { name: "Mystery", percentage: 15, color: "bg-spiracle-terracotta" },
    { name: "Biography", percentage: 10, color: "bg-spiracle-slate" },
  ],

  currentlyListening: {
    id: "gilead",
    title: "Gilead",
    author: "Marilynne Robinson",
    narrator: "Tim Jerome",
    coverUrl: "/images/covers/gilead.jpg",
    progress: 62,
    timeRemaining: "4h 12m remaining",
    lastListened: "2 hours ago",
  },

  upNext: [
    {
      id: "the-secret-history",
      title: "The Secret History",
      author: "Donna Tartt",
      coverUrl: "/images/covers/secret-history.jpg",
    },
    {
      id: "wolf-hall",
      title: "Wolf Hall",
      author: "Hilary Mantel",
      coverUrl: "/images/covers/wolf-hall.jpg",
    },
  ],

  aiSuggestion: {
    reason: "Based on your love of unreliable narrators and historical settings",
    book: {
      id: "atonement",
      title: "Atonement",
      author: "Ian McEwan",
      coverUrl: "/images/covers/atonement.jpg",
    },
  },

  collections: [
    {
      id: "unreliable-narrators",
      name: "Unreliable Narrators",
      isPublic: true,
      bookCount: 8,
      covers: [
        "/images/covers/gone-girl.jpg",
        "/images/covers/we-need-to-talk.jpg",
        "/images/covers/the-silent-patient.jpg",
      ],
      savedBy: {
        count: 47,
        featured: [
          { id: "sarah-m", name: "Sarah M.", initials: "SM", color: "bg-spiracle-slate" },
          { id: "james-t", name: "James T.", initials: "JT", color: "bg-spiracle-forest" },
          { id: "maria-l", name: "Maria L.", initials: "ML", color: "bg-spiracle-burgundy" },
        ],
      },
      commentCount: 12,
    },
    {
      id: "comfort-reads",
      name: "Comfort Reads",
      isPublic: false,
      bookCount: 5,
      covers: [
        "/images/covers/pride-prejudice.jpg",
        "/images/covers/anne-green-gables.jpg",
        "/images/covers/secret-garden.jpg",
      ],
      savedBy: null,
      commentCount: 0,
    },
  ],

  library: [
    { id: "remains-day", title: "The Remains of the Day", author: "Kazuo Ishiguro", status: "completed", progress: 100, finishedDate: "Dec 2025" },
    { id: "circe", title: "Circe", author: "Madeline Miller", status: "completed", progress: 100, finishedDate: "Nov 2025" },
    { id: "gilead", title: "Gilead", author: "Marilynne Robinson", status: "in_progress", progress: 62, finishedDate: null },
    { id: "normal-people", title: "Normal People", author: "Sally Rooney", status: "completed", progress: 100, finishedDate: "Oct 2025" },
    { id: "pachinko", title: "Pachinko", author: "Min Jin Lee", status: "completed", progress: 100, finishedDate: "Sep 2025" },
    { id: "beloved", title: "Beloved", author: "Toni Morrison", status: "abandoned", progress: 23, finishedDate: null },
    { id: "war-and-peace", title: "War and Peace", author: "Leo Tolstoy", status: "completed", progress: 100, finishedDate: "Aug 2025" },
    { id: "middlemarch", title: "Middlemarch", author: "George Eliot", status: "completed", progress: 100, finishedDate: "Jul 2025" },
    { id: "jane-eyre", title: "Jane Eyre", author: "Charlotte Brontë", status: "completed", progress: 100, finishedDate: "Jun 2025" },
    { id: "the-goldfinch", title: "The Goldfinch", author: "Donna Tartt", status: "in_progress", progress: 15, finishedDate: null },
    { id: "great-expectations", title: "Great Expectations", author: "Charles Dickens", status: "completed", progress: 100, finishedDate: "May 2025" },
    { id: "wuthering-heights", title: "Wuthering Heights", author: "Emily Brontë", status: "completed", progress: 100, finishedDate: "Apr 2025" },
  ],

  shortlist: [
    { id: "hamnet", title: "Hamnet", author: "Maggie O'Farrell", coverUrl: "/images/covers/hamnet.jpg" },
    { id: "piranesi", title: "Piranesi", author: "Susanna Clarke", coverUrl: "/images/covers/piranesi.jpg" },
    { id: "klara", title: "Klara and the Sun", author: "Kazuo Ishiguro", coverUrl: "/images/covers/klara.jpg" },
  ],

  bookClubs: [
    {
      id: "marginalia-society",
      name: "The Marginalia Society",
      memberCount: 24,
      currentBook: {
        id: "master-margarita",
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        coverUrl: "/images/covers/master-margarita.jpg",
      },
      dueDate: "Jan 28",
    },
  ],

  reviews: [
    {
      id: "review-1",
      book: { id: "remains-day", title: "The Remains of the Day", author: "Kazuo Ishiguro", coverUrl: "/images/covers/remains-day.jpg" },
      rating: 5,
      excerpt: "Stevens' quiet devastation unfolds with such restraint that when it finally breaks through, you're undone...",
      helpfulCount: 14,
    },
    {
      id: "review-2",
      book: { id: "circe", title: "Circe", author: "Madeline Miller", coverUrl: "/images/covers/circe.jpg" },
      rating: 4,
      excerpt: "Miller gives voice to a character who spent millennia voiceless. The audiobook performance is exceptional...",
      helpfulCount: 8,
    },
    {
      id: "review-3",
      book: { id: "normal-people", title: "Normal People", author: "Sally Rooney", coverUrl: "/images/covers/normal-people.jpg" },
      rating: 4,
      excerpt: "The intimacy of the narration makes you feel like you're eavesdropping on something private...",
      helpfulCount: 6,
    },
    {
      id: "review-4",
      book: { id: "pachinko", title: "Pachinko", author: "Min Jin Lee", coverUrl: "/images/covers/pachinko.jpg" },
      rating: 5,
      excerpt: "A sweeping family saga that never loses sight of the individual. Four generations, one unforgettable story...",
      helpfulCount: 11,
    },
  ],

  totalHelpfulVotes: 39,

  tasteProfile: {
    booksAnalyzed: 23,
    dimensions: [
      {
        name: "Mood",
        primary: { tag: "dark", percentage: 65 },
        secondary: { tag: "hopeful", percentage: 20 },
        tertiary: { tag: "unsettling", percentage: 15 },
      },
      {
        name: "Pace",
        primary: { tag: "measured", percentage: 70 },
        secondary: { tag: "unputdownable", percentage: 20 },
        tertiary: { tag: "fast", percentage: 10 },
      },
      {
        name: "Style",
        primary: { tag: "literary", percentage: 80 },
        secondary: { tag: "accessible", percentage: 20 },
        tertiary: null,
      },
      {
        name: "Structure",
        primary: { tag: "character-driven", percentage: 60 },
        secondary: { tag: "plot-driven", percentage: 40 },
        tertiary: null,
      },
      {
        name: "Experience",
        primary: { tag: "thought-provoking", percentage: 55 },
        secondary: { tag: "immersive", percentage: 45 },
        tertiary: null,
      },
    ],
    essence: "You're drawn to stories that linger — the kind where characters haunt you long after the last chapter. You prefer the journey to the destination, favouring atmosphere and interiority over breakneck pace.",
  },

  achievements: [
    {
      id: "first-chapter",
      name: "First Chapter",
      description: "Completed your first audiobook",
      icon: BookOpen,
      earnedDate: "Nov 2024",
    },
    {
      id: "night-listener",
      name: "Night Listener",
      description: "10 hours listened after midnight",
      icon: Moon,
      earnedDate: "Dec 2024",
    },
    {
      id: "genre-wanderer",
      name: "Genre Wanderer",
      description: "Explored 5 different genres",
      icon: Leaf,
      earnedDate: "Mar 2025",
    },
    {
      id: "thoughtful-critic",
      name: "Thoughtful Critic",
      description: "Wrote 3 reviews others found helpful",
      icon: MessageSquare,
      earnedDate: "Jun 2025",
    },
  ],
};

// Export individual data slices for isolated component demos
export const sampleStats = sampleProfile.stats;
export const sampleGenres = sampleProfile.favouriteGenres;
export const samplePersonality = sampleProfile.listeningPersonality;
export const sampleTasteProfile = sampleProfile.tasteProfile;
export const sampleCurrentlyListening = sampleProfile.currentlyListening;
export const sampleUpNext = sampleProfile.upNext;
export const sampleAiSuggestion = sampleProfile.aiSuggestion;
export const sampleCollections = sampleProfile.collections;
export const sampleLibrary = sampleProfile.library;
export const sampleShortlist = sampleProfile.shortlist;
export const sampleBookClubs = sampleProfile.bookClubs;
export const sampleReviews = sampleProfile.reviews;
export const sampleAchievements = sampleProfile.achievements;

// =============================================================================
// ACCOUNT SETTINGS SAMPLE DATA
// =============================================================================

export const sampleNotificationSettings: NotificationSettings = {
  newReleases: true,
  bookClubUpdates: true,
  recommendations: false,
  weeklyDigest: true,
};

export const sampleEmailPreferences: EmailPreferences = {
  marketing: false,
  newsletter: true,
  personalizedRecommendations: true,
};

export const sampleConnectedAccounts: Record<string, ConnectedAccount> = {
  goodreads: { connected: true, username: "eleanor.vance" },
  apple: { connected: false },
};

export const sampleSubscription: Subscription = {
  plan: "full",
  planName: "Full Membership",
  billingPeriod: "annually",
  nextBillingDate: "15 January 2027",
  price: "£89.99/year",
  creditsRemaining: 2,
  creditsPerMonth: 1,
  features: [
    "1 audiobook credit per month",
    "Unlimited streaming of 500+ classics",
    "Early access to new releases",
    "Exclusive member events",
  ],
};

export const samplePaymentMethod: PaymentMethod = {
  type: "visa",
  last4: "4242",
  expiryDate: "03/28",
  isDefault: true,
};

export const sampleBillingHistory: BillingHistoryEntry[] = [
  {
    id: "inv-001",
    date: "15 Dec 2025",
    description: "Annual subscription renewal",
    amount: "£89.99",
    status: "paid",
    invoiceUrl: "/invoices/inv-001.pdf",
  },
  {
    id: "inv-002",
    date: "1 Dec 2025",
    description: "Gift audiobook — Pachinko",
    amount: "£12.99",
    status: "paid",
    invoiceUrl: "/invoices/inv-002.pdf",
  },
  {
    id: "inv-003",
    date: "15 Nov 2024",
    description: "Annual subscription",
    amount: "£89.99",
    status: "paid",
    invoiceUrl: "/invoices/inv-003.pdf",
  },
];

export const samplePurchases: Purchase[] = [
  {
    id: "pur-001",
    book: { title: "The Remains of the Day", author: "Kazuo Ishiguro" },
    purchaseType: "credit",
    date: "Dec 2025",
  },
  {
    id: "pur-002",
    book: { title: "Circe", author: "Madeline Miller" },
    purchaseType: "bought",
    date: "Nov 2025",
    price: "£14.99",
    receiptUrl: "/receipts/pur-002.pdf",
  },
  {
    id: "pur-003",
    book: { title: "Pachinko", author: "Min Jin Lee" },
    purchaseType: "gift_sent",
    date: "Dec 2025",
    price: "£12.99",
    recipient: "Sarah Mitchell",
  },
  {
    id: "pur-004",
    book: { title: "Lessons in Chemistry", author: "Bonnie Garmus" },
    purchaseType: "gift_received",
    date: "Nov 2025",
  },
  {
    id: "pur-005",
    book: { title: "A Gentleman in Moscow", author: "Amor Towles" },
    purchaseType: "credit",
    date: "Oct 2025",
  },
  {
    id: "pur-006",
    book: { title: "The House in the Cerulean Sea", author: "TJ Klune" },
    purchaseType: "bought",
    date: "Sep 2025",
    price: "£11.99",
  },
];

export const sampleDeliveryAddress: Address = {
  id: "addr-001",
  label: "Home",
  name: "Eleanor Vance",
  addressLines: ["42 Bloomsbury Way", "London", "WC1A 2SR", "United Kingdom"],
  isDefault: true,
};

export const sampleGiftAddresses: Address[] = [
  {
    id: "addr-002",
    label: "Sarah's Birthday",
    name: "Sarah Mitchell",
    addressLines: ["15 Maple Street", "Manchester", "M1 4BH", "United Kingdom"],
  },
  {
    id: "addr-003",
    label: "Mum",
    name: "Margaret Vance",
    addressLines: ["7 Rose Cottage", "Burford", "Cotswolds", "GL54 1AA", "United Kingdom"],
  },
];
