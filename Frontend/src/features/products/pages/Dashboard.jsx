import React, {useEffect} from 'react'
import { useProduct } from "../hook/useProduct.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const Dashboard = () => {

  const {handleGetSellerProducts} = useProduct();
  const sellerProducts = useSelector(state => state.product.sellerProducts);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetSellerProducts();
  }, [])
 

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", padding: "24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, margin: "0 0 8px 0", color: "#1a1a1a" }}>
            My Inventory
          </h1>
          <p style={{ fontSize: 16, color: "#666", margin: "0 0 24px 0" }}>
            Manage your collection of {sellerProducts?.length || 0} curated items
          </p>

          <button
            onClick={() => navigate("/products/create")}
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 24px",
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 20,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            + ADD PRODUCT
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search your inventory..."
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid #e0e0e0",
              marginBottom: 16,
              fontSize: 14,
              outline: "none",
              fontFamily: "inherit",
            }}
          />

          {/* Filter and Sort Buttons */}
          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                flex: 1,
                maxWidth: 150,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "10px 16px",
                fontWeight: 500,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              ⊟ FILTER
            </button>
            <button
              style={{
                flex: 1,
                maxWidth: 150,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "10px 16px",
                fontWeight: 500,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              ↕ SORT
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 40,
          }}
        >
          {sellerProducts && sellerProducts.length > 0 ? (
            sellerProducts.map((product) => (
              <div
              onClick={() => { navigate(`/seller/product/${product._id}`) }}
                key={product._id}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                  transition: "box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.08)";
                }}
              >
                {/* Product Image */}
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    background: "#f0f0f0",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {product.images && product.images[0] ? (
                    <img
                      src={product.images[0].url || product.images[0]}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#bbb",
                        fontSize: 12,
                      }}
                    >
                      No image
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div style={{ padding: "16px" }}>
                  {/* Product ID and Status */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontSize: 10, color: "#999", letterSpacing: 0.5 }}>
                      ID: {product._id.slice(0, 12).toUpperCase()}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#16a34a",
                        background: "#dcfce7",
                        borderRadius: 12,
                        padding: "2px 10px",
                        fontWeight: 600,
                      }}
                    >
                      ● Active
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      margin: "0 0 6px 0",
                      color: "#1a1a1a",
                      lineHeight: 1.3,
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 13,
                      color: "#666",
                      margin: "0 0 12px 0",
                      lineHeight: 1.4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Price and Actions */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#1a1a1a",
                      }}
                    >
                      ₹{product.price?.amount?.toLocaleString() || 0}
                    </span>
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/products/edit/${product._id}`);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: 16,
                          padding: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add delete handler
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: 16,
                          padding: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#dc2626",
                        }}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "60px 20px",
                color: "#999",
              }}
            >
              <p style={{ fontSize: 16 }}>No products found. Create your first product!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
