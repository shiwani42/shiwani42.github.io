import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Books and notes.",
};

export default function BookshelfPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-6">
      <section id="bookshelf">
        <div className="flex min-h-0 flex-col gap-y-4">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
            Bookshelf
          </h1>
          <p className="text-muted-foreground">
            This page is reserved for books, highlights, and reading notes.
          </p>
        </div>
      </section>
    </main>
  );
}
