type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  return (
    <main>
      <article>
        <p>Blog Article</p>

        <h1>{slug}</h1>

        <p>
          blog
        </p>

        <p>
          Written article content will be here.
        </p>
      </article>
    </main>
  );
}