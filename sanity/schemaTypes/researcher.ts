import { defineType, defineField } from 'sanity'

export const researcher = defineType({
    name: 'researcher',
    title: 'Researcher',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortName',
            title: 'Short Name / Initials',
            type: 'string',
            description: 'Used for avatar fallback (e.g., "MH Joy → MH)',
        }),
        defineField({
            name: 'bio',
            title: 'Short Bio',
            type: 'text',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'photo',
        },
        prepare({ title, media }) {
            return {
                title,
                subtitle: 'Lead Researcher',
                media: media
            }
        },
    },
})