import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Limitless Wear - Договор оферты',
  description: 'Ознакомьтесь с договором оферты интернет-магазина Limitless Wear. Условия покупки, доставки и возврата товаров, права и обязанности сторон.',
  keywords: 'договор оферты, условия покупки, права и обязанности, Limitless Wear, доставка товаров, возврат товаров',
}

export default function OfferAgreement() {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Договор оферты</h1>
  
              <div className="prose prose-lg"> 
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Общие положения</h2>
                  <p>1.1. Настоящий Договор оферты (далее — Договор) является официальным предложением интернет-магазина Limitless Wear (далее — Продавец) заключить договор купли-продажи товаров с любым дееспособным лицом (далее — Покупатель).</p>
                  <p>1.2. Оформление заказа на Сайте является акцептом данной оферты и подтверждает согласие Покупателя с условиями Договора.</p>
                </section>
  
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Предмет договора</h2>
                  <p>2.1. Продавец обязуется передать Покупателю товар, указанный в заказе, а Покупатель обязуется оплатить его в соответствии с условиями настоящего Договора.</p>
                </section>
  
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Права и обязанности сторон</h2>
                  <p><strong>3.1. Магазин обязуется:</strong></p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Обеспечить наличие товара на складе.</li>
                    <li>Осуществить доставку товара в сроки, указанные на Сайте.</li>
                    <li>Предоставить Покупателю информацию о товаре.</li>
                  </ul>
                  <p><strong>3.2. Пользователь обязуется:</strong></p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Предоставить достоверную информацию при оформлении заказа.</li>
                    <li>Оплатить товар в соответствии с условиями, указанными на Сайте.</li>
                    <li>Принять товар по адресу доставки.</li>
                  </ul>
                </section>
  
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Цены и оплата</h2>
                  <p>4.1. Цены на товары указаны на Сайте и могут изменяться без предварительного уведомления.</p>
                  <p>4.2. Оплата товаров осуществляется любым из предложенных способов, указанных на Сайте.</p>
                </section>
  
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Доставка</h2>
                  <p>5.1. Условия и сроки доставки указаны на Сайте.</p>
                  <p>5.2. Риск утраты или повреждения товара переходит к Пользователю с момента его получения.</p>
                </section>
  
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Возврат и обмен товаров</h2>
                  <p>6.1. Возврат и обмен товаров осуществляется в соответствии с условиями, указанными на Сайте.</p>
                </section>
  
                <section className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Заключительные положения</h2>
                  <p>7.1. Продавец оставляет за собой право в любое время вносить изменения в настоящий Договор без предварительного уведомления Покупателя.</p>
                  <p>7.2. Все споры, возникающие в связи с настоящим Договором, будут разрешаться в соответствии с действующим законодательством.</p>
                  <p>7.3. Настоящий Договор вступает в силу с момента его акцепта Покупателем.</p>
                </section>
              </div>
            </div>
          </div>
      </div>
    )
}