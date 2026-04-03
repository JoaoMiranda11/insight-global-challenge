type Size = "small" | "medium" | "large";
type Creamer = "none" | "dairy" | "no_dairy";

// Readonly properties are not mutable, type fit better with readonly approach (interfaces are extensibles)
type Order = {
    readonly size: Size;
    readonly creamer: Creamer;
  };
  
  const SIZE_PRICES = {
    small: 1.00,
    medium: 1.50,
    large: 2.00,
  } as const satisfies Record<Size, number>;
  
  const CREAMER_PRICES = {
    none: 0.00,
    dairy: 0.25,
    no_dairy: 0.50,
  } as const satisfies Record<Creamer, number>;
  
  export function calculateCoffeePrice(order: Order): number {
    return SIZE_PRICES[order.size] + CREAMER_PRICES[order.creamer];
  }