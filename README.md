# Maelle — Private Experiences

Application privée Next.js + Supabase Auth/Postgres/Storage. Les pages privées exigent une session authentifiée et les médias sont stockés dans un bucket privé.

## Démarrage
1. Copier `.env.example` vers `.env.local` et renseigner la clé publique Supabase.
2. `npm install`
3. `npm run dev`

Ne jamais placer de clé `service_role` dans le navigateur ou dans le dépôt. Les migrations SQL initiales sont appliquées sur le projet Supabase Maelle.