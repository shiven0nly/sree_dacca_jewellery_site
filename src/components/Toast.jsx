import React, { useEffect } from 'react';

const Toast = ({ message, isVisible, onClose, type = 'success' }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    const styles = {
        success: {
            title: 'Success',
            borderColor: '#D4AF37',
            iconColor: '#D4AF37',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )
        },
        error: {
            title: 'Action Required',
            borderColor: '#EF4444',
            iconColor: '#EF4444',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            )
        },
        info: {
            title: 'Info',
            borderColor: '#3B82F6',
            iconColor: '#3B82F6',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            )
        }
    };

    const currentStyle = styles[type] || styles.success;

    return (
        <div className="fixed top-24 right-5 z-50 animate-fade-in-down">
            <div
                className="bg-[#1a1a1a] border px-6 py-4 rounded-lg shadow-xl flex items-center gap-3"
                style={{ borderColor: currentStyle.borderColor }}
            >
                <div
                    className="rounded-full p-1"
                    style={{ backgroundColor: currentStyle.iconColor }}
                >
                    {currentStyle.icon}
                </div>
                <div>
                    <h4
                        className="font-serif font-medium"
                        style={{ color: currentStyle.borderColor }}
                    >
                        {currentStyle.title}
                    </h4>
                    <p className="text-sm text-gray-300">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Toast;
