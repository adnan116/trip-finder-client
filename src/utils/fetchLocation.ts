import axios from 'axios';

export async function fetchLocation(query: string): Promise<string[]> {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search`,
      {
        params: {
          q: query,
          format: 'json',
        },
      },
    );

    return response.data.map((item: any) => item.display_name);
  } catch (error) {
    throw new Error('Failed to fetch locations');
  }
}
