import { useId } from 'react'
import '../styles/artwork.css'

function Contours() {
  return (
    <g fill="none" stroke="#b57150" strokeWidth="1" opacity=".28">
      {Array.from({ length: 16 }, (_, index) => (
        <path
          key={index}
          transform={`translate(${index * 9 - 90} ${index * 8 - 76})`}
          d="M-75 216C8 213 23 149 9 112S-7 45 51 36 150 63 168 26 180-24 255-44M406 413c-8-66 25-105 79-124s95-19 83-73-4-77 44-97 56-66 38-114"
        />
      ))}
    </g>
  )
}

function CampusMap({ route = false }: { route?: boolean }) {
  return (
    <g>
      <rect width="180" height="182" fill="#e9ecdd" />
      <path fill="#d4e1cd" d="M23 21 61 3l20 18-22 35-41-3ZM92 143l31-27 49 12 10 35-40 23-39-11ZM-4 115l21-11 22 21-14 24-29 1Z" />
      <g fill="#c8cdbe" stroke="#b7bfaf" strokeWidth=".7">
        <path d="m72 35 15-7 10 23-5 2-3-7-11 5Zm32-15 23-10 8 16-22 10Zm29 38 18-10 13 19-20 11Zm-80 8 18-9 8 16-17 9Zm-32 13 19-8 6 13-20 8Zm71 1 17-8 11 21-6 3-4-8-13 6Zm38 10 24-12 7 15-25 12Zm-91 29 18-9 11 21-8 5-4-9-12 5Zm24 35 22-12 8 15-22 12Z" />
      </g>
      <g stroke="#d2d5c8" fill="none" strokeWidth="9">
        <path d="M-16 110 203 7M23-10l100 206M-8 166l205-93" />
      </g>
      <g stroke="#fffefa" fill="none" strokeWidth="6">
        <path d="M-16 110 203 7M23-10l100 206M-8 166l205-93M-4 61l107-52M73-17l95 187" />
      </g>
      <g fill="#6a735f" fontSize="5" letterSpacing=".2">
        <text x="19" y="38" transform="rotate(-26 19 38)">West lawn</text>
        <text x="106" y="46" transform="rotate(-26 106 46)">College Road</text>
        <text x="112" y="146">East quad</text>
        <text x="70" y="106" transform="rotate(-26 70 106)">Library Walk</text>
      </g>
      <path d={route ? 'm35 137 32-15-12-26 49-23 14 29 21-10' : 'm41 124 22-10-9-19 50-23-11-24'} fill="none" stroke="#3d50db" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={route ? 35 : 41} cy={route ? 137 : 124} r="7.8" fill="#4c60f0" opacity=".23" />
      <circle cx={route ? 35 : 41} cy={route ? 137 : 124} r="4.6" stroke="#fff" strokeWidth="1.8" fill="#4156d9" />
      <g transform={route ? 'translate(139 90)' : 'translate(93 46)'}>
        <path fill="#303c92" d="M0 2s-6-6-6-10a6 6 0 1 1 12 0c0 4-6 10-6 10Z" />
        <circle cy="-8" r="2.1" fill="#fff" />
      </g>
    </g>
  )
}

