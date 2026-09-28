import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import UserLocations from '@/components/UserLocations/UserLocations';

// Приватна сторінка: без userId компоненти показують поточного користувача
export default function ProfilePage() {
  return (
    <section className="container">
      <ProfileInfo />
      <UserLocations isOwnProfile />
    </section>
  );
}
