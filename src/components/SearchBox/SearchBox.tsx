'use client';

import { useState, useEffect } from 'react';
import { TextField, CircularProgress, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import { LocationSuggestions } from '@/components/SearchBox/LocationSuggestions';
import { useDebounce } from '@/hooks/useDebounce';
import { fetchLocation } from '@/utils/fetchLocation';

export const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchText.length > 2) {
      setLoading(true);
      setError(null);
      fetchLocation(debouncedSearchText)
        .then((data) => {
          setLocations(data);
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to fetch locations');
          setLoading(false);
        });
    } else {
      setLocations([]);
    }
  }, [debouncedSearchText]);

  const clearSearch = () => {
    setSearchText('');
    setLocations([]);
    setError(null);
  };

  const handleLocationSearch = () => {
    console.log('Location Search Triggered:', searchText);
  };

  const handleAiSearch = () => {
    console.log('AI-Powered Search Triggered:', searchText);
  };

  return (
    <>
      <div className="overlay"></div>
      <motion.div
        className="fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Search for Locations</h2>
        <div className="relative">
          <TextField
            label="Enter Location"
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              endAdornment: (
                <div className="flex items-center">
                  {loading ? (
                    <CircularProgress size={20} className="mr-2" />
                  ) : null}
                  {searchText && (
                    <IconButton onClick={clearSearch} size="small">
                      <CloseIcon />
                    </IconButton>
                  )}
                </div>
              ),
            }}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button
            variant="contained"
            color="primary"
            startIcon={<LocationOnIcon />}
            onClick={handleLocationSearch}
          >
            Location Search
          </Button>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<AutoAwesomeIcon />}
            onClick={handleAiSearch}
          >
            AI Search
          </Button>
        </div>

        <LocationSuggestions locations={locations} error={error} />
      </motion.div>
    </>
  );
};
