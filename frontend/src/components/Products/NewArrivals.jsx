import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Denim Jacket",
      price: 99,
      image: [
        { url: "https://picsum.photos/200?random=1", altText: "Denim Jacket" },
      ],
    },
    {
      _id: "2",
      name: "Leather Boots",
      price: 150,
      image: [
        { url: "https://picsum.photos/200?random=2", altText: "Leather Boots" },
      ],
    },
    {
      _id: "3",
      name: "Floral Dress",
      price: 89,
      image: [
        { url: "https://picsum.photos/200?random=3", altText: "Floral Dress" },
      ],
    },
    {
      _id: "4",
      name: "Cotton Shirt",
      price: 45,
      image: [
        { url: "https://picsum.photos/200?random=4", altText: "Cotton Shirt" },
      ],
    },
    {
      _id: "5",
      name: "Casual Sneakers",
      price: 70,
      image: [
        {
          url: "https://picsum.photos/200?random=5",
          altText: "Casual Sneakers",
        },
      ],
    },
    {
      _id: "6",
      name: "Summer Hat",
      price: 25,
      image: [
        { url: "https://picsum.photos/200?random=6", altText: "Summer Hat" },
      ],
    },
    {
      _id: "7",
      name: "Woolen Scarf",
      price: 35,
      image: [
        { url: "https://picsum.photos/200?random=7", altText: "Woolen Scarf" },
      ],
    },
    {
      _id: "8",
      name: "Slim Fit Jeans",
      price: 80,
      image: [
        {
          url: "https://picsum.photos/200?random=8",
          altText: "Slim Fit Jeans",
        },
      ],
    },
  ];

  // scroll buttons update
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      scrollWidth: container.scrollWidth,
    });
  };

  // scroll actions
  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container)
        container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-4 top-0 flex gap-2">
          <button
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            className="p-2 rounded border bg-white text-black shadow disabled:opacity-50"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            className="p-2 rounded border bg-white text-black shadow disabled:opacity-50"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 scrollbar-hide"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] relative rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.image[0]?.url}
              alt={product.image[0]?.altText || product.name}
              className="w-full h-64 rounded-lg object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-20 text-white
                        bg-gradient-to-t from-black/60 to-transparent 
                        backdrop-blur-sm p-4 pointer-events-none z-10"
            >
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">₹{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
