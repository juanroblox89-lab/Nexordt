export async function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://nexordt.com/sitemap.xml
`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=604800',
    },
  })
}
