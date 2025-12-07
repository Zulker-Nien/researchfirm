import { defineType, defineField } from 'sanity'
import { Globe, Landmark, Cpu, BookOpen } from 'lucide-react'

export const wing = defineType({
  name: 'wing',
  title: 'Research Wing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Lucide)',
      type: 'string',
      options: {
        list: [
          { title: 'Landmark', value: 'Landmark' },
          { title: 'Globe', value: 'Globe' },
          { title: 'Cpu', value: 'Cpu' },
          { title: 'BookOpen', value: 'BookOpen' },
        ],
      },
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      description: 'For UI badges/buttons (e.g., indigo-600)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
    },
    prepare({ title, icon }) {
      const icons: Record<string, string> = {
        Landmark: 'Government',
        Globe: 'World',
        Cpu: 'Tech',
        BookOpen: 'History',
      }
      return {
        title,
        subtitle: icons[icon] || 'Wing',
      }
    },
  },
})