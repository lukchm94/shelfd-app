// apps/web/app/shelves/page.tsx
import { fetchShelvesPaginated } from './actions';
import { ShelfFeed } from '@/components/feeds/shelf';

export const metadata = {
  title: 'All Shelves | Shelfd',
};

export default async function AllShelvesPage() {
  // Fetch initial shelf array chunk (Page 1) directly from the Server Layer
  const { data: initialShelves, nextPage } = await fetchShelvesPaginated(1);

  return (
    /* 💡 THE CRITICAL FIX:
      We nullify the parent layout's 'px-5' page padding on mobile screens using '-mx-5' 
      and increase the base block element width to 'w-[calc(100%+2.5rem)]'.
      Then we safely restore standard parameters on tablet screens up ('sm:mx-0 sm:w-full').
    */
    <div className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full flex flex-col gap-10">
      {/* Infinite Scrolling Layout Shell Client Context Component */}
      <ShelfFeed initialShelves={initialShelves} initialNextPage={nextPage} />
    </div>
  );
}
