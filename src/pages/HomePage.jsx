import { useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import CategoryTiles from '../components/home/CategoryTiles'
import PromoBand from '../components/home/PromoBand'
import FocusSection from '../components/home/FocusSection'
import BrandsSection from '../components/home/BrandsSection'

export default function HomePage() {
  useEffect(() => { document.title = 'پیانو استایل' }, [])
  return <><HeroSection /><CategoryTiles /><PromoBand /><FocusSection /><BrandsSection /></>
}
