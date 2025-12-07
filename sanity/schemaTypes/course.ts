import { defineType, defineField } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Intermediate–Advanced', value: 'intermediate-advanced' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'All levels', value: 'all' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the Lucide icon (e.g., "Radio", "Brain")',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Full price (e.g., "Tk 1,999")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'memberPrice',
      title: 'Member Price',
      type: 'string',
      description: 'Discounted price for members (e.g., "Tk 999")',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'instructor',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `by ${subtitle}`,
      }
    },
  },
})