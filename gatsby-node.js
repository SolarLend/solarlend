const path = require(`path`)
const languages = [
    {
        path: "/",
        code: "ru",
        language: "ru_RU"

    },
    {
        path: "/uk",
        code: "uk",
        language: "uk"

    },

]
exports.createPages = async ({ actions: { createPage } }) => {
    const HomepageTemplate = path.resolve("./src/components/layouts/Homepage.jsx")

    languages.forEach(lang => {
        createPage({
            path: lang.path,
            component: HomepageTemplate,
            context: {
                lang: lang.code,
                language: lang.language
            },
        })
    })
}

