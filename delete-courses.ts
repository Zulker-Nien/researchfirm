import { client } from "./sanity/lib/client"


const sanityClient = client.withConfig({ apiVersion: '2025-01-01' })

async function deleteAllCourses() {
    console.log('Deleting all documents of type "course"...')

    const docs = await sanityClient.fetch('*[_type == "course"]._id')

    if (docs.length === 0) {
        console.log('No course documents found.')
        return
    }

    console.log(`Found ${docs.length} course documents. Deleting...`)

    const transaction = sanityClient.transaction()
    docs.forEach((id: string) => transaction.delete(id))

    await transaction.commit()
    console.log(`Deleted ${docs.length} course documents!`)
}

deleteAllCourses()