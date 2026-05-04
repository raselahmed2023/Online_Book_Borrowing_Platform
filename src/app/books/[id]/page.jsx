
import books from "../../../../public/books.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BookDetails({ params }) {
  const { id } = await params;
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) return notFound();

  const related = books.filter((b) => b.category === book.category && b.id !== book.id);
  const qty = book.available_quantity;
  const badgeClass = qty === 0 ? "badge-error" : qty <= 2 ? "badge-warning" : "badge-success";
  const badgeText = qty === 0 ? "Unavailable" : qty <= 2 ? `Only ${qty} left` : "Available";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/AllBooks" className="btn btn-ghost btn-sm mb-6">
        ← Back to All Books
      </Link>

      <div className="card bg-base-100 shadow-sm border border-base-200">
        <div className="flex flex-col md:flex-row">

       
          <div className="flex flex-col items-center gap-4 p-8 bg-base-200 md:w-56 shrink-0">
            <div className="relative w-36 h-52 rounded-lg overflow-hidden shadow">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className={`badge ${badgeClass} gap-2`}>{badgeText}</div>
            <button
              className="btn btn-primary btn-sm w-full"
              disabled={qty === 0}
            >
              Request to Borrow
            </button>
          </div>


          <div className="p-8 flex-1">
            <div className={`badge badge-outline mb-3`}>{book.category}</div>
            <h1 className="text-2xl font-semibold mb-1">{book.title}</h1>
            <p className="text-base-content/60 mb-6">by {book.author}</p>

            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-base-content/40 mb-1">Copies available</p>
                <p className="font-medium">{book.available_quantity}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-base-content/40 mb-1">Category</p>
                <p className="font-medium">{book.category}</p>
              </div>
            </div>

            <div className="divider my-4" />

            <p className="text-xs uppercase tracking-widest text-base-content/40 mb-2">About this book</p>
            <p className="text-sm text-base-content/70 leading-relaxed">{book.description}</p>
          </div>
        </div>
      </div>

   
      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-base font-medium mb-4">More in {book.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {related.map((b) => (
              <Link key={b.id} href={`/books/${b.id}`}>
                <div className="card bg-base-100 border border-base-200 hover:border-base-300 transition-colors cursor-pointer">
                  <figure className="h-32">
                    <Image src={b.image_url} alt={b.title} width={200} height={128} className="object-cover w-full h-full" />
                  </figure>
                  <div className="card-body p-3">
                    <p className="text-xs font-medium line-clamp-2">{b.title}</p>
                    <p className="text-xs text-base-content/50">{b.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}