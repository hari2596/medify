
import './NewsCard.css' ;

function NewsCard({ newsdata }) {
  return (
    <div className="newsCard">
      <div className="news-Image">
        <img src={newsdata.image} alt="Newsimage" />
      </div>

      <div className="newsContent">
        <p>
          <span>{newsdata.topic} </span>
          <span>{newsdata.date}</span>
        </p>
        <p className="newsDetail"> {newsdata.content}</p>
        <p>
          <img src={newsdata.authorDP} alt="Author" />
          {newsdata.author}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
