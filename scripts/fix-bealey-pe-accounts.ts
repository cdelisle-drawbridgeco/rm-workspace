import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Fixing PE accounts assigned to Michael Bealey...');
  
  // Find Michael Bealey
  const michaelBealey = await prisma.user.findFirst({
    where: {
      firstName: 'Michael',
      lastName: 'Bealey'
    }
  });
  
  if (!michaelBealey) {
    console.error('Michael Bealey not found');
    return;
  }
  
  // Find Mike Sullivan
  const mikeSullivan = await prisma.user.findFirst({
    where: {
      firstName: 'Mike',
      lastName: 'Sullivan'
    }
  });
  
  if (!mikeSullivan) {
    console.error('Mike Sullivan not found');
    return;
  }
  
  // Find all PE accounts owned by Michael Bealey
  const peAccounts = await prisma.account.findMany({
    where: {
      ownerId: michaelBealey.id,
      segment: 'Private Equity'
    }
  });
  
  console.log(`Found ${peAccounts.length} PE accounts owned by Michael Bealey:`);
  peAccounts.forEach(acc => console.log(`  - ${acc.name}`));
  
  if (peAccounts.length > 0) {
    // Reassign them to Mike Sullivan
    const result = await prisma.account.updateMany({
      where: {
        id: { in: peAccounts.map(a => a.id) }
      },
      data: {
        ownerId: mikeSullivan.id
      }
    });
    
    console.log(`\n✅ Reassigned ${result.count} PE accounts from Michael Bealey to Mike Sullivan`);
  } else {
    console.log('\n✅ No PE accounts found assigned to Michael Bealey');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
