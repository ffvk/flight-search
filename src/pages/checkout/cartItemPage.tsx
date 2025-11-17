import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  fetchCartItemAPI,
  updatebulkCartItemAPI,
} from "../../service/product-service";

const CartItemPage = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [updating, setUpdating] = useState(false);
  const [itemCount, setItemCount] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["cartItemQuery"],
    queryFn: async () => {
      try {
        const response = await fetchCartItemAPI();
        setItemCount(response.total);
        return response.cartItemss || [];
      } catch (error: any) {
        toast.error(error.message || "Error fetching cart items");
        throw error;
      }
    },
  });

  // Initialize quantities from fetched cart items
  useEffect(() => {
    if (data) {
      const initialQuantities: { [key: number]: number } = {};
      data.forEach((item: any) => {
        initialQuantities[item.product_id] = item.quantity || 1;
      });
      setQuantities(initialQuantities);
    }
  }, [data]);

  const handleQuantityChange = (productId: number, amount: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + amount),
    }));
  };

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const calculateItemTotal = (item: any) => {
    const quantity = getQuantity(item.product_id);
    return (item.product_price * quantity).toFixed(2);
  };

  const calculateGrandTotal = () => {
    return data
      ?.reduce(
        (acc: number, item: any) =>
          acc + item.product_price * getQuantity(item.product_id),
        0
      )
      .toFixed(2);
  };

  const { mutate: updateCartItems } = useMutation({
    mutationFn: updatebulkCartItemAPI,
    onMutate: () => setUpdating(true),
    onSuccess: () => {
      toast.success("Cart items updated successfully!");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to update cart items.");
    },
    onSettled: () => setUpdating(false),
  });

  const handleCheckout = () => {
    if (!data) return;

    const payload = {
      cart_items: data.map((item: any) => ({
        cartItem_id: item.cartItem_id,
        cart_id: item.cart_id,
        total_price: item.product_price * getQuantity(item.product_id),
        quantity: getQuantity(item.product_id),
        is_active: true,
      })),
    };

    updateCartItems(payload);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🛒 Cart
      </h2>
      <h6>Total Item : {itemCount}</h6>
      <table className="w-full text-sm">
        <thead className="border-b text-left text-gray-500">
          <tr>
            <th className="py-2">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any) => (
            <tr key={item.cartItem_id} className="border-b py-4">
              <td className="py-4 flex items-center gap-2">
                <img
                  src={item.inage_url || "/placeholder.png"}
                  alt="Product"
                  className="w-12 h-12 object-cover rounded"
                />
                <span>{item.product_name || "Product"}</span>
              </td>
              <td>${item.product_price?.toFixed(2)}</td>
              <td>
                <div className="flex items-center border rounded px-2">
                  <button
                    onClick={() => handleQuantityChange(item.product_id, -1)}
                    className="px-2"
                  >
                    −
                  </button>
                  <span className="px-2">{getQuantity(item.product_id)}</span>
                  <button
                    onClick={() => handleQuantityChange(item.product_id, 1)}
                    className="px-2"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-right">${calculateItemTotal(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-6 text-lg font-semibold">
        <span>Grand Total</span>
        <span>${calculateGrandTotal()}</span>
      </div>
      <button
        onClick={handleCheckout}
        disabled={updating}
        className={`mt-4 w-full py-2 rounded text-white ${
          updating ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {updating ? "Updating..." : "Checkout"}
      </button>
    </div>
  );
};

export default CartItemPage;
