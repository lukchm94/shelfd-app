import { users } from '../../../src/mocks/users';
import { collections } from '../../../src/mocks/collections';
import { Avatar, Card } from '@shelfd/ui';

type Props = { params: { user: string } };

export default async function ProfilePage({ params }: Props): Promise<React.JSX.Element> {
  const p = await params;
  const user = users.find((u) => u.username === p.user) || users[0];
  const userCollections = collections.filter((c) => c.owner === user.username);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Avatar src={user.avatar} alt={user.username} />
        <div>
          <h2 className="text-xl font-semibold">{user.username}</h2>
          <div className="text-sm text-slate-500">{user.username}</div>
          <div></div>
          <div></div>
          <p className="text-sm text-slate-600">{user.bio}</p>
        </div>
      </div>

      <h3 className="font-semibold mb-2">Collections</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {userCollections.map((c) => (
          <Card key={c.id} title={c.title} description={c.description} />
        ))}
      </div>
    </div>
  );
}
