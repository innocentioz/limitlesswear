import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Limitless Wear - Контакты',
  description: 'Свяжитесь с Limitless Wear. Наш адрес, телефоны, email и время работы. Мы всегда рады помочь вам с выбором одежды и ответить на любые вопросы.',
  keywords: 'Limitless Wear контакты, адрес магазина, телефон, email, время работы, как добраться',
}

export default function ContactsPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Контакты</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <section className="text-center md:text-right">
                            <h3 className="font-bold text-lg sm:text-xl mb-2">Наш адрес</h3>
                            <p className="text-base sm:text-lg">г. Чебоксары, ул. Энтузиастов, д. 31</p>
                        </section>

                        <section className="text-center md:text-left">
                            <h3 className="font-bold text-lg sm:text-xl mb-2">Телефоны для связи</h3>
                            <p className="text-base sm:text-lg">+7 (937) 123-45-67</p>
                            <p className="text-base sm:text-lg">+7 (927) 555-35-35 (бесплатно по России)</p>
                        </section>

                        <section className="text-center md:text-right">
                            <h3 className="font-bold text-lg sm:text-xl mb-2">Электронная почта</h3>
                            <p className="text-base sm:text-lg">support@limitlesswear.com</p>
                        </section>
                        
                        <section className="text-center md:text-left">
                            <h3 className="font-bold text-lg sm:text-xl mb-2">Рабочие часы</h3>
                            <p className="text-base sm:text-lg">Понедельник - Пятница: 10:00 - 18:00</p>
                            <p className="text-base sm:text-lg">Суббота - Воскресенье: 11:00 - 17:30</p>
                        </section>
                    </div>

                    <section className="mt-12 sm:mt-16">
                        <h3 className="font-bold text-2xl text-center mb-6">Мы на карте</h3>
                        <div className="w-full">
                            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1870.420219365623!2d47.184282671608045!3d56.11703376701737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1726899019824!5m2!1sru!2sru"
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}