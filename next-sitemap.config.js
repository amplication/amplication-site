const fs = require('fs');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://amplication.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    const file = `${config.sourceDir}/server/pages${path}.html`;
    if (fs.existsSync(file)) {
      try {
        if ((await fs.promises.readFile(file, 'utf8')).match(/\<meta.*noindex.*>/im)) {
          return null
        }
      } catch (error) {
        console.error(error);
      }
    }

    return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs || [],
    };
  },
};
