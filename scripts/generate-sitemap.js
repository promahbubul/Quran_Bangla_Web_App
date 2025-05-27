import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const links = [];

for (let i = 1; i <= 114; i++) {
  links.push({ url: `/surah/${i}`, changefreq: "weekly", priority: 0.8 });
}

const sitemap = new SitemapStream({
  hostname: "https://alquran-bangla-web-app.vercel.app",
});
const writeStream = createWriteStream("./public/sitemap.xml");

streamToPromise(sitemap)
  .then(() => console.log("✅ Sitemap created successfully!"))
  .catch(console.error);

sitemap.pipe(writeStream);
links.forEach((link) => sitemap.write(link));
sitemap.end();
