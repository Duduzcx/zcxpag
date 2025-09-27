const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

const SHEET_ID = '13ahDuLU1ndhkGj9Qv7J4c5Y0C8P89Xjm-NiNzA7ZmnQ';
const SHEET_RANGE = 'A:E';

// Carregue o JSON da conta de serviço
const serviceAccount = require('./zcxpages-1f0ce15f41a2.json');

async function getSheetsClient() {
  const auth = new GoogleAuth({
    credentials: serviceAccount,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

exports.handler = async function(event) {
  const sheets = await getSheetsClient();

  if (event.httpMethod === 'GET') {
    // Listar depoimentos
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
    });
    const rows = res.data.values || [];
    const [header, ...data] = rows;
    const testimonials = data.map(row => {
      const obj = {};
      header.forEach((key, i) => (obj[key] = row[i]));
      return obj;
    });
    return {
      statusCode: 200,
      body: JSON.stringify(testimonials),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  if (event.httpMethod === 'POST') {
    // Adicionar depoimento
    const body = JSON.parse(event.body);
    const values = [
      body.id,
      body.name,
      body.email,
      body.testimonial,
      body.date,
    ];
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: 'RAW',
      requestBody: { values: [values] },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  return { statusCode: 405, body: 'Method Not Allowed' };
};
