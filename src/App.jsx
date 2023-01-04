import './css/App.css'
import './css/topics.css'
import './css/code.css'
import './css/snippet.css'
import './css/search.css'
import Header from './Header'
import Topics from './Topics'



export default function App() {
  return (
    <main className="main">
      <Header></Header>
      <Topics></Topics>
      {/*
      <Code></Code>
      */}
    </main>
  )
}
