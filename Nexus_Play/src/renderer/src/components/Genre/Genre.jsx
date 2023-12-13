import "./Genre.css";
<<<<<<< Updated upstream
export default function Genre()
{
    const imageCount = 1;
    const images = Array.from({ length: imageCount }, (_, index) => index + 1);
    return (
        <div className="Genre">
          {images.map((image) => (
            <img
              key={Sports}
              src={`./assets/image${image}.png`}
              alt={`Image ${image}`}
              width="268"
              height="268"
            />
          ))}
        </div>
      );
    };
    


=======
import "../../assets/Genre_img/Genre1.png";

export default function Genre()
{
        const imageCount = 6; 
        const images = Array.from({ length: imageCount }, (_, index) => index + 1);
      
        return (
    
            <div className="Genre">
              {images.map((image) => (
                <img
                  key={image}
                  src={`./Genre_img/Genre${image}.png`} 
                  alt={`Genre ${image}`}
                />
              ))}
            </div>
         
        );
    };
    
>>>>>>> Stashed changes
