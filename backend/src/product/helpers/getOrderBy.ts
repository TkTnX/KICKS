import { Prisma } from "generated/prisma";

export const getOrderBy = (sortBy: string) => {
  let orderBy: Prisma.ProductOrderByWithRelationInput = {
    createdAt: 'desc',
  };
  switch (sortBy) {
    case 'price-asc':
      orderBy = { price: 'asc' };
      break;
    case 'price-desc':
      orderBy = { price: 'desc' };
      break;
    case 'new':
      orderBy = { createdAt: 'desc' };
      break;
    case 'old':
      orderBy = { createdAt: 'asc' };
      break;
    case 'a-z':
      orderBy = { title: 'asc' };
      break;
    case 'z-a':
      orderBy = { title: 'desc' };
      break;

    default:
      break;
    }
    return orderBy
};
