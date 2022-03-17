const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
    // An array with your links
    const links = [
        { url: "/", changefreq: "daily", priority: 0.3 },
        { url: "/contact", changefreq: "daily", priority: 0.3 },
        { url: "/apropos", changefreq: "daily", priority: 0.3 },
        { url: "/faq", changefreq: "daily", priority: 0.3 },
        { url: "/login", changefreq: "daily", priority: 0.3 },
        { url: "/register", changefreq: "daily", priority: 0.3 },
        { url: "/searchpage", changefreq: "daily", priority: 0.3 },
    ];


    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
};