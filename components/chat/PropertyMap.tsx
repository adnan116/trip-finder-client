"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Star, Bed, Bath } from "lucide-react";
import { type Property } from "@/lib/sampleProperties";

// Create a client-side only Map component
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] flex items-center justify-center bg-muted">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
});

interface PropertyMapProps {
  properties: Property[];
}

export default function PropertyMap({ properties }: PropertyMapProps) {
  return <Map properties={properties} />;
}
