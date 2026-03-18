import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding...");

  // 1. Create a base user
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@meditateclaude.com" },
    update: {},
    create: {
      email: "admin@meditateclaude.com",
      name: "Admin",
      role: "ADMIN",
    },
  });

  // 2. Create an expert profile
  const expert = await prisma.expertProfile.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      slug: "admin-expert",
      title: "Bas Rehber",
      specialties: ["meditasyon", "tarot"],
      isVerified: true,
    },
  });

  // 3. Create a category
  const tarotCategory = await prisma.category.upsert({
    where: { slug: "tarot" },
    update: {},
    create: {
      name: "Tarot",
      slug: "tarot",
      description: "Tarot ve kehanet sanatları",
    },
  });

  // 4. Create an article
  await prisma.article.upsert({
    where: { slug: "tarot-giris" },
    update: {},
    create: {
      title: "Tarot'a Giris",
      slug: "tarot-giris",
      content: "Tarot, bilincalti ile baglanti kurmanın kadim bir yoludur.",
      status: "PUBLISHED",
      expertId: expert.id,
      categoryId: tarotCategory.id,
    },
  });

  console.log("Seed finished successfully.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
