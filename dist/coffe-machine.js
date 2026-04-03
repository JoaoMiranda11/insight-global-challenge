const SIZE_PRICES = {
    small: 1.00,
    medium: 1.50,
    large: 2.00,
};
const CREAMER_PRICES = {
    none: 0.00,
    dairy: 0.25,
    no_dairy: 0.50,
};
function getSizePrice(size) {
    return SIZE_PRICES[size] ?? 0;
}
function getCreamerPrice(creamer) {
    return CREAMER_PRICES[creamer] ?? 0;
}
export function calculateCoffeePrice(order) {
    const sizePrice = getSizePrice(order.size);
    const creamerPrice = getCreamerPrice(order.creamer);
    return sizePrice + creamerPrice;
}
//# sourceMappingURL=coffe-machine.js.map