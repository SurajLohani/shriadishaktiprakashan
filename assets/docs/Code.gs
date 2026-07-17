/*
  श्री आदिशक्ति प्रकाशन — Order + Newsletter automation
  Google Apps Script (Web App) — logs orders & newsletter signups to a Google Sheet.

  SETUP (one-time, ~10 minutes):
  1. Go to https://sheet.new to create a new Google Sheet. Name it "SAP Orders".
  2. Create two tabs (bottom of sheet): "Orders" and "Newsletter".
     Orders tab header row (A1:G1): Timestamp | Name | Email/Phone | Book | Type (Paperback/Ebook) | Amount | Source (Razorpay/WhatsApp/Email)
     Newsletter tab header row (A1:B1): Timestamp | Email
  3. In the Sheet, go to Extensions > Apps Script. Delete any starter code and paste this whole file.
  4. Click Deploy > New deployment > select type "Web app".
     - Execute as: Me
     - Who has access: Anyone
  5. Click Deploy, authorize when prompted (it's your own script, safe to allow).
  6. Copy the Web App URL it gives you (ends in /exec).
  7. Paste that URL into index.html's newsletter script (replace PASTE_YOUR_APPS_SCRIPT_URL_HERE)
     and into any order-webhook integration Suraj sets up later.
  8. Re-deploy (Deploy > Manage deployments > Edit > New version) any time you edit this code.
*/

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var now = new Date();

  if (data.type === 'newsletter') {
    var nl = ss.getSheetByName('Newsletter');
    nl.appendRow([now, data.email]);
  } else if (data.type === 'order') {
    var ord = ss.getSheetByName('Orders');
    ord.appendRow([now, data.name || '', data.contact || '', data.book || '', data.variant || '', data.amount || '', data.source || '']);
  }

  return ContentService.createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("SAP order automation is live.");
}
