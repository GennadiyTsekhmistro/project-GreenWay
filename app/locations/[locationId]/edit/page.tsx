import EditLocationForm from '@/components/EditLocationForm/EditLocationForm';

type Props = { params: Promise<{ locationId: string }> };

export default async function EditLocationPage({ params }: Props) {
  const { locationId } = await params;
  return (
    <section className="container">
      <h1>Редагування місця</h1>
      <EditLocationForm locationId={locationId} />
    </section>
  );
}
