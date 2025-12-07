import { defineType, defineField, defineArrayMember } from 'sanity'
import { Sparkles } from 'lucide-react'

export const researchTopic = defineType({
    name: 'researchTopic',
    title: 'Research Topic',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Topic Title',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required().min(50),
        }),
        defineField({
            name: 'leadResearcher',
            title: 'Lead Researcher',
            type: 'reference',
            to: [{ type: 'researcher' }],
            // Remove this if you prefer simple string
        }),
        defineField({
            name: 'researcherName',
            title: 'Researcher Name (Legacy)',
            type: 'string',
            description: 'Use only if not using Researcher reference',
            hidden: ({ document }) => !!document?.leadResearcher,
        }),
        defineField({
            name: 'wings',
            title: 'Research Wings',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{ type: 'wing' }],
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'regions',
            title: 'Regions / Countries',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'isFlagship',
            title: 'Flagship Topic?',
            type: 'boolean',
            description: 'Highlight with special badge and priority',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],

    preview: {
        select: {
            title: 'title',
            researcher: 'leadResearcher.name',
            researcherLegacy: 'researcherName',
            flagship: 'isFlagship',
            wings: 'wings',
        },
        prepare({ title, researcher, researcherLegacy, flagship, wings }) {
            return {
                title,
                subtitle: `${researcher || researcherLegacy || 'No researcher'} • ${wings?.length ? wings.map((w: any) => w.title).join(', ') : 'No wings'}`,
                media: flagship 
            }
        },
    },

    orderings: [
        {
            title: 'Flagship First',
            name: 'flagshipDesc',
            by: [
                { field: 'isFlagship', direction: 'desc' },
                { field: 'publishedAt', direction: 'desc' },
            ],
        },
    ],
})