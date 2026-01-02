// =============================================================================
// MY SPIRACLE COMPONENTS
// Profile page components for the Spiracle audiobook platform
// =============================================================================

// Types
export * from "./types";

// Sample data for style guide
export * from "./sample-data";

// Helper components
export {
  Section,
  SectionLabel,
  BookCover,
  SquareBookCover,
  UserAvatar,
  ProgressBar,
  WatercolorBar,
  StarRating,
} from "./helpers";

// Visualization components
export { TasteConstellation } from "./taste-constellation";
export type { TasteConstellationProps } from "./taste-constellation";

export { DiscoveryTreeTeaser } from "./discovery-tree-teaser";
export type { DiscoveryTreeTeaserProps } from "./discovery-tree-teaser";

// Section components
export { ProfileHeader } from "./profile-header";
export type { ProfileHeaderProps } from "./profile-header";

export { ListeningLife } from "./listening-life";
export type { ListeningLifeProps } from "./listening-life";

export { ReadingConstellation } from "./reading-constellation";
export type { ReadingConstellationProps } from "./reading-constellation";

export { CurrentlyListening } from "./currently-listening";
export type { CurrentlyListeningProps } from "./currently-listening";

export { Collections } from "./collections";
export type { CollectionsProps } from "./collections";

export { YourLibrary } from "./your-library";
export type { YourLibraryProps } from "./your-library";

export { BookClubs } from "./book-clubs";
export type { BookClubsProps } from "./book-clubs";

export { YourReviews } from "./your-reviews";
export type { YourReviewsProps } from "./your-reviews";

export { LiteraryMilestones } from "./literary-milestones";
export type { LiteraryMilestonesProps } from "./literary-milestones";

export { AccountFooter } from "./account-footer";
export type { AccountFooterProps } from "./account-footer";
