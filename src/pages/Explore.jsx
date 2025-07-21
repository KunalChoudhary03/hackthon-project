import Nav from '../components/Nav';
import CircularGallery from '../components/CircularGallery';
import GlitchText from '../components/GlitchText ';
import Storu from '../components/Storu';
import DataRetrev from '../components/DataRetrev';
import About from './About';
const Explore = () => {
  return (
    <div className='bg-black m-0 overflow-hidden '>
      <div >
      <Nav />
  <div className='mt-20 p-5'>
<GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
 Tranding Skills
</GlitchText>
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
  </div>
</div>
  <span className='bg-black'>
  <p> 
  <div className='mt-20 p-5'><GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
 Meet our Mentores
</GlitchText></div></p>
  <DataRetrev />
</span>
  <div className='mt-20 p-5'><GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
 Skill Success Stories
</GlitchText></div>
 <span className='flex gap-3 overflow-auto p-5'>
<Storu />
</span>

      </div>
      <span>
        <About />
      </span>
    </div>
    
  )
}

export default Explore
