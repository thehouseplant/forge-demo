export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="stylesheet" href="https://cdn.forge.tylertech.com/v1/css/tyler-font.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Forge Demop</title>
        <meta name="description" content="A small demo application combining Forge web components with Next.js 15 and React 19" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}