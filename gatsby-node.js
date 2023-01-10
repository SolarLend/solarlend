const path = require(`path`)
const languages = [
    {
        path: "/ru",
        code: "ru",
        language: "ru_RU"

    },
    {
        path: "/",
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

