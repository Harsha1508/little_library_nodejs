import { Session } from 'express-session';

interface CustomSession extends Session {
  cart?: {
    items: any[];
  };
}

const selectedGift = (session: CustomSession, data: any) => {
  if (session.cart) {
    session.cart.items.push(data);
  } else {
    session.cart = {
      items: [data],
    };
  }
};

export { selectedGift };
