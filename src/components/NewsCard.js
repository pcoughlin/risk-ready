import React from 'react'

const NewsCard = () => {
  return (
    <div className="news-card">
      <div className="news-card__img">
        <img src="/assets/images/headline-img.png" alt="news story" />
      </div>
      <p className="news-card__title">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="news-card__summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        architecto provident harum, tenetur sunt eius dolore recusandae animi
        ut. Nesciunt aspernatur illum provident beatae quo aut fugit ipsum
        obcaecati repellat?
      </div>
    </div>
  )
}

export default NewsCard
