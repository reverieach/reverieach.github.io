import 'animal-island-ui/style';
import { Card, Cursor, Divider, Footer, Icon, Title } from 'animal-island-ui';
import { focusItems, links, navItems, projects } from '../data/site';

type PageKey = 'home' | 'projects' | 'education' | 'links';

interface SitePageProps {
  page: PageKey;
}

const pageMeta: Record<PageKey, { title: string; color: 'app-teal' | 'app-green' | 'app-yellow' | 'purple' }> = {
  home: { title: 'Home', color: 'app-teal' },
  projects: { title: 'Projects', color: 'app-green' },
  education: { title: 'Education', color: 'app-yellow' },
  links: { title: 'Links', color: 'purple' },
};

export default function SitePage({ page }: SitePageProps) {
  return (
    <Cursor>
      <div className="site-frame">
        <header className="site-header">
          <a className="brand" href="/" aria-label="Bao Zixuan home">
            <img src="/avatar.jpg" alt="" />
            <span>
              <strong>Bao Zixuan</strong>
              <small>reverieach.github.io</small>
            </span>
          </a>
          <nav className="top-tabs" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = item.label.toLowerCase() === page;
              return (
                <a className={active ? 'top-tab active' : 'top-tab'} href={item.href} aria-current={active ? 'page' : undefined} key={item.href}>
                  {item.label}
                </a>
              );
            })}
          </nav>
        </header>

        <main className="page-panel">
          <div className="panel-title-row">
            <Title size="large" color={pageMeta[page].color}>
              {pageMeta[page].title}
            </Title>
            <p>{pageSubtitle(page)}</p>
          </div>
          {page === 'home' && <HomePanel />}
          {page === 'projects' && <ProjectsPanel />}
          {page === 'education' && <EducationPanel />}
          {page === 'links' && <LinksPanel />}
        </main>
      </div>
      <Footer type="sea" seamless />
    </Cursor>
  );
}

function pageSubtitle(page: PageKey) {
  if (page === 'home') return 'A compact personal hub for AI work, tools, and future notes.';
  if (page === 'projects') return 'Selected public work from GitHub, with utility projects and AI experiments in front.';
  if (page === 'education') return 'Verified education background and current focus at BUPT.';
  return 'Contact, profile, and future entrances for notes, blog, and photos.';
}

function HomePanel() {
  return (
    <div className="home-grid">
      <section className="intro-block" aria-labelledby="home-title">
        <p className="eyebrow">北京邮电大学 · 人工智能学院</p>
        <h1 id="home-title">Bao Zixuan</h1>
        <p className="hero-name">鲍子轩</p>
        <p className="hero-lede">
          AI student building practical tools: homework monitors, game-translation overlays, embedded AI demos,
          and model-training experiments.
        </p>
        <div className="home-actions">
          <a className="button-anchor primary-anchor" href="/projects/">
            View Projects
          </a>
          <a className="button-anchor quiet-anchor" href="https://github.com/reverieach">
            GitHub
          </a>
        </div>
      </section>

      <aside className="profile-column" aria-label="Profile summary">
        <img className="avatar-large" src="/avatar.jpg" alt="Bao Zixuan GitHub avatar" />
        <Card pattern="default" className="profile-card">
          <ProfileLine label="School" value="北京邮电大学" />
          <ProfileLine label="College" value="人工智能学院" />
          <ProfileLine label="Major" value="人工智能" />
          <ProfileLine label="Since" value="2023.09" />
        </Card>
      </aside>

      <Card pattern="app-pink" className="wide-card">
        <h2>What this site is for</h2>
        <p>
          This is the root page first. Blog, notes, and photos can become separate tabs later without changing the
          core navigation.
        </p>
      </Card>

      <Card pattern="app-teal" className="wide-card">
        <h2>Current directions</h2>
        <div className="mini-list">
          {focusItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ProjectsPanel() {
  return (
    <section className="project-grid" aria-label="Selected GitHub projects">
      {projects.map((project) => (
        <a className="project-link" href={project.href} key={project.name}>
          <Card pattern={project.color} className="project-card">
            <div className="project-topline">
              <span className="project-icon">
                <Icon name={project.icon} size={30} bounce />
              </span>
              <span className="project-arrow">Open</span>
            </div>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <ul className="tag-list" aria-label={`${project.name} tags`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Card>
        </a>
      ))}
    </section>
  );
}

function EducationPanel() {
  return (
    <div className="education-layout">
      <Card pattern="app-yellow" className="education-card">
        <h2>Education</h2>
        <p>北京邮电大学 · 人工智能学院</p>
        <p>人工智能（大类招生） · 普通全日制本科</p>
        <p>2023.09 - Present</p>
        <Divider type="line-brown" />
        <p className="small-copy">2023级人工智能学院组织委员 · 优秀学生干部 · 优秀共青团员</p>
      </Card>
      <Card pattern="default" className="education-card">
        <h2>Background</h2>
        <p>2011.09 - 2017.09 · 黄山市屯溪荷花池小学</p>
        <p>2017.09 - 2020.06 · 黄山市屯溪第六中学</p>
        <p>2020.09 - 2023.06 · 黄山市屯溪第一中学</p>
        <p>2023.09 - Present · 北京邮电大学</p>
      </Card>
    </div>
  );
}

function LinksPanel() {
  return (
    <div className="links-layout">
      {links.map((link) => (
        <a className="link-card" href={link.href} key={link.label}>
          <Card pattern="default" className="link-card-inner">
            <h2>{link.label}</h2>
            <p>{link.note}</p>
          </Card>
        </a>
      ))}
      <Card pattern="app-blue" className="wide-card">
        <h2>Reserved tabs</h2>
        <p>Notes, blog, and photo albums are intentionally left as future top-level sections.</p>
      </Card>
    </div>
  );
}

function ProfileLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="profile-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
