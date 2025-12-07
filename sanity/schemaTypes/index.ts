import { type SchemaTypeDefinition } from 'sanity'
import { course } from './course'
import { wing } from './wing'
import { researcher } from './researcher'
import { researchTopic } from './researchTopic'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    course,
    wing, 
    researcher, 
    researchTopic
  ],
}