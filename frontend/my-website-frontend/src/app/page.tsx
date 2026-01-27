import { fetchHome } from "@/lib/strapi";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export default async function HomePage() {
  const response = await fetchHome();
  const home = response?.data;

  // Since hero is repeatable in the schema, it will be an array. 
  // We'll pass the first hero if it exist, or the whole array if the component expects it.
  const heroData = Array.isArray(home?.hero) ? home.hero[0] : home?.hero;

  if (!home) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Content Not Found</h1>
        <p>
          The Home content has not been created or published in Strapi yet. Please
          log in to the CMS and publish a "Home" single type entry.
        </p>
      </main>
    );
  }

  return (
    <main>
      {heroData && <Hero data={heroData} />}
      {home.featured_projects && <FeaturedProjects data={home.featured_projects} />}
    </main>
  );
}
