[Back](README.md)

## How to use Prisma
- Write database structure in prisma/schema.prisma
- Create first migration 
```bash
prisma migrate dev --name init
```
- Create second migration (ex. added_job_title)
```bash
prisma migrate dev --name added_job_title
```