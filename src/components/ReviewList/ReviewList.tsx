type Review = {
  id: number;
  bookId: number;
  name: string;
  date: string;
  content: string;
};

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  console.log(reviews);
  return (
    <div data-testid="reviews-container">
      {reviews.map((review) => (
        <div data-testid="review" key={review.id}>
          {review.content}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
