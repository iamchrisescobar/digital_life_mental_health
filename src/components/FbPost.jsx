import React from 'react'

export default function FbPost({ title, likes = 0, comments = 0, shares = 0, bodyClassName = '', children }) {
  const bodyClasses = ['fb-post-body', 'stack', bodyClassName].filter(Boolean).join(' ')

  return (
    <article className="fb-post">
      <div className="fb-post-header">
        <div className="fb-avatar">DL</div>
        <div className="fb-meta">
          <p className="fb-name">Digital Life</p>
          <p className="fb-timestamp">Today | Public</p>
        </div>
        <span className="fb-dots" aria-hidden>...</span>
      </div>

      <div className={bodyClasses}>
        {title && <h2>{title}</h2>}
        {children}
      </div>

      <div className="fb-divider" />
      <div className="fb-stats">
        <span>{likes.toLocaleString()} likes | {shares} shares</span>
        <span>{comments} comments</span>
      </div>
      <div className="fb-divider" />
      <div className="fb-actions">
        <button type="button" className="fb-action-btn">Like</button>
        <button type="button" className="fb-action-btn">Comment</button>
        <button type="button" className="fb-action-btn">Share</button>
      </div>
    </article>
  )
}
