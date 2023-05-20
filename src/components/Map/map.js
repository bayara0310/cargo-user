import React from 'react'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Link from 'next/link';

const Map = () => {
  return (
            <MapContainer className='h=[100vh]' center={[47.9184, 106.9170]} zoom={50} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[47.9184, 106.9170]}>
                  <Popup>
                    <div className='bg-red-600 rounded text-white p-4'>
                      <Link href='/' className='text=bold text-xl'>sasasa</Link>
                      <div>
                        sjjsjs
                      </div>
                    </div>
                  </Popup>
                </Marker>
            </MapContainer>
  )
}


export default Map