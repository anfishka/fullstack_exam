import axios from "axios";

const API_URL = "http://10.0.2.2:5000/api/products";

// Логируем все запросы перед отправкой
axios.interceptors.request.use((request) => {
  console.log("🔵 [Запрос]:", request.method?.toUpperCase(), request.url, request.data || "");
  return request;
});

// Логируем все ответы после получения
axios.interceptors.response.use(
  (response) => {
    console.log("🟢 [Ответ]:", response.status, response.data);
    return response;
  },
  (error) => {
    console.log("🔴 [Ошибка]:", error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

// Получить все товары
export const getProducts = async () => {
  console.log("📤 Запрос на получение товаров...");
  const response = await axios.get(API_URL);
  console.log("📥 Получены товары:", response.data);
  return response.data;
};

// Получить товар по ID
export const getProductById = async (id: number) => {
  console.log(`📤 Запрос на получение товара ID: ${id}`);
  const response = await axios.get(`${API_URL}/${id}`);
  console.log(`📥 Получен товар ID ${id}:`, response.data);
  return response.data;
};

// Добавить товар
export const addProduct = async (product: any) => {
  console.log("📤 Добавление товара:", product);
  const response = await axios.post(API_URL, product);
  console.log("✅ Товар добавлен:", response.data);
  return response.data;
};

// Обновить товар
export const updateProduct = async (id: number, updatedProduct: any) => {
  console.log(`📤 Обновление товара ID ${id}:`, updatedProduct);
  await axios.put(`${API_URL}/${id}`, updatedProduct);
  console.log(`✅ Товар ID ${id} обновлен!`);
};



// Удалить товар
export const deleteProduct = async (id: number) => {
  console.log(`📤 Удаление товара ID ${id}`);
  await axios.delete(`${API_URL}/${id}`);
  console.log(`🗑️ Товар ID ${id} удален!`);
};


// Частичное обновление товара (PATCH)
export const patchProduct = async (id: number, patchData: any) => {
  console.log(`📤 PATCH: обновление товара ID ${id}:`, patchData);

  try {
    const response = await axios.patch(`${API_URL}/${id}`, patchData, {
      headers: { "Content-Type": "application/json-patch+json" },
    });

    console.log(`✅ PATCH: Товар ID ${id} обновлен!`, response.data);
    return response.data;
  } catch (error) {
    console.error(`🔴 Ошибка PATCH товара ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};
