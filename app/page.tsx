import { ArrowUpRight, AtSign, Code2, ExternalLink, Mail, MapPin, Sparkles } from 'lucide-react'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML & CSS',
  'Git',
  'Responsive Design',
  'Apigee',
  'REST APIs',
  'OAuth2',
  'JWT',
  'Python',
  'CI/CD',
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 flex items-start gap-4">
      <span className="mt-2 h-px w-10 bg-cyan-400" aria-hidden="true" />
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      </div>
    </div>
  )
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-800">{children}</span>
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="text-lg font-bold tracking-tight text-white">ES<span className="text-cyan-300">.</span></a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
            <a className="transition-colors hover:text-white" href="#about">About</a>
            <a className="transition-colors hover:text-white" href="#skills">Skills</a>
            <a className="transition-colors hover:text-white" href="#projects">Projects</a>
            <a className="rounded-full border border-white/30 px-4 py-2 text-white transition-colors hover:border-cyan-300 hover:text-cyan-200" href="#contact">Let&apos;s talk</a>
          </div>
          <a href="#contact" className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white sm:hidden">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[660px] items-center bg-[#071b3a] px-6 pb-20 pt-32 lg:min-h-[720px] lg:px-8">
        <div className="pointer-events-none absolute right-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full border border-cyan-300/15" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[3%] top-[-5%] h-[360px] w-[360px] rounded-full border border-cyan-300/10" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-160px] left-[-100px] h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-200">
              <Sparkles className="size-4" aria-hidden="true" />
              Building thoughtful digital experiences
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Hello, I&apos;m</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl">Ermias<br /><span className="text-cyan-300">Seyoum.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">A developer focused on API development, reliable integrations, and security-minded solutions that help systems communicate clearly and safely.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#071b3a] transition-transform hover:-translate-y-0.5">View my work <ArrowUpRight className="size-4" aria-hidden="true" /></a>
              <a href="#about" className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200">More about me</a>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="relative h-72 w-72 rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-cyan-300/20 bg-[#0b2852] p-6">
                <Code2 className="size-9 text-cyan-300" aria-hidden="true" />
                <div><p className="text-4xl font-bold text-white">01</p><p className="mt-2 text-sm text-slate-300">Curiosity-driven<br />development</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="01 / About me" title="A little about my approach." />
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-2xl font-semibold leading-snug text-[#071b3a]">I care about the details that make a product feel simple, intentional, and human.</p></div>
          <div className="space-y-5 text-base leading-8 text-slate-600"><p>I&apos;m Ermias Seyoum, a developer who enjoys turning ideas into accessible, responsive web experiences. I&apos;m interested in the intersection of design, technology, and the small interactions that help people get things done.</p><p>I&apos;m always learning, experimenting, and looking for better ways to build. <Placeholder>Add your location, focus, or personal story here.</Placeholder></p></div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-8 border-y border-slate-200 bg-slate-50 px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="02 / Toolkit" title="Technical skills." /><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{skills.map((skill, index) => <div key={skill} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"><span className="font-mono text-xs text-cyan-500">0{index + 1}</span>{skill}</div>)}</div><p className="mt-8 text-sm text-slate-500"><Placeholder>Add more skills, tools, or technologies here.</Placeholder></p></div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="03 / Selected work" title="Featured project." />
        <article className="group overflow-hidden rounded-3xl bg-[#071b3a] shadow-xl shadow-slate-900/10"><div className="grid lg:grid-cols-[1.15fr_0.85fr]"><div className="relative min-h-[300px] overflow-hidden bg-[#0b2852] p-8 sm:p-12"><div className="absolute -right-20 -top-24 size-72 rounded-full border-[36px] border-cyan-300/10" aria-hidden="true" /><div className="relative flex h-full flex-col justify-between"><p className="font-mono text-sm text-cyan-300">01 — Featured build</p><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Multiplayer · Web game</p><h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Football<br /><span className="text-cyan-300">Face-Off</span></h3></div></div></div><div className="flex flex-col justify-between p-8 sm:p-12"><div><p className="mb-5 text-lg leading-8 text-slate-300">A fast-paced multiplayer soccer trivia game where football fans can challenge friends, test their knowledge, and compete head-to-head.</p><div className="flex flex-wrap gap-2"><span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-300">Game experience</span><span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-300">Multiplayer</span></div></div><a href="https://football-face-off.barokermi.chatgpt.site" target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-cyan-300 transition-colors hover:text-white">Play the Game <ArrowUpRight className="size-4" aria-hidden="true" /></a></div></div></article>
        <p className="mt-8 text-sm text-slate-500"><Placeholder>Add additional projects, case studies, or GitHub links here.</Placeholder></p>
      </section>

      <section id="contact" className="scroll-mt-8 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><SectionHeading eyebrow="04 / Get in touch" title="Have an idea in mind?" /><p className="text-lg leading-8 text-slate-600">I&apos;d love to hear what you&apos;re working on. Reach out using the details below, or replace the placeholders with your preferred contact information.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-3"><a href="mailto:your.email@example.com" className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-cyan-300"><Mail className="mb-8 size-5 text-cyan-500" aria-hidden="true" /><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p><p className="mt-2 font-semibold text-slate-800">[your.email@example.com]</p></a><div className="rounded-2xl border border-slate-200 bg-white p-5"><MapPin className="mb-8 size-5 text-cyan-500" aria-hidden="true" /><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Location</p><p className="mt-2 font-semibold text-slate-800">[Your location]</p></div><div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"><a aria-label="GitHub profile placeholder" href="#contact" className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-[#071b3a] hover:text-white"><ExternalLink className="size-4" aria-hidden="true" /></a><a aria-label="LinkedIn profile placeholder" href="#contact" className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-[#071b3a] hover:text-white"><AtSign className="size-4" aria-hidden="true" /></a><div className="ml-2"><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Social</p><p className="mt-2 font-semibold text-slate-800">[Add profile links]</p></div></div></div></div></section>

      <footer className="bg-[#071b3a] px-6 py-8 text-sm text-slate-400 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Ermias Seyoum</p><p>Designed & built with intention.</p></div></footer>
    </main>
  )
}

