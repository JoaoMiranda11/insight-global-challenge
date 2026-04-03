type Size = "small" | "medium" | "large";
type Creamer = "none" | "dairy" | "no_dairy";
interface Order {
    size: Size;
    creamer: Creamer;
}
export declare function calculateCoffeePrice(order: Order): number;
export {};
//# sourceMappingURL=coffe-machine.d.ts.map