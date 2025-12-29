"use client";

import { CollectionCard } from "@/components/molecules";

const collections = [
  {
    id: 1,
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-1.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    id: 2,
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-2.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    id: 3,
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-3.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    id: 4,
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-4.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    id: 5,
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-5.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    id: 6,
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-6.png",
    bookCount: 26,
    memberCount: 26,
  },
];

export default function CollectionsPreviewPage() {
  return (
    <div className="min-h-screen p-12" style={{ backgroundColor: "#2D2520" }}>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Found in the following collections
          </p>
        </header>

        {/* Collections Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              title={collection.title}
              image={collection.image}
              bookCount={collection.bookCount}
              memberCount={collection.memberCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
