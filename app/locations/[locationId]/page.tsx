import LocationDetails from '@/components/LocationDetails/LocationDetails';
import LocationFeedbacks from '@/components/LocationFeedbacks/LocationFeedbacks';

type Props = { params: Promise<{ locationId: string }> };

export default async function LocationPage({ params }: Props) {
  const { locationId } = await params;
  return (
    <>
      <LocationDetails locationId={locationId} />
      <LocationFeedbacks locationId={locationId} />
    </>
  );
}
