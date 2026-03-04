/**
 * Account service — currently reads from Prisma/Postgres.
 * Phase 3: will read from Salesforce Account object.
 */
import { prisma } from '@/lib/db';
import { userService } from './user.service';

export const accountService = {
  /** Fetch all accounts with owner and opportunities. */
  async findAllWithOwnerAndOpportunities() {
    return prisma.account.findMany({
      include: {
        opportunities: true,
        owner: { select: userService.ownerSelect() },
      },
    });
  },

  /** Fetch accounts with opportunities in a specific quarter, including plans. */
  async findByQuarter(quarterKey: string) {
    return prisma.account.findMany({
      where: {
        opportunities: {
          some: { quarterKey },
        },
      },
      include: {
        owner: {
          select: { id: true, firstName: true, lastName: true },
        },
        opportunities: {
          where: { quarterKey },
        },
        renewalPlans: {
          where: { quarterKey },
        },
      },
      orderBy: { name: 'asc' },
    });
  },

  /** Fetch all accounts for the dashboard page (owner, opps, latest plan risk). */
  async findAllForDashboard() {
    return prisma.account.findMany({
      include: {
        owner: { select: { id: true, firstName: true, lastName: true } },
        opportunities: {
          select: {
            id: true,
            renewalDate: true,
            expiringArrCents: true,
            quarterKey: true,
          },
        },
        renewalPlans: {
          orderBy: { updatedAt: 'desc' },
          take: 1,
          select: { riskRating: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  },

  /** Fetch all accounts for the interactions page (owner, latest interaction, count). */
  async findAllForInteractions() {
    return prisma.account.findMany({
      include: {
        owner: { select: { id: true, firstName: true, lastName: true } },
        interactions: {
          orderBy: { date: 'desc' },
          take: 1,
          select: { date: true, type: true, temperature: true, riskFlag: true },
        },
        _count: { select: { interactions: true } },
      },
      orderBy: { name: 'asc' },
    });
  },

  /** Find an account by name. */
  async findByName(name: string) {
    return prisma.account.findFirst({ where: { name } });
  },

  /** Create a new account. */
  async create(data: {
    name: string;
    ownerId: string;
    region?: string | null;
    segment?: string | null;
  }) {
    return prisma.account.create({ data });
  },

  /** Update an existing account. */
  async update(id: string, data: {
    ownerId?: string;
    region?: string | null;
    segment?: string | null;
  }) {
    return prisma.account.update({ where: { id }, data });
  },
};
