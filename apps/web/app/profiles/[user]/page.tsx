import { users } from '../../../src/mocks/users';
import { collections } from '../../../src/mocks/collections';
import { CollectorDetailCard } from '@/components/feeds/cards/collector-detail';
import { ShelfCardWrapper } from '@/components/feeds/shelf-wrapper';

type Props = { params: Promise<{ user: string }> };

export default async function ProfilePage({ params }: Props): Promise<React.JSX.Element> {
  const p = await params;
  const user = users.find((u) => u.username === p.user) || users[0];
  const userCollections = collections.filter((c) => c.owner === user.username);
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full">
      <CollectorDetailCard user={user} userCollections={userCollections} initials={initials} />

      {userCollections.map((collection) => (
        <ShelfCardWrapper key={collection.id} shelf={collection} />
      ))}
    </div>
  );
}
