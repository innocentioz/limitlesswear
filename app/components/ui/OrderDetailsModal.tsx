import Image from 'next/image';

interface OrderItem {
    id: number;
    quantity: number;
    price: number;
    size: string | null;
    product: {
        id: number;
        name: string;
        imageUrl: string | null;
    };
}

interface Order {
    id: number;
    customerName: string;
    phone: string;
    address: string;
    paymentMethod: string;
    totalPrice: number;
    status: string;
    createdAt: string;
    items: OrderItem[];
}

interface OrderDetailsModalProps {
    order: Order | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function OrderDetailsModal({ order, isOpen, onClose }: OrderDetailsModalProps) {
    if (!isOpen || !order) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Детали заказа #{order.id}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* Информация о клиенте */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Информация о клиенте</h3>
                            <div className="space-y-1">
                                <p className="text-sm"><span className="font-medium">Имя:</span> {order.customerName}</p>
                                <p className="text-sm"><span className="font-medium">Телефон:</span> {order.phone}</p>
                                <p className="text-sm"><span className="font-medium">Адрес:</span> {order.address}</p>
                            </div>
                        </div>

                        {/* Информация о заказе */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Информация о заказе</h3>
                            <div className="space-y-1">
                                <p className="text-sm">
                                    <span className="font-medium">Способ оплаты:</span> {order.paymentMethod === "card" ? "Карта" : "Наличные"}
                                </p>
                                <p className="text-sm"><span className="font-medium">Статус:</span> {order.status}</p>
                                <p className="text-sm"><span className="font-medium">Сумма:</span> {order.totalPrice} ₽</p>
                                <p className="text-sm">
                                    <span className="font-medium">Дата заказа:</span>{' '}
                                    {new Date(order.createdAt).toLocaleDateString('ru-RU', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        </div>

                        {/* Список товаров */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Товары</h3>
                            <div className="space-y-4">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                                        {item.product.imageUrl && (
                                            <div className="relative w-20 h-20 flex-shrink-0">
                                                <Image
                                                    src={item.product.imageUrl}
                                                    alt={item.product.name}
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-grow">
                                            <p className="font-medium text-sm">{item.product.name}</p>
                                            <div className="text-sm text-gray-500 space-y-1">
                                                <p>Количество: {item.quantity}</p>
                                                {item.size && <p>Размер: {item.size}</p>}
                                                <p>Цена: {item.price} ₽</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 