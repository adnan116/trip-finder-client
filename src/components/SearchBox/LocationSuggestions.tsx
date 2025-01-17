import { Divider } from '@mui/material';

interface LocationSuggestionsProps {
  locations: string[];
  error: string | null;
}

export const LocationSuggestions: React.FC<LocationSuggestionsProps> = ({
  locations,
  error,
}) => {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="mt-4 max-h-40 overflow-y-auto">
      {locations.length === 0 ? (
        <p className="text-gray-500">No locations found</p>
      ) : (
        locations.map((location, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 cursor-pointer"
          >
            <p className="text-sm font-medium">{location}</p>
            <Divider />
          </div>
        ))
      )}
    </div>
  );
};
