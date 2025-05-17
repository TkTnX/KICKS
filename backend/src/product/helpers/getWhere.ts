import { EGender, Prisma } from 'generated/prisma';
export const getWhere = (params: Record<string, string>) => {
  const where: Prisma.ProductWhereInput = {
    ...(params.colors && {
      colors: { some: { value: { in: params.colors.split(',') } } },
    }),
    ...(params.sizes && {
      sizes: { some: { id: { in: params.sizes.split(',') } } },
    }),
    ...(params.category && { category: { name: params.category } }),
    ...(params.gender && {
      gender: params.gender.toLowerCase() as EGender,
    }),
    ...(params.price && { price: { lte: +params.price } }),
    ...(params.query && { title: params.query }),
  };
  return where;
};
