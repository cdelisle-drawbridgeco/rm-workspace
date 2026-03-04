/**
 * DataVersion service — tracks CSV import history.
 * Phase 4: this will be removed along with CSV import.
 */
import { prisma } from '@/lib/db';

export const dataVersionService = {
  /** Record a new data import version. */
  async create(data: { source: string; hash: string; recordsCount: number }) {
    return prisma.dataVersion.create({ data });
  },
};
