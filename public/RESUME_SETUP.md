# Adding Your Resume/CV

To enable the CV download functionality:

## Quick Setup

1. **Prepare Your Resume**
   - Export your CV as a PDF
   - Name it: `Elizabeth_Muthoni_Resume.pdf`

2. **Add to Public Folder**
   - Place the PDF in: `public/Elizabeth_Muthoni_Resume.pdf`
   - This makes it accessible at `/Elizabeth_Muthoni_Resume.pdf`

3. **Alternative: Use Google Drive or Dropbox**
   - Upload your resume to Google Drive or Dropbox
   - Get a direct download link
   - Update the link in `components/Hero.tsx`:
   ```typescript
   href="YOUR_DIRECT_DOWNLOAD_LINK"
   ```

## Current Setup

The download button in the Hero section currently points to:
```
/Elizabeth_Muthoni_Resume.pdf
```

## Customization

You can also:
- Change the button text in `components/Hero.tsx`
- Add multiple resume versions (e.g., different formats or languages)
- Track downloads using analytics

## Example: Google Drive Link

1. Upload to Google Drive
2. Right-click → Share → Get link
3. Change permissions to "Anyone with the link"
4. Copy the file ID from the URL
5. Use this format:
   ```
   https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
   ```

Once you add your PDF to the `public` folder, the download button will work automatically!
