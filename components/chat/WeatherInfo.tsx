'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="weather">
        <AccordionTrigger>Weather Information</AccordionTrigger>
        <AccordionContent>
          {weatherData ? (
            <div className="p-4">
              {/* Weather data will be displayed here */}
            </div>
          ) : (
            <div className="text-center text-muted-foreground p-4">
              Weather data not available
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}