import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">
                    <a href="/about" className="hover:underline">About</a> | 
                    <a href="/support" className="hover:underline"> Support</a> | 
                    <a href="/privacy" className="hover:underline"> Privacy</a> | 
                    <a href="/terms" className="hover:underline"> Terms</a>
                </p>
                <p>&copy; {new Date().getFullYear()} Eternal Loop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;