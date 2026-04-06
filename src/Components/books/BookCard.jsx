import { Star, StarIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const BookCard = ({ book }) => {
  const [isStared, setIsStared] = useState(false);
  const handleStar = ()=>{
    setIsStared(!isStared);
    if(!isStared){
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
    }
  }
    return (
        <div className="card drop-shadow-lg bg-base-100 max-w-80 cursor-pointer hover:translate-y-1.5 transition-[translate] duration-200 shadow-sm">
      <figure>
        <img
          src={book.image}
          alt="Shoes"
          className='object-cover max-h-60'
        />
      </figure>
      <div className="card-body">
        <div className="badge badge-success bg-green-100 text-green-500 px-2">
          NEW
        </div>
        <h2 className="card-title">{ book.bookName }</h2>
        <p>
            {"by: "}
         { book.author }
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline"> <StarIcon onClick={handleStar} className={isStared ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}/></div>
        </div>
      </div>
    </div>
    );
};

export default BookCard;