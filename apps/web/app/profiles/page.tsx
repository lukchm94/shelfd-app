import { fetchUsersPaginated } from './actions';
import { CollectorFeed } from '@/components/feeds/collector';

export const metadata = {
  title: 'All Profiles | Shelfd',
};

export default async function AllProfilesPage() {
  // Fetch initial users array chunk (Page 1) directly from the Server Layer
  const { data: initialUsers, nextPage } = await fetchUsersPaginated(1);

  return <CollectorFeed initialUsers={initialUsers} initialNextPage={nextPage} />;
}
