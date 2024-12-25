export default function Card({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4 rounded-lg"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
        {product.name}
      </h2>
      <p className="text-sm text-gray-500 mb-1">Price: {product.price || "N/A"}</p>
      <p className="text-sm text-gray-500">
        <span className="text-yellow-500 font-bold">
          {"⭐".repeat(Math.round(product.rating.average)) + "☆".repeat(5 - Math.round(product.rating.average))}
        </span>{" "}
        <span className="text-gray-600">
          ({product.rating.average.toFixed(1)})
        </span>{" "}
        <span className="text-gray-400">({product.rating.reviews} reviews)</span>
      </p>
    </div>
  );
}