function Phone({ route, id }: { route?: boolean; id: string }) {
  const screen = `${id}-screen`
  return (
    <g>
      <defs><clipPath id={screen}><rect x="5" y="5" width="161" height="326" rx="20" /></clipPath></defs>
      <rect x="2" y="3" width="171" height="337" rx="25" fill="#9d8d7f" />
      <rect width="171" height="337" rx="25" fill="#f7f4eb" stroke="#a49e91" strokeWidth=".8" />
      <rect x="2.5" y="2.5" width="166" height="332" rx="23" fill="#242621" />
      <g clipPath={`url(#${screen})`}>
        <rect x="5" y="5" width="161" height="326" fill="#fbfbf6" />
        {route && <g transform="translate(5 12) scale(.91 1)"><CampusMap route /></g>}
        <g fill="#272a27">
          <text x="17" y="18.5" fontSize="6.8" fontWeight="700">9:41</text>
          <path d="M132 16h1.5v2H132zm2.5-1.5h1.5V18h-1.5zm2.5-1.5h1.5v5H137z" />
          <rect x="143" y="14" width="9" height="4" rx="1.2" />
          <rect x="153" y="15" width="1" height="2" />
          <rect x="69" y="10" width="33" height="8" rx="4" fill="#1e211e" />
        </g>
        {route ? (
          <>
            <circle cx="22" cy="40" r="9" fill="white" />
            <path d="m24 36-4 4 4 4" fill="none" stroke="#313335" strokeWidth="1.4" />
            <rect x="5" y="169" width="161" height="177" rx="14" fill="#fbfbf6" />
            <rect x="76" y="175" width="20" height="2.3" rx="1.2" fill="#cdcfc5" />
            <text x="16" y="194" fill="#555e96" fontSize="5.8" fontWeight="700" letterSpacing="1">YOUR ROUTE</text>
            <text x="16" y="214" fontSize="18" fontWeight="650" letterSpacing="-.8">Campus Library</text>
            <text x="17" y="226" fontSize="7.1" fill="#5e645e">East entrance · Room L104</text>
            <path d="M17 237H153" stroke="#e1e2d7" />
            <text x="16" y="255" fontSize="13" fontWeight="650">6 min</text>
            <text x="55" y="255" fontSize="8" fill="#646b62">walk · 0.3 mi</text>
            <rect x="16" y="269" width="139" height="25" rx="7" fill="#3949b9" />
            <text x="85" y="285" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Start walk</text>
            <text x="85" y="313" textAnchor="middle" fontSize="7.5" fill="#4c5550">Route details</text>
          </>
        ) : (
          <>
            <path fill="#404eb7" d="m16 45 5-14 5 14-5-3Z" />
            <text x="31" y="44" fontSize="17" fontWeight="700" letterSpacing="-.9">Waypoint</text>
            <circle cx="147" cy="38" r="7.5" fill="#e8e9df" />
            <path d="M144 39h6m-6-3h6" stroke="#4d554a" strokeWidth="1" />
            <rect x="15" y="55" width="141" height="20" rx="6" fill="#f0f1e9" stroke="#d9dbd1" strokeWidth=".7" />
            <circle cx="27" cy="64.5" r="3" fill="none" stroke="#636956" />
            <path d="m29.2 66.8 2.4 2.3" stroke="#636956" />
            <text x="36" y="68" fontSize="7" fill="#5b615b">Search campus</text>
            <g transform="translate(5 83) scale(.9 .85)"><CampusMap /></g>
            <rect x="5" y="229" width="161" height="110" rx="13" fill="#fbfbf6" />
            <rect x="75" y="235" width="20" height="2.3" rx="1.2" fill="#cdcfc5" />
            <text x="16" y="255" fontSize="12" fontWeight="650">Nearby places</text>
            <rect x="16" y="265" width="26" height="26" rx="5" fill="#dce1ce" />
            <path d="m20 276 9-5 9 5Zm1 10h16m-13-8v6m5-6v6m5-6v6" fill="none" stroke="#657652" strokeWidth="1.3" />
            <text x="49" y="276" fontSize="8.6" fontWeight="650">Campus Library</text>
            <text x="49" y="287" fontSize="6.5" fill="#606657">East entrance · 6 min walk</text>
          </>
        )}
      </g>
    </g>
  )
}

function WaypointArtwork({ id }: { id: string }) {
  const shadow = `${id}-phone-shadow`
  return (
    <>
      <defs>
        <filter id={shadow} x="-40%" y="-30%" width="200%" height="180%">
          <feDropShadow dx="5" dy="9" stdDeviation="8" floodColor="#75482f" floodOpacity=".29" />
        </filter>
      </defs>
      <rect width="720" height="320" fill="#efbc99" />
      <Contours />
      <g transform="translate(150 63) rotate(-12 86 135)" filter={`url(#${shadow})`}>
        <Phone id={`${id}-explore`} />
      </g>
      <g transform="translate(378 -26) rotate(10 86 135)" filter={`url(#${shadow})`}>
        <Phone id={`${id}-route`} route />
      </g>
    </>
  )
}

const shelf = ['All bookmarks', 'Reading list', 'Favorites']

