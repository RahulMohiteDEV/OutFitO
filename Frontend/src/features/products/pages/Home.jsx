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
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative px-6 lg:px-20 pt-24 pb-20">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Premium Fashion Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight max-w-5xl">
            Elevate Your{" "}
            <span className="text-cyan-400">Style</span> With
            <br />
            Modern Fashion.
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed">
            Discover premium handcrafted fashion pieces designed for comfort,
            elegance, and timeless streetwear aesthetics.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              View Trending
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-14">
            <div>
              <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
                Latest Products
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Featured Collection
              </h2>
            </div>

            <button className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-all">
              View All
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Product Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {products?.map((product) => (
              <div
                key={product._id}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={product.images?.[0]?.url}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Floating Price */}
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
                    <p className="text-sm font-semibold text-cyan-400">
                      ₹{product.price?.amount}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {product.title}
                    </h3>

                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <ShoppingBag size={18} />
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {product.description}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Premium Quality
                      </p>

                      <p className="font-semibold text-white">
                        {product.price?.currency}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
                    >
                      View Product
                    </button>
                  </div>
                </div>

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/20 blur-[80px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="px-6 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 md:p-16">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px]" />

            <div className="relative z-10">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Fashion Redefined
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
                Designed For The Modern Generation.
              </h2>

              <p className="mt-6 text-gray-400 max-w-2xl leading-relaxed">
                Discover elegant, bold, and premium fashion products crafted to
                make every outfit unforgettable.
              </p>

              <button className="mt-10 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;