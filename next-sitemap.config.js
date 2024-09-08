module.exports = {
  siteUrl: "https://saisharankaram-github-io.vercel.app",
  generateRobotsTxt: true, // Generate a robots.txt file with the sitemap included
  sitemapSize: 7000, // Split sitemap into multiple files if you have more URLs
  outDir: "./public", // Where to save sitemaps (relative to the base directory)
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      "https://saisharankaram-github-io.vercel.app/sitemap.xml", // Main sitemap
    ],
  },
};
