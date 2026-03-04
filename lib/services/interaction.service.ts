/**
 * Interaction service — currently reads/writes Prisma/Postgres.
 * Phase 3: will read/write Salesforce Touchpoints object.
 */
import { prisma } from '@/lib/db';

export const interactionService = {
  /** Fetch interactions for an account, newest first. */
  async findByAccount(accountId: string) {
    return prisma.clientInteraction.findMany({
      where: { accountId },
      orderBy: { date: 'desc' },
      include: {
        author: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  },

  /** Create a new interaction. */
  async create(data: {
    accountId: string;
    authorId: string;
    date?: Date;
    type: string;
    notes: string;
    temperature?: string | null;
    riskFlag?: boolean;
    followUp?: string | null;
    participants?: string | null;
  }) {
    return prisma.clientInteraction.create({
      data: {
        accountId: data.accountId,
        authorId: data.authorId,
        date: data.date || new Date(),
        type: data.type,
        notes: data.notes,
        temperature: data.temperature || null,
        riskFlag: data.riskFlag || false,
        followUp: data.followUp || null,
        participants: data.participants || null,
      },
      include: {
        author: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  },

  /** Update a single field on an interaction. */
  async updateField(id: string, field: string, value: unknown) {
    return prisma.clientInteraction.update({
      where: { id },
      data: { [field]: value },
      include: {
        author: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  },

  /** Delete an interaction. */
  async delete(id: string) {
    return prisma.clientInteraction.delete({ where: { id } });
  },

  /** Fetch all interactions for dashboard (date, type, temperature per account). */
  async findAllForDashboard() {
    return prisma.clientInteraction.findMany({
      select: {
        accountId: true,
        date: true,
        type: true,
        temperature: true,
      },
      orderBy: { date: 'desc' },
    });
  },
};
