import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-hover bg-white rounded-lg overflow-hidden shadow-elegant transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-blue mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* CTA */}
        <Link
          to={`/product/${product.id}`}
          className="w-full btn-primary text-center block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
