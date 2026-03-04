/**
 * User service — currently reads from Prisma/Postgres.
 * Phase 3: will read from Salesforce User object.
 */
import { prisma } from '@/lib/db';

const OWNER_SELECT = {
  id: true,
  firstName: true,
  lastName: true,
  email: true,
  username: true,
  isActive: true,
} as const;

export type UserSelect = {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  username: string | null;
  isActive: boolean;
};

export type UserBrief = {
  id: string;
  firstName: string;
  lastName: string;
};

export const userService = {
  /** Find a user by first + last name (case-insensitive). */
  async findByName(firstName: string, lastName: string) {
    return prisma.user.findFirst({
      where: {
        firstName: { equals: firstName, mode: 'insensitive' },
        lastName: { equals: lastName, mode: 'insensitive' },
      },
    });
  },

  /** Create a new user. */
  async create(data: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    isActive?: boolean;
  }) {
    return prisma.user.create({ data: { ...data, isActive: data.isActive ?? true } });
  },

  /** The select clause used when fetching owner data as part of account queries. */
  ownerSelect() {
    return OWNER_SELECT;
  },
};
