"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Star, Bed, Bath } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Property } from "@/lib/sampleProperties";

// Fix Leaflet default icon issue
const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  properties: Property[];
}

export default function Map({ properties }: MapProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  return (
    <div className="w-full h-[300px] relative">
      <MapContainer
        center={[
          properties[0].GeoInfo.Lat as any,
          properties[0].GeoInfo.Lng as any,
        ]}
        zoom={12}
        className="w-full h-full"
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {properties.map((property) => (
          <Marker
            key={property.ID}
            position={[
              parseFloat(property.GeoInfo.Lat),
              parseFloat(property.GeoInfo.Lng),
            ]}
            eventHandlers={{
              click: () => setSelectedProperty(property),
            }}
          >
            <Popup>
              <div className="max-w-[300px]">
                <img
                  src={property.Property.FeatureImage}
                  alt={property.Property.PropertyName}
                  className="w-full h-[150px] object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-lg mb-1">
                    {property.Property.PropertyName}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {property.GeoInfo.Display}
                  </p>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">
                        {property.Property.StarRating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span className="text-sm">
                        {property.Property.Counts.Bedroom}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span className="text-sm">
                        {property.Property.Counts.Bathroom}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-semibold">
                        ${property.Property.Price}
                      </span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {property.Property.PropertyType}
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
