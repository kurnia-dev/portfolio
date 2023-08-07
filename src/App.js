import Header from './Header'
import Hero from './Hero'
import Footer from './Footer';
import "@fontsource/poppins/300.css"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 


function App() {
  return (
    <>
      <Header/>
      <main className="max-w-[1080px] mx-auto">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App;
