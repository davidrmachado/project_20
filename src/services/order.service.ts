import orderModel from '../models/order.model';

const getAllOrders = async () => {
  const allOrders = await orderModel.getAllOrders();
  const orderId = allOrders.map(async (data) => {
    const productsIds = await orderModel.getId(data.id);

    return { ...data, productsIds };
  });

  const results = await Promise.all(orderId).then((data) => data);

  return results;
};

export default { getAllOrders };