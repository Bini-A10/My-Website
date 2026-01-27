const STRAPI_URL = "http://localhost:1337";

export async function fetchHome() {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/home?populate[hero][populate]=*&populate[featured_projects][populate]=*&populate[seo][populate]=*`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch (error) {
        console.error("fetchHome error:", error);
        return null;
    }
}
