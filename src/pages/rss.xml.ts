import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const origin = site?.toString().replace(/\/$/, '') ?? '';

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${origin}/posts/${post.slug}/</link>
      <guid>${origin}/posts/${post.slug}/</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>${
        post.data.description
          ? `\n      <description>${escapeXml(post.data.description)}</description>`
          : ''
      }
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>krewllobster</title>
    <link>${origin}/</link>
    <description>Posts from krewllobster</description>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
