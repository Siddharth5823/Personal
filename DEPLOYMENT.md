# How to Host Your Website for Free 🚀

Here are the best ways to get your website online.

## Option 1: GitHub Pages (Recommended)
**Best for:** A permanent, professional link (e.g., `username.github.io/love-story`).

1.  **Create a Repository:**
    *   Go to [github.com/new](https://github.com/new) and create a repository named `timeline-experience`.
    *   **Important:** You must make it **Public** to use GitHub Pages for free. (Private repos require a Pro account).
    *   *If you want it private for free, use Option 2 (Netlify).*

2.  **Upload Your Code:**
    *   **If using Desktop:** Click "Upload an existing file" on the GitHub setup page, and drag all your project files (`index.html`, `style.css`, `script.js`, and `images` folder) there. Commit changes.
    *   **If using Terminal:**
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git push -u origin main
        ```

3.  **Activate Pages:**
    *   Go to your repository **Settings** tab.
    *   Click **Pages** in the left sidebar.
    *   Under "Build and deployment", set **Source** to `Deploy from a branch`.
    *   Select `main` branch and `/ (root)` folder. Click **Save**.

4.  **Done!**
    *   Wait about 1-2 minutes. Refresh the page to see your live link!

---

## Option 2: Netlify Drop (Easiest / No Account Needed)
**Best for:** Instant link without setting up Git or accounts.

1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Drag and drop your `timeline-experience` folder onto the page.
3.  Your site is live instantly!

---

## Option 3: Vercel
**Best for:** Developers who want fast global performance.

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in your folder and follow the prompts.

## Important Note on Music
Most browsers block auto-playing music. If you added audio, the user usually needs to click/tap the page once before it starts playing.
