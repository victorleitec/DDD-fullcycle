import Customer from "./entity/customer";
import Address from "./entity/address";
import OrderItem from "./entity/order_item";
import Order from "./entity/order";

let customer = new Customer("123", "Fulano De Tal");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "p1", "Item 1", 10, 2);
const item2 = new OrderItem("2", "p2", "Item 2", 15, 1);

const order = new Order("1", "123", [item1, item2]);