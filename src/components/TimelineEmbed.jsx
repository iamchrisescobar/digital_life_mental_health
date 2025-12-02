import React from 'react'

const TIMELINE_SRC = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRkXHGysAiVfLLhS7uG2r7xJCgDzUYhCG3oQ0XruUeKtC07EOR7wf7q3Y87qy_620CAg6T58FcWJw26&font=Default&lang=en&initial_zoom=2&width=100%25&height=650'

export default function TimelineEmbed() {
  return (
    <div className="timeline-embed">
      <iframe
        title="Social Media Timeline"
        src={TIMELINE_SRC}
        loading="lazy"
        allowFullScreen
        //frameBorder="0"
      />
    </div>
  )
}
