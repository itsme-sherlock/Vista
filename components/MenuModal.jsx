
import { motion } from "framer-motion";

const MenuModal = () => {
    const list = [
        { name: 'Who we are' },
        { name: 'Our Expertise' },
        { name: 'Statistics' },
        { name: 'We build' },
        { name: 'Contact Us' },
    ];

    return (
        <>
            <div className="fixed inset-0 top-16 bg-[#202020] bg-opacity-100 flex justify-center items-center z-50">
                <ul>
                    {list.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,          // Adjust duration for smoother transition
                                delay: index * 0.2,     // Delay between list items
                                ease: "easeInOut",      // Smoother easing
                            }}
                        >
                            <button className="p-5 text-4xl font-semibold">
                                {item.name}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MenuModal;
