import "./Genre.css";
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
    


