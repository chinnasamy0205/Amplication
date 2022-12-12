/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  HmProtestProject,
  HmProtestAccount,
  User,
} from "@prisma/client";

export class HmProtestProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HmProtestProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HmProtestProjectFindManyArgs>
  ): Promise<number> {
    return this.prisma.hmProtestProject.count(args);
  }

  async findMany<T extends Prisma.HmProtestProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HmProtestProjectFindManyArgs>
  ): Promise<HmProtestProject[]> {
    return this.prisma.hmProtestProject.findMany(args);
  }
  async findOne<T extends Prisma.HmProtestProjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HmProtestProjectFindUniqueArgs>
  ): Promise<HmProtestProject | null> {
    return this.prisma.hmProtestProject.findUnique(args);
  }
  async create<T extends Prisma.HmProtestProjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HmProtestProjectCreateArgs>
  ): Promise<HmProtestProject> {
    return this.prisma.hmProtestProject.create<T>(args);
  }
  async update<T extends Prisma.HmProtestProjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HmProtestProjectUpdateArgs>
  ): Promise<HmProtestProject> {
    return this.prisma.hmProtestProject.update<T>(args);
  }
  async delete<T extends Prisma.HmProtestProjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HmProtestProjectDeleteArgs>
  ): Promise<HmProtestProject> {
    return this.prisma.hmProtestProject.delete(args);
  }

  async findAccountId(
    parentId: string,
    args: Prisma.HmProtestAccountFindManyArgs
  ): Promise<HmProtestAccount[]> {
    return this.prisma.hmProtestProject
      .findUnique({
        where: { id: parentId },
      })
      .accountId(args);
  }

  async findUserId(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.hmProtestProject
      .findUnique({
        where: { id: parentId },
      })
      .userId(args);
  }
}
