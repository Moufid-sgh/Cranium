import Preloader from "./component/Preloader";
import Skull from "./component/Skull";



function App() {

  return (
    <main>
      <Preloader />
      <div className="flex items-center justify-around h-screen">
        <p className="text-4xl tracking-wide font-bold w-1/2 leading-[53px]">
          Explore my creative sanctuary, where I use animal skulls as my medium to reshape the essence of nature
        </p> 
        {/* <p className="text-4xl tracking-wide font-bold w-1/2 leading-[50px]">
          A unique decor that merges craftsmanship with nature, as we transform relics into stunning works of art. 
        </p> 
        <p className="text-4xl tracking-wide font-bold w-1/2 leading-[50px]">
          Embrace the beauty of reimagined wildlife and witness the magic of animal resurrection through my masterpieces.
        </p>  */}
        
        <Skull />
      </div>
    </main>
  )
}

export default App
