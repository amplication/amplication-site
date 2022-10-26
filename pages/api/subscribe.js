import * as hubspot from '@hubspot/api-client';

const hubspotClient = new hubspot.Client({
  apiKey: process.env.NEXT_PRIVATE_HUBSPOT_API_KEY,
});

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.end();
  /** @type {{ EMAIL: string; NAME: string; SOURCE: string; }} */
  const body = JSON.parse(req.body);

  if (!body.EMAIL || !body.NAME || !body.SOURCE) return res.end();
  const nameArr = String(body.NAME).split(' ');
  try {
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        firstname: nameArr.shift(),
        lastname: nameArr.join(' '),
        email: body.EMAIL,
        reportedsource: body.SOURCE,
      },
    });
    res.end(JSON.stringify({result: 'success'}));
  } catch (e) {
    if (e.body.category === 'CONFLICT')
      return res.end(JSON.stringify({result: 'success'}));
    console.warn(e);
    res.end();
  }
}
