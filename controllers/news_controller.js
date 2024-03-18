const NewsAPI = require('newsapi');
const newsAPI = new NewsAPI(process.env.NEWS_API_KEY);

module.exports.topHeadLine = async function (req, res) {
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them

    try {
        const response = await newsAPI.v2.topHeadlines({
            // sources: 'bbc-news,the-verge',
            // q: 'bitcoin',
            // category: 'business',
            language: 'en',
            country: 'us'
        });
        return res.json({ success: true, msg: "All Top headline", data: { news: response } });

    } catch (error) {
        console.log('error in getting  top headline ..', error);
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }

}

module.exports.everyThing = async function (req, res) {
    // To query /v2/everything
    // You must include at least one q, source, or domain
    try {
        const response = await newsAPI.v2.everything({
            q: 'bitcoin',
            sources: 'bbc-news,the-verge',
            domains: 'bbc.co.uk, techcrunch.com',
            // from: '2023-10-01',
            // to: '2024-02-02',
            language: 'en',
            //sortBy: 'relevancy',
            //page: 2
        })
        return res.json({ success: true, msg: "Everything News", data: { news: response } });

    } catch (error) {
        console.log('error in getting news ..', error);
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }

}

module.exports.sources = async function (req, res) {
    // To query sources
    // All options are optional
    try {
        const response = await newsAPI.v2.sources({
            category: 'technology',
            language: 'en',
            country: 'us'
        })
        return res.json({ success: true, msg: "Sources.. News", data: { news: response } });

    } catch (error) {
        console.log('error in getting Sources.. News ..', error);
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }
}