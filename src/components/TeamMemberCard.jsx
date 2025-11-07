import React from 'react'

export default function TeamMemberCard({
  name,
  yearMajor,
  role,
  imgSrc,
  linkedinUrl,
  email
}) {
  return (
    <article className="team-card" role="listitem">
      <img className="team-avatar" src={imgSrc} alt={`${name} headshot`} loading="lazy" />

      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-yearmajor">{yearMajor}</p>
        <p className="team-role">{role}</p>
      </div>

      {/* Buttons sit at the bottom center and always side by side */}
      <div className="team-actions">
        <a
          className="icon-btn linkedin"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open LinkedIn profile for ${name}`}
          title="LinkedIn"
        >
          {/* LinkedIn icon */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.79v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.32 5.98 7.64V24h-5v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V24h-5V8.98z"/>
          </svg>
        </a>

        <a
          className="icon-btn email"
          href={`mailto:${email}`}
          aria-label={`Email ${name}`}
          title="Email"
        >
          {/* Email icon */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
          </svg>
        </a>
      </div>
    </article>
  )
}
