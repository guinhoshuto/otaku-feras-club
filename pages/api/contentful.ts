// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import * as contentful from 'contentful'

// type Data = {
//   name: string
// }

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
})

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: NextApiResponse
) {

  // client.getSpace()
  // .then((space) => space.getEnvironment('<environment_id>'))
  // .then((env) => env.getEntries({'metadata.tags.sys.id[all]': 'tagOne,tagTwo'}))
  // .then((entries) => console.log(entries))
  // .catch(res.status(500).json({erro: erro}))

  const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&metadata.tags.sys.id[in]=otaku`
  const entries = await axios.get(url)

  // const entries = await client.getEntries({
  //   content_type: 'blog_post',
  //   // 'metadata.tags.sys.id[all]: 'otaku-feras-club'
  // })
  console.log(entries)
  res.status(200).json({ posts: entries.data.includes.Asset })
  // res.json({ 'oi': 'oi' })
}
