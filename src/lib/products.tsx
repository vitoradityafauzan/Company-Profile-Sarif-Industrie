const base_url = process.env.BASE_URL_CONTENTFUL
const space_id = process.env.SPACE_ID_CONTENTFUL
const token = process.env.TOKEN_CONTENTFUL
import resolveResponse from 'contentful-resolve-response'

export const getProducts = async () => {
    
    const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=sarifIndustrieProductContent&include=10`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}