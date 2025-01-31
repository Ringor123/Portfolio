export interface Item {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: {
      id: number;
      name: string;
      image: string;
      creationAt: string;
      updatedAt: string;
    };
  };

  // interface CartItem extends Item {
  //   quantity: number
  // }

  type CartItem = Omit<Item, 'category' | 'creationAt' | 'updatedAt'> & {
    quantity: number
  }

  type ItemId = Item['id']

  export interface CartStore {
    // cart: (Item & { quantity: number })[];
    cart: CartItem[]
    addToCart: (item: Item) => void;
    removeFromCart: (id: ItemId) => void;
    increaseQuantity: (id: ItemId) => void;
    decreaseQuantity: (id: ItemId) => void;
    clearCart: () => void;
  }