function LibraryArtwork({ id }: { id: string }) {
  const grid = `${id}-grid`
  const window = `${id}-window`
  const depth = `${id}-depth`
  return (
    <>
      <defs>
        <pattern id={grid} width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0v25" fill="none" stroke="#a292c8" strokeWidth=".85" />
        </pattern>
        <clipPath id={window}><rect width="515" height="304" rx="6.5" /></clipPath>
        <filter id={depth} x="-20%" y="-20%" width="160%" height="170%">
          <feDropShadow dx="6" dy="13" stdDeviation="11" floodColor="#67557c" floodOpacity=".31" />
        </filter>
      </defs>
      <rect width="720" height="320" fill="#d4c8eb" />
      <rect width="720" height="320" fill={`url(#${grid})`} opacity=".49" />
      <g transform="translate(101 55) rotate(-5 255 151)" filter={`url(#${depth})`}>
        <g clipPath={`url(#${window})`}>
          <rect width="515" height="304" fill="#fcfaf4" />
          <rect width="112" height="304" fill="#292b32" />
          <g fill="#f4f0e8">
            <path d="M14 18h3v13h-3zm4.5-2h3v15h-3zm4.5 3 3-.8 3.2 12-3 .8z" />
            <text x="35" y="31" fontFamily="Georgia, serif" fontSize="19" letterSpacing="-.7">Index</text>
          </g>
          <text x="15" y="61" fill="#c5c2cd" fontSize="6.8" fontWeight="600" letterSpacing="1.1">WORKSPACE</text>
          <rect x="8" y="70" width="96" height="19" rx="3" fill="#44434c" />
          {shelf.map((label, index) => (
            <g key={label} transform={`translate(0 ${index * 21})`}>
              <path d={['M16 76h7v7l-3.5-2-3.5 2z', 'M16 77h7m-7 2.5h7m-7 2.5h5', 'm19.5 76 1 2 2 .4-1.5 1.6.3 2.2-1.8-1-1.8 1 .3-2.2-1.5-1.6 2-.4z'][index]} fill="none" stroke="#d3d0da" strokeWidth=".9" />
              <text x="29" y="82.5" fontSize="8.2" fill="#e7e4eb">{label}</text>
            </g>
          ))}
          <path d="M15 145H96" stroke="#4a4a51" strokeWidth=".7" />
          <text x="15" y="164" fill="#c5c2cd" fontSize="6.7" fontWeight="600" letterSpacing=".85">COLLECTIONS</text>
          {['Design', 'Development', 'Reading'].map((label, index) => (
            <g key={label} transform={`translate(0 ${index * 18})`}>
              <rect x="16" y="177" width="6" height="6" rx="1.5" fill={['#c5b5d6', '#aec3b5', '#debc9a'][index]} />
              <text x="29" y="183" fontSize="8" fill="#e2dfe6">{label}</text>
            </g>
          ))}
          <text x="133" y="25" fontSize="7.5" fill="#666861">Workspace  /  All bookmarks</text>
          <path d="M112 37h403" stroke="#dedfd7" strokeWidth=".8" />
          <text x="132" y="76" fontFamily="Georgia, serif" fontSize="31" fill="#222622" letterSpacing="-1.5">Library</text>
          <rect x="420" y="55" width="75" height="19" rx="3" fill="#30322f" />
          <text x="457.5" y="67.5" textAnchor="middle" fontSize="7.1" fill="#fbfbf6">+ Add bookmark</text>
          <rect x="133" y="86" width="362" height="20" rx="3" fill="#f3f2eb" stroke="#dfdfd7" strokeWidth=".8" />
          <circle cx="144" cy="95.4" r="2.8" fill="none" stroke="#72756c" />
          <path d="m146 97.5 2.2 2" stroke="#72756c" />
          <text x="154" y="98.5" fontSize="7.5" fill="#656a61">Search your library</text>
          <text x="133" y="126" fontSize="7" fontWeight="650" letterSpacing="1.25" fill="#62675d">SAVED ITEMS</text>
          <g transform="translate(133 135)">
            <rect width="172" height="77" rx="2" fill="#dfb39e" />
            <path d="M37 77a49 49 0 0 1 98 0m-85 0a36 36 0 0 1 72 0m-59 0a23 23 0 0 1 46 0" fill="none" stroke="#895d49" strokeWidth="1.3" />
            <text x="86" y="30" textAnchor="middle" fontSize="17" fontStyle="italic" fontFamily="Georgia, serif" fill="#453027">On form</text>
          </g>
          <g transform="translate(315 135)">
            <rect width="180" height="77" rx="2" fill="#c7cfb6" />
            {[0, 1, 2, 3].map((index) => (
              <ellipse key={index} cx={66 + index * 16} cy="38.5" rx="20" ry="27" fill="none" stroke="#59634b" strokeWidth="1.4" />
            ))}
          </g>
          <text x="133" y="227" fontSize="10.5" fontWeight="650">Notes on visual form</text>
          <text x="315" y="227" fontSize="10.5" fontWeight="650">Interface patterns</text>
          <text x="133" y="240" fontSize="7.2" fill="#696d63">journal.example  ·  Reading</text>
          <text x="315" y="240" fontSize="7.2" fill="#696d63">studio.example  ·  Design</text>
          <path d="M133 254h362" stroke="#dedfd7" />
          <text x="133" y="275" fontSize="10" fill="#454b42">Building a personal collection</text>
          <text x="493" y="275" textAnchor="end" fontSize="7.5" fill="#666d60">Article</text>
        </g>
        <rect width="515" height="304" rx="6.5" fill="none" stroke="#3e3d48" strokeWidth="1" />
      </g>
    </>
  )
}

export default function ProjectArtwork({ slug }: { slug: string }) {
  // IDs are instance-specific because a project can appear twice on the same page.
  const id = `art-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const isWaypoint = slug === 'waypoint'
  const isIndex = slug === 'index'
  const label = isWaypoint
    ? 'Waypoint concept screens showing campus search and walking directions.'
    : isIndex
      ? 'Index concept screen showing a bookmark library with collections, saved articles and search.'
      : 'Project cover illustration.'

  return (
    <svg className="project-artwork" viewBox="0 0 720 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} focusable="false">
      {isWaypoint && <WaypointArtwork id={id} />}
      {isIndex && <LibraryArtwork id={id} />}
      {!isWaypoint && !isIndex && (
        <>
          <rect width="720" height="320" fill="#d9deea" />
          <g fill="#f4f4ef" stroke="#8e9cba">
            {[0, 1, 2].map((index) => (
              <path key={index} transform={`translate(0 ${-16 * index})`} d="m174 188 186-98 186 75-186 98z" />
            ))}
          </g>
        </>
      )}
    </svg>
  )
}
