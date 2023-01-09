/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CategoryMgt } from "@prisma/client";

export class CategoryMgtServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CategoryMgtFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryMgtFindManyArgs>
  ): Promise<number> {
    return this.prisma.categoryMgt.count(args);
  }

  async findMany<T extends Prisma.CategoryMgtFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryMgtFindManyArgs>
  ): Promise<CategoryMgt[]> {
    return this.prisma.categoryMgt.findMany(args);
  }
  async findOne<T extends Prisma.CategoryMgtFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryMgtFindUniqueArgs>
  ): Promise<CategoryMgt | null> {
    return this.prisma.categoryMgt.findUnique(args);
  }
  async create<T extends Prisma.CategoryMgtCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryMgtCreateArgs>
  ): Promise<CategoryMgt> {
    return this.prisma.categoryMgt.create<T>(args);
  }
  async update<T extends Prisma.CategoryMgtUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryMgtUpdateArgs>
  ): Promise<CategoryMgt> {
    return this.prisma.categoryMgt.update<T>(args);
  }
  async delete<T extends Prisma.CategoryMgtDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryMgtDeleteArgs>
  ): Promise<CategoryMgt> {
    return this.prisma.categoryMgt.delete(args);
  }
}
