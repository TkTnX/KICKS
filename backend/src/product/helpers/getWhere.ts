import { EGender, Prisma } from 'generated/prisma';

export const getWhere = (params: Record<string, string>) => {
  const where: Prisma.ProductWhereInput = {
    ...(params.color && { colors: { some: { value: params.color } } }),
    ...(params.size && { sizes: { some: { id: params.size } } }),
    ...(params.category && { category: { name: params.category } }),
    ...(params.gender && {
      gender: params.gender.toUpperCase() as EGender,
    }),
    ...(params.price && { price: { gte: +params.price } }),
    };
    
    return where
};
