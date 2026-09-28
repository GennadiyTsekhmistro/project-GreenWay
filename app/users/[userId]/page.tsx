import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import UserLocations from '@/components/UserLocations/UserLocations';

type Props = { params: Promise<{ userId: string }> };

export default async function PublicProfilePage({ params }: Props) {
  const { userId } = await params;
  return (
    <section className="container">
      <ProfileInfo userId={userId} />
      <UserLocations userId={userId} />
    </section>
  );
}
