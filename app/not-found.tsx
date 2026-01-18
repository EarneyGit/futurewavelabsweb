import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-9xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>

                <p className="text-gray-400 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link href="/">
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Return Home
                    </motion.button>
                </Link>

                <div className="mt-12 text-sm text-gray-500">
                    <p>Looking for something specific?</p>
                    <div className="flex flex-wrap gap-3 justify-center mt-4">
                        <Link href="/#about-section" className="hover:text-red-500 transition-colors">About Us</Link>
                        <span>•</span>
                        <Link href="/#expertise" className="hover:text-red-500 transition-colors">Expertise</Link>
                        <span>•</span>
                        <Link href="/#reels" className="hover:text-red-500 transition-colors">Reels</Link>
                        <span>•</span>
                        <Link href="/#contact" className="hover:text-red-500 transition-colors">Contact</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
