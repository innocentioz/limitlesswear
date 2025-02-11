"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import EditProfileModal from "../components/ui/EditProfileModal";
import OrderDetailsModal from '../components/ui/OrderDetailsModal';

interface OrderItem {
    id: number;
    quantity: number;
    size?: string;
    price: number;
    product: {
      name: string;
    };
    imageUrl: string;
  }
  
  interface Order {
    id: number;
    status: string;
    address: string;
    items: OrderItem[];
  }

export default function Content() {
    const { data: session, update } = useSession();
    const router = useRouter();
    const [orders, setOrders] = useState<Order[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 6;
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    
    useEffect(() => {
      if (session) {
        fetch("/api/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data))
          .catch((err) => console.error("Ошибка загрузки заказов:", err));
      }
    }, [session]);
  
    if (session) {
      const { user } = session;
  
      const handleLogout = async () => {
        try {
          await signOut({ redirect: false });
          router.push("/login");
        } catch (error) {
          console.error("Ошибка при выходе:", error);
        }
      };
  
      const handleProfileUpdate = async (data: {
        username?: string;
        fullName?: string;
        oldPassword?: string;
        newPassword?: string;
      }) => {
        if (!session?.user?.id) return;
  
        try {
          const response = await fetch(`/api/users/${session.user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
          }
  
          const updatedUser = await response.json();
          console.log('Updated user data:', updatedUser);
  
          const newSession = {
            ...session,
            user: {
              ...session.user,
              username: updatedUser.username,
              fullName: updatedUser.fullName,
            },
          };
  
          await update(newSession);
  
          setIsEditModalOpen(false);
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error("Ошибка обновления профиля:", error.message);
          }
        }
      };
      
      const indexOfLastOrder = currentPage * ordersPerPage;
      const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
      const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
      const totalPages = Math.ceil(orders.length / ordersPerPage);
  
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-24 sm:pb-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 transition-all hover:text-gray-700">
            Личный кабинет
          </h1>
          
          <div className="bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {user.fullName || "Имя не задано"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium">@{user.username}</p>
              <p className="text-sm sm:text-base text-gray-700">
                Статус:{" "}
                <span className="font-medium">
                  {(() => {
                    switch (user.role) {
                      case "admin":
                        return "Администратор";
                      case "moderator":
                        return "Модератор";
                      default:
                        return "Пользователь";
                    }
                  })()}
                </span>
              </p>
  
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4">
                {user.role === "admin" || user.role === "moderator" ? (
                  <button
                    className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 text-white rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md transform hover:-translate-y-0.5"
                    onClick={() => router.push("/admin")}
                  >
                    Админ панель
                  </button>
                ) : null}
  
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gray-900 text-white rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-md transform hover:-translate-y-0.5"
                  onClick={() => setIsEditModalOpen(true)}
                >
                  Редактировать профиль
                </button>
  
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gray-700 text-white rounded-lg transition-all duration-300 hover:bg-gray-600 hover:shadow-md transform hover:-translate-y-0.5"
                  onClick={handleLogout}
                >
                  Выйти
                </button>
              </div>
            </div>
          </div>
  
          <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-6 sm:mb-8 text-gray-900">Ваши заказы</h2>
          {orders.length === 0 ? (
            <p className="text-gray-600 text-base sm:text-lg">Заказов пока нет.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 montserrat mb-8">
                {currentOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-xl">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-500">Заказ #{order.id}</span>
                        <span className="px-2 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 truncate">Адрес: {order.address}</p>
                      <div className="space-y-2">
                        {order.items.slice(0, 1).map((item) => (
                          <div key={item.id} className="space-y-1">
                            <div className="relative aspect-square overflow-hidden rounded-md">
                              <Image 
                                src={item.imageUrl} 
                                alt={item.product.name} 
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-sm font-medium text-gray-900 truncate">{item.product.name}</p>
                            <div className="flex justify-between text-sm text-gray-600">
                              <span>{item.quantity} шт.</span>
                              <span>{item.price}₽</span>
                            </div>
                          </div>
                        ))}
                        {order.items.length > 1 && (
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="w-full text-sm text-blue-600 hover:text-blue-800 transition-colors mt-2"
                          >
                            <div className="flex justify-center items-center text-neutral-500 text-base hover:text-neutral-800 transition-all">
                              +{order.items.length - 1} товар(ов)
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className="flex justify-center gap-2 mb-24 sm:mb-32">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-1 rounded-lg text-xl montserrat ${
                      currentPage === pageNumber
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </>
          )}
  
          <OrderDetailsModal
            order={selectedOrder}
            isOpen={!!selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
  
          <EditProfileModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            currentUser={{
              id: session?.user?.id || "",
              username: session?.user?.username || "",
              fullName: session?.user?.fullName || "",
            }}
            onUpdate={handleProfileUpdate}
          />
        </div>
      );
    }
  
    return null;
  }
  