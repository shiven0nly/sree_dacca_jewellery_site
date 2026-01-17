import React, { useEffect } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const stores = [
    {
        id: 1,
        city: "Raiganj",
        address: "Opposite Gitanjali Cinema Hall",
        phone: "9531581380",
        mapUrl: "https://maps.google.com/maps?q=Raiganj+Opposite+Gitanjali+Cinema+Hall&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: 2,
        city: "Raiganj",
        address: "Near Bidhan Nagar More",
        phone: "9434143004",
        mapUrl: "https://maps.google.com/maps?q=Raiganj+Near+Bidhan+Nagar+More&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: 3,
        city: "Itahar",
        address: "Opposite Electricity Office, Patiraj Road",
        phone: "9593190437",
        mapUrl: "https://maps.google.com/maps?q=Itahar+Opposite+Electricity+Office+Patiraj+Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: 4,
        city: "Gangarampur",
        address: "BaraBazar (Near Bandhan Bank)",
        phone: "8001068586",
        mapUrl: "https://maps.google.com/maps?q=Gangarampur+BaraBazar+Near+Bandhan+Bank&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
];

const StoreLocator = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-[#FCF9F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-[#8B2F2F] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                        Visit Us
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0F0F0F] mb-6">
                        Find Our Stores
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Experience our exquisite collection in person. Visit any of our showrooms to see our craftsmanship up close.
                    </p>
                </div>

                <div className="space-y-12">
                    {stores.map((store, index) => (
                        <motion.div
                            key={store.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-12"
                        >
                            {/* Store Details */}
                            <div className="flex-1">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-[#FAF5ED] p-3 rounded-full text-[#8B2F2F]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl text-[#0F0F0F] mb-2">{store.city}</h3>
                                        <p className="text-gray-600 mb-4 font-light leading-relaxed">{store.address}</p>

                                        <div className="flex items-center gap-3 text-sm font-medium text-[#555]">
                                            <Phone size={16} className="text-[#8B2F2F]" />
                                            <span>+91 {store.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map for this store */}
                            <div className="lg:w-1/2 h-[300px] lg:h-auto min-h-[250px] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src={store.mapUrl}
                                    title={`Map for ${store.city} - ${store.address}`}
                                    className="w-full h-full filter grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;
