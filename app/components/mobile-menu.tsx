import Link from 'next/link';
import { useState, useEffect } from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose } : MobileMenuProps) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center pt-32 gap-6 transition-transform duration-300 overflow-y-auto ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <button className='fixed top-4 right-14 text-6xl' onClick={onClose}>
                &times;
            </button>

            <ul className="motivasans flex flex-col gap-7 text-2xl max-[414px]:text-lg max-[414px]:gap-4">
                <li>
                    <Link href="/category/clothing" onClick={onClose}>
                        Одежда
                    </Link>
                </li>
                <li>
                    <Link href="/category/accessories" onClick={onClose}>
                        Аксессуары
                    </Link>
                </li>
                <li>
                    <Link href="/category/shoes" onClick={onClose}>
                        Обувь
                    </Link>
                </li>
                <li>
                    <Link href="/category/collections" onClick={onClose}>
                        Коллекции
                    </Link>
                </li>
                <li className="relative">
                    <span
                        className={`cursor-pointer ${isDropdownMenuOpen ? 'underline decoration-2 underline-offset-8' : ''}`}
                        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
                    >
                        Информация
                    </span>

                    {isClient && (
                    <ul
                        className={`mt-4 flex flex-col gap-5 bg-white overflow-hidden transition-all duration-300 ease-in-out
                        max-[414px]:text-lg max-[414px]:gap-4 max-[380px]:text-base
                        ${isDropdownMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{ transitionProperty: 'max-height, opacity' }}
                    >
                        <li>
                            <Link href="/information/about" onClick={onClose}>
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link href="/information/contacts" onClick={onClose}>
                                Контакты
                            </Link>
                        </li>
                        <li>
                            <Link href="/information/payment" onClick={onClose}>
                                Оплата
                            </Link>
                        </li>
                        <li>
                            <Link href="/information/policy" onClick={onClose}>
                                Политика конфиденциальности
                            </Link>
                        </li>
                        <li>
                            <Link href="/information/agreement" onClick={onClose}>
                                Пользовательское соглашение
                            </Link>
                        </li>
                        <li>
                            <Link href="/information/offer" onClick={onClose}>
                                Договор оферты
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" onClick={onClose}>
                                Обратная связь
                            </Link>
                        </li>
                    </ul>
                    )}
                </li>
            </ul>
        </nav>
    )
}