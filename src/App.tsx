import Header from './components/headers'
import Landing from './components/landing'
import Footer from './components/footer'
import Experiences from './components/experiences'
import './App.css'
import Portfolio from './components/portfolio'

function App() {
	return (
				<div className='bg-gradient-to-t from-80% from-zinc-900 via-zinc-800 via-91% to-zinc-900 py-10 px-10 md:px-[10%] lg:px-[13%] xl:px-[16%] 2xl:px-[23%]'>
					<Header></Header>
					<main className=''>
						<Landing></Landing>
						<Experiences></Experiences>
						<Portfolio></Portfolio>
					</main>
					<Footer></Footer>
				</div>
	)
}

export default App

