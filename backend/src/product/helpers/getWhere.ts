import { EGender, Prisma } from 'generated/prisma';

export const getWhere = (params: Record<string, string>) => {
  const where: Prisma.ProductWhereInput = {
    ...(params.color && { colors: { some: { value: params.color } } }),
    ...(params.size && { sizes: { some: { size: params.size } } }),
    ...(params.category && { category: { name: params.category } }),
    ...(params.gender && {
      gender: {
        in: params.gender.split(',').map((g) => g.toUpperCase()) as EGender[],
      },
    }),
    ...(params.price && { price: { gte: +params.price } }),
    ...(params.query && { title: params.query }),
  };
  return where;
};
