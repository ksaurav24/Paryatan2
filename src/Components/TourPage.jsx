import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tourData } from "../tourdata.jsx";
const TourPage = () => {
  const [tourContent, setTourContent] = useState(null);
  const slug = useParams().slug;
  console.log(slug);
  const tour = tourData.find((tour) => tour.slug === slug);
  useEffect(() => {
    if (tour) {
      setTourContent(tour);
    }
  }, [tour]);

  return (
    <>
      {tourContent && (
        <div>
          <div>
            <img
              src={`../assets/${tourContent.image}`}
              alt={tourContent.image}
              className="w-[90%] mx-auto mt-4 h-[600px] object-cover"
            ></img>
            <h2 className="text-6xl font-bold mb-4">{tourContent.name}</h2>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Tour Dates: </strong>
            {tourContent.dates}
          </p>

          <h3 className="text-2xl font-semibold mb-2">Journey Schedule</h3>
          <div className="list-decimal list-inside text-gray-800 space-y-2">
            {tourContent.days.map((day, index) => {
              return (
                <div key={index}>
                  <strong>Day {index + 1}:</strong> {day}
                </div>
              );
            })}

            {tourContent.day15 && <strong>Day 15:</strong>}
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">
              What&apos;s Included
            </h3>
            <p className="text-gray-700 mb-4">{tourContent.include}</p>

            <h3 className="text-2xl font-semibold mb-2">
              What&apos;s Not Included
            </h3>
            <p className="text-gray-700 mb-4">{tourContent.notincluded}</p>

            <p className="text-red-600">
              <strong>Note: </strong>
              {tourContent.note || "None"}
            </p>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Tour Price</h3>
            <p className="text-gray-900">{tourContent.tourprice}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TourPage;
