import './index.css'

const TechCard = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={`tech-card ${className}`}>
      <h1 className="tech-heading">{title}</h1>
      <p className="tech-para">{description}</p>
      <div className="tech-avatar">
        <img className="tech-image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechCard
