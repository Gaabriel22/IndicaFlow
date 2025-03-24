import { PrismaClient } from '@prisma/client';
import { ResourceWithOptions } from 'adminjs';

const prisma = new PrismaClient();

export const adminResources: ResourceWithOptions[] = [
  {
    resource: { model: prisma.user, client: prisma },
    options: {
      properties: {
        id: {
          isVisible: { list: true, edit: false, show: true, filter: true },
        },
        email: { isTitle: true },
        password: { isVisible: { list: false, edit: true, show: false } },
        createdAt: { isVisible: { list: true, edit: false, show: true } },
      },
      listProperties: ['id', 'email', 'createdAt'],
      sort: { direction: 'desc', sortBy: 'createdAt' },
    },
  },
  {
    resource: { model: prisma.referral, client: prisma }, 
    options: {
      properties: {
        id: {
          isVisible: { list: true, edit: false, show: true, filter: true },
        },
        leadEmail: {
          isTitle: true,
        },
        status: {
          availableValues: [
            { value: 'pending', label: 'Pendente' },
            { value: 'converted', label: 'Convertido' },
            { value: 'rejected', label: 'Rejeitado' },
          ],
        },
        createdAt: { isVisible: { list: true, edit: false, show: true } },
      },
      listProperties: ['id', 'leadEmail', 'status', 'createdAt'], // Corrigido para 'leadEmail'
      sort: { direction: 'desc', sortBy: 'createdAt' },
    },
  },
];
