import React, { useEffect, useMemo, useRef } from 'react'

const SCRIPT_SRC = 'https://public.tableau.com/javascripts/api/viz_v1.js'
let scriptLoadingPromise = null

const loadTableauScript = () => {
  if (typeof window !== 'undefined' && window.tableau) return Promise.resolve()
  if (scriptLoadingPromise) return scriptLoadingPromise

  scriptLoadingPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', resolve, { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = resolve
    script.onerror = () => reject(new Error('Failed to load Tableau embed script'))
    document.body.appendChild(script)
  })

  return scriptLoadingPromise
}

export default function TableauEmbed({
  id,
  title = 'Tableau visualization',
  path,
  staticImage,
  hostUrl = 'https://public.tableau.com/',
  toolbar = 'yes',
  heightRatio = 0.75,
  params = {},
  className = ''
}) {
  const containerRef = useRef(null)
  const placeholderId = useMemo(() => id || `tableau-${Math.random().toString(36).slice(2, 8)}`, [id])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const objectEl = container.querySelector('object')
    if (!objectEl) return

    const setSize = () => {
      objectEl.style.width = '100%'
      objectEl.style.height = `${Math.round(container.offsetWidth * heightRatio)}px`
    }

    setSize()
    loadTableauScript().then(setSize).catch(() => {})

    const handleResize = () => setSize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [heightRatio, path])

  const baseParams = {
    host_url: encodeURIComponent(hostUrl),
    embed_code_version: '3',
    path,
    toolbar,
    static_image: staticImage,
    animate_transition: 'yes',
    display_static_image: 'yes',
    display_spinner: 'yes',
    display_overlay: 'yes',
    display_count: 'yes',
    language: 'en-US',
    filter: 'publish=yes',
    ...params
  }
  const paramEntries = Object.entries(baseParams).filter(([, value]) => value !== undefined && value !== null)

  const combinedClassName = ['tableau-shell', className].filter(Boolean).join(' ')

  return (
    <div className={combinedClassName} id={placeholderId} ref={containerRef} style={{ position: 'relative' }}>
      <noscript>
        <a href="#tableau-fallback">
          <img alt={title} src={staticImage} style={{ border: 'none', width: '100%' }} />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none' }}>
        {paramEntries.map(([name, value]) => (
          <param key={name} name={name} value={value} />
        ))}
      </object>
    </div>
  )
}