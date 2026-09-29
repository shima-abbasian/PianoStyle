import SmartLink from '../common/SmartLink'
import site from '../../data/site.fa.json'

export default function HeroSection() {
  const hero = site.hero
  return (
    <section className="vb-hero" style={{ backgroundColor: hero.bgColor }} aria-label="پیشنهاد ویژه">
      <picture>
        <source media="(min-width: 48rem)" srcSet={hero.image} />
        <img src={hero.imageMobile} alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-center" /></picture>
      <span className="vb-hero__scrim" aria-hidden="true" />
      <SmartLink href={hero.url} className="absolute inset-0 z-[3]" aria-label={hero.logoAlt} />
      <div className="vb-hero__content">
        <img src={hero.logo} alt={hero.logoAlt} className="vb-hero__logo" width="300" height="150" />
        <p className="vb-hero__amount">
          <span>{hero.amount}</span>
          <span className="vb-hero__off">{hero.amountSuffix}
          </span>
        </p>
        <p className="vb-hero__conditions">{hero.conditions}<br />
          <b>{hero.conditionsStrong}</b>
        </p>
        <span className="vb-white-cta relative z-[4] mt-5">{hero.cta}</span>
      </div>
    </section>
  )
}
