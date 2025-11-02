import React from "react";
import "./cardStyle.css"; // Pastikan nama file ini sudah benar

function Card(props) {
  const { title, description, imageUrl, rating, alamat } = props.dataToko;
  const alamatTerkode = encodeURIComponent(alamat);
  const gmapLink = `https://www.google.com/maps/search/?api=1&query=-6.2088,106.8456${alamatTerkode}`;
  return (
    // 1. Komentar HTML diganti/dihapus
    <div className="card">
      <div className="card__shine"></div>
      <div className="card__glow"></div>
      <div className="card__content">
        <div className="card__badge">NEW</div>

        {/* 2. Sintaks 'style' diperbaiki menjadi objek */}
        <div style={{ "--bg-color": "#a78bfa" }} className="card__image">
          <img src={imageUrl} alt={title} />
        </div>

        <div className="card__text">
          <p className="card__title">{title}</p>
          <div className="umkm-rating">
            <span>⭐ {rating}</span>
          </div>
          <p className="card__description">{description}</p>
          <a
            href={gmapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="umkm-gmaps-button"
          >
            Lihat di Peta
          </a>
        </div>
        <div className="card__footer">
          {/* <div className="card__price">$49.99</div> */}
          <div className="card__button">
            <svg height="16" width="16" viewBox="0 0 24 24">
              <path
                // 3. Atribut 'stroke-width' diubah jadi 'strokeWidth'
                strokeWidth="2"
                stroke="currentColor"
                d="M4 12H20M12 4V20"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
