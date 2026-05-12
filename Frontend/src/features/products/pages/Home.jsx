import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProduct } from "../hook/useProduct";
import { useNavigate } from "react-router";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Home = () => {
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.auth.user);

  const { handleGetAllProducts } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
     

      {/* ================= HERO SECTION - SHELF DISPLAY ================= */}
      <section className="pt-40 pb-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#8B7355] text-xs uppercase tracking-[0.25em] mb-8" style={{ letterSpacing: '0.25em' }}>Collection Curated</p>
              <h1 className="text-6xl md:text-7xl font-light leading-[0.9] tracking-tight mb-8" style={{ lineHeight: '0.9', letterSpacing: '0.02em' }}>
                Premium <span className="text-[#8B7355]">Crafted</span> Fashion
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg" style={{ lineHeight: '1.8' }}>
                Discover meticulously selected pieces displayed with reverence. Each item represents timeless quality and authentic craftsmanship.
              </p>
              <div className="flex gap-6">
                <button className="px-10 py-3 bg-[#8B7355] text-[#f5f1ed] font-light rounded hover:bg-[#a0845f] transition tracking-wide">
                  EXPLORE
                </button>
                <button className="px-10 py-3 border border-[#8B7355]/50 text-[#8B7355] font-light rounded hover:border-[#8B7355] hover:bg-[#8B7355]/5 transition tracking-wide">
                  DISCOVER
                </button>
              </div>
            </div>

            {/* Right - Shelf Display with Product */}
            <div className="relative h-[600px]">
              {/* Shelf */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-gradient-to-b from-[#D4A574] to-[#A0845F] rounded-sm shadow-2xl" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }} />
              
              {/* Product Stack */}
              <div className="absolute inset-0 flex items-center justify-center">
                {products?.[0]?.images?.[0] && (
                  <img 
                    src={products[0].images[0].url || products[0].images[0]} 
                    alt="Featured"
                    className="h-full w-full object-contain drop-shadow-2xl"
                    style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.9))' }}
                  />
                )}
              </div>

              {/* Lighting Effect */}
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(139,115,85,0.15), transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="px-6 lg:px-20">
        <div className="max-w-7xl mx-auto border-t border-[#8B7355]/20" />
      </div>

      {/* ================= COLLECTION SHOWCASE ================= */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B7355] text-xs uppercase tracking-[0.25em] mb-6" style={{ letterSpacing: '0.25em' }}>Featured Selection</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight" style={{ letterSpacing: '0.02em' }}>Latest Collection</h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {products?.map((product) => (
              <div 
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative mb-10 overflow-hidden h-[400px] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
                  {product.images?.[0] ? (
                    <img 
                      src={product.images[0].url || product.images[0]} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ filter: 'brightness(0.95)' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700">
                      No image
                    </div>
                  )}
                  
                  {/* Price Badge */}
                  <div className="absolute top-8 right-8 bg-black/70 backdrop-blur border border-[#8B7355]/40 px-6 py-3 rounded">
                    <p className="text-[#D4A574] font-light text-sm">₹{product.price?.amount?.toLocaleString()}</p>
                  </div>

                  {/* Wishlist */}
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-black/50 backdrop-blur border border-[#8B7355]/40 flex items-center justify-center hover:bg-black/70 transition text-[#8B7355] text-xl"
                  >
                    ♡
                  </button>
                </div>

                {/* Product Info */}
                <div>
                  <p className="text-[#8B7355] text-xs uppercase tracking-[0.2em] mb-4 font-light" style={{ letterSpacing: '0.2em' }}>Premium Quality</p>
                  <h3 className="text-3xl font-light mb-4 group-hover:text-[#8B7355] transition tracking-tight" style={{ letterSpacing: '0.01em' }}>
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8" style={{ lineHeight: '1.7' }}>
                    {product.description?.substring(0, 60)}...
                  </p>
                  
                  {/* Action */}
                  <button className="w-full py-4 border border-[#8B7355]/50 text-[#8B7355] hover:border-[#8B7355] hover:bg-[#8B7355]/5 rounded transition font-light uppercase tracking-widest text-sm">
                    View Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#8B7355]/30 bg-black/50 backdrop-blur p-16 md:p-20 text-center">
            <p className="text-[#8B7355] text-xs uppercase tracking-[0.25em] mb-8" style={{ letterSpacing: '0.25em' }}>Exclusive Collection</p>
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight" style={{ letterSpacing: '0.01em' }}>
              Timeless Elegance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed text-base" style={{ lineHeight: '1.8' }}>
              Experience the art of curated fashion. Every piece in our collection is thoughtfully selected for its quality, design, and cultural significance.
            </p>
            <button className="px-12 py-4 bg-[#8B7355] text-[#f5f1ed] font-light rounded hover:bg-[#a0845f] transition uppercase tracking-widest text-sm">
              Explore Now
            </button>
          </div>
        </div>
      </section>

     

      {/* Spacing for footer */}
      <div className="h-24" />
    </div>
  );
};

export default Home;