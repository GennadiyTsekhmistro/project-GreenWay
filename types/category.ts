export type Region = { _id: string; region: string; slug: string };
export type LocationType = { _id: string; type: string; slug: string };
export type Categories = { regions: Region[]; locationTypes: LocationType[] };
