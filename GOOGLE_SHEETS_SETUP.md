# Google Sheets Form Setup Guide

This guide will help you connect your contact form to Google Sheets to automatically save responses.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BlueOak Contact Form Responses"
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Startup Name`
   - E1: `Description`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any existing code
3. Copy and paste this EXACT code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    Logger.log('Received data: ' + JSON.stringify(data));
    
    // Add new row with form data
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.startupName || '',
      data.description || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Form handler is working!');
}
```

4. Click **Save** (disk icon)
5. Name your project "Contact Form Handler"

## Step 3: Deploy the Script (IMPORTANT!)

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - Description: "Contact Form to Sheets"
   - Execute as: **Me** (YOUR_EMAIL@gmail.com)
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** > **Go to Contact Form Handler (unsafe)**
9. Click **Allow**
10. **Copy the Web App URL**

## Step 4: Test the Deployment

1. Copy your Web App URL
2. Open a new browser tab
3. Paste the URL and press Enter
4. You should see: "Form handler is working!"
5. If you see this, the script is deployed correctly

## Step 5: Check Execution Log

After submitting the form:
1. Go back to Apps Script
2. Click on "Executions" (clock icon on left sidebar)
3. You should see recent executions
4. Click on any execution to see logs
5. Check if there are any errors

## Common Issues:

### Issue 1: Script not deployed as "Anyone"
- Make sure "Who has access" is set to **Anyone**, not "Only myself"
- Redeploy if needed

### Issue 2: Wrong sheet selected
- Make sure the script is attached to the correct Google Sheet
- The sheet should have the headers in row 1

### Issue 3: Permissions not granted
- Make sure you clicked "Allow" when authorizing
- Try redeploying and authorizing again

## Your Current URL:
```
https://script.google.com/macros/s/AKfycbz7nhnWIDck4_JbW5wPBQPKZdAex0ct0UN2tbZOb7Z-wRA2lWFbY8ZPZw3qMOUr87o/exec
```

Test this URL in your browser - you should see "Form handler is working!"

