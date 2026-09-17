import Contact from './components/Contact'
import Current from './components/Current'
import Featured from './components/Featured'
import Hero from './components/Hero'
import More from './components/More'
import Nav from './components/Nav'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Current />
        <More />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
