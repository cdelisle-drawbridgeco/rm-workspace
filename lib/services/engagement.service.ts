import { prisma } from '@/lib/db';

export const engagementService = {
  async findAll(authorName?: string) {
    return prisma.engagement.findMany({
      where: authorName ? { authorName } : undefined,
      orderBy: { date: 'desc' },
    });
  },

  async findAllAuthors(): Promise<string[]> {
    const rows = await prisma.engagement.findMany({
      select: { authorName: true },
      distinct: ['authorName'],
      orderBy: { authorName: 'asc' },
    });
    return rows.map((r) => r.authorName);
  },

  async create(data: {
    clientName: string;
    contactName: string;
    contactTier: string;
    authorName: string;
    date: Date;
    type: string;
    direction: string;
    subject: string;
    notes: string;
    followUp?: string | null;
    pathToExecutive?: string | null;
  }) {
    return prisma.engagement.create({ data });
  },

  async updateField(id: string, field: string, value: unknown) {
    return prisma.engagement.update({
      where: { id },
      data: { [field]: value },
    });
  },

  async delete(id: string) {
    return prisma.engagement.delete({ where: { id } });
  },
};
