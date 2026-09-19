import React, { useState } from 'react';

// Tech data for orbits
const innerOrbitTech = [
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68A063' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
];

const middleOrbitTech = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', color: '#3DDC84' },
  { name: 'Apple iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', color: '#A2AAAD' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
];

const outerOrbitTech = [
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', color: '#FF6C37' },
];

export const OrbitingTechStack = ({ size = 'large' }) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = 50 + 50 * Math.cos(angle);
    const y = 50 + 50 * Math.sin(angle);
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <div className={`orbit-container-wrapper ${size === 'small' ? 'size-small' : ''}`}>
      {/* Background Glow */}
      <div className="orbit-glow-effect" />

      {/* Orbit Container */}
      <div className="orbit-stage">
        {/* Center Hub */}
        <div className="orbit-center-hub">
          <div className="hub-inner-circle">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
              alt="Git Hub Core" 
              className="hub-icon"
            />
          </div>
          {hoveredTech && (
            <div className="orbit-active-tooltip">
              {hoveredTech}
            </div>
          )}
        </div>

        {/* 1. Inner Orbit */}
        <div className="orbit-ring orbit-ring-inner">
          <div className="orbit-rotator rotator-cw-fast">
            {innerOrbitTech.map((tech, idx) => {
              const pos = getPosition(idx, innerOrbitTech.length);
              return (
                <div 
                  key={tech.name} 
                  className="orbit-node-item" 
                  style={{ left: pos.left, top: pos.top }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="orbit-node-bubble counter-rotator-cw-fast">
                    <img src={tech.icon} alt={tech.name} className="tech-badge-img" loading="eager" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Middle Orbit */}
        <div className="orbit-ring orbit-ring-middle">
          <div className="orbit-rotator rotator-ccw-medium">
            {middleOrbitTech.map((tech, idx) => {
              const pos = getPosition(idx, middleOrbitTech.length);
              return (
                <div 
                  key={tech.name} 
                  className="orbit-node-item" 
                  style={{ left: pos.left, top: pos.top }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="orbit-node-bubble counter-rotator-ccw-medium">
                    <img src={tech.icon} alt={tech.name} className="tech-badge-img" loading="eager" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Outer Orbit */}
        <div className="orbit-ring orbit-ring-outer">
          <div className="orbit-rotator rotator-cw-slow">
            {outerOrbitTech.map((tech, idx) => {
              const pos = getPosition(idx, outerOrbitTech.length);
              return (
                <div 
                  key={tech.name} 
                  className="orbit-node-item" 
                  style={{ left: pos.left, top: pos.top }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="orbit-node-bubble counter-rotator-cw-slow">
                    <img src={tech.icon} alt={tech.name} className="tech-badge-img" loading="eager" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
