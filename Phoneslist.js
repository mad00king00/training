import styles from "./phonelist.css"
export default function Header() {
  return (
    <html>
    <body>
  <h1>Top 10 Trending Smartphones in 2025</h1>

  <div class="product-grid">

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.NBhx1uGLRcZrLARbXODs0QHaJy?w=130&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Redmi 13C" />
      <h2>Redmi 13C</h2>
      <p><strong>Brand:</strong> Xiaomi</p>
      <p><strong>Price:</strong> ₹9,999</p>
      <p> <strong>RAM/Storage:</strong> 4GB / 64GB</p>
      <p><strong>Processor:</strong> MediaTek Helio G85</p>
      <p><strong>Battery:</strong> 5000 mAh</p>
      <p><strong>Display:</strong> IPS LCD / 6.71"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.tbPfNfZGMwqy12r-1yKYIAHaHa?w=177&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Realme Narzo N55" />
      <h2>Realme Narzo N55</h2>
      <p><strong>Brand:</strong> Realme</p>
      <p><strong>Price:</strong> ₹10,999</p>
      <p><strong>RAM/Storage:</strong> 6GB / 128GB</p>
      <p><strong>Processor:</strong> MediaTek Helio G88</p>
      <p><strong>Battery:</strong> 5000 mAh</p>
      <p><strong>Display:</strong> IPS LCD / 6.72"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.1KfeJ1y3n2dcHUeTs1u_NgHaEx?w=267&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Poco X7 Pro 5G" />
      <h2>Poco X7 Pro 5G</h2>
      <p><strong>Brand:</strong> Poco</p>
      <p><strong>Price:</strong> ₹23,999</p>
      <p><strong>RAM/Storage:</strong> 8GB / 256GB</p>  
      <p><strong>Processor:</strong> Dimensity 8400 Ultra</p>
      <p><strong>Battery:</strong> 5100 mAh</p>
      <p><strong>Display:</strong> AMOLED / 6.78"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.hUIPM-jRL4N_135PuV48VgHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3" alt="iQOO Z9 5G" />
      <h2>iQOO Z9 5G</h2>
      <p><strong>Brand:</strong> iQOO</p>
      <p><strong>Price:</strong> ₹19,999</p>
      <p><strong>RAM/Storage:</strong> 8GB / 128GB</p>
      <p><strong>Processor:</strong> MediaTek Dimensity 7200</p>
      <p><strong>Battery:</strong> 5000 mAh</p>
      <p><strong>Display:</strong> AMOLED / 6.67"</p>
    </div>

    <div class="product-card">
      <img src="data:image/webp;base64,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" alt="OnePlus 13R" />
      <h2>OnePlus 13R</h2>
      <p><strong>Brand:</strong> OnePlus</p>
      <p><strong>Price:</strong> ₹39,772</p>
      <p><strong>RAM/Storage:</strong> 12GB / 256GB</p>
      <p><strong>Processor:</strong> Snapdragon 8 Gen 3</p>
      <p><strong>Battery:</strong> 5500 mAh</p>
      <p><strong>Display:</strong> Fluid AMOLED / 6.78"</p>
    </div>

    <div class="product-card">
      <img src="data:image/webp;base64,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" alt="Samsung Galaxy S25" />
      <h2>Samsung Galaxy S25</h2>
      <p><strong>Brand:</strong> Samsung</p>
      <p><strong>Price:</strong> ₹61,790</p>
      <p><strong>RAM/Storage:</strong> 12GB / 128GB</p>
      <p><strong>Processor:</strong> Snapdragon 8 Elite</p>
      <p><strong>Battery:</strong> 4700 mAh</p>
      <p><strong>Display:</strong> Dynamic AMOLED 2X / 6.6"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.VEnCyfVn0AE0Wd9_PxjQeAHaEc?w=307&h=184&c=7&r=0&o=7&pid=1.7&rm=3" alt="Oppo Find X8 Pro" />
      <h2>Oppo Find X8 Pro</h2>
      <p><strong>Brand:</strong> Oppo</p>
      <p><strong>Price:</strong> ₹89,999</p>
      <p><strong>RAM/Storage:</strong> 12GB / 256GB</p>
      <p><strong>Processor:</strong> Dimensity 9400</p>
      <p><strong>Battery:</strong> 5000 mAh</p>
      <p><strong>Display:</strong> LTPO AMOLED / 6.82"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.VjrsOjn_Vu1XsHc4aYo72AHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7" alt="iPhone 15" /> 
      <h2>iPhone 15</h2>
      <p><strong>Brand:</strong> Apple</p>
      <p><strong>Price:</strong> ₹79,900</p>
      <p><strong>RAM/Storage:</strong> 6GB / 128GB</p>
      <p><strong>Processor:</strong> A16 Bionic</p>
      <p><strong>Battery:</strong> 3349 mAh</p>
      <p><strong>Display:</strong> Super Retina XDR OLED / 6.1"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.D1lTtcQVsYkd1Ip5toHJkQHaFW?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Samsung Galaxy S25 Ultra" />
      <h2>Samsung Galaxy S25 Ultra</h2>
      <p><strong>Brand:</strong> Samsung</p>
      <p><strong>Price:</strong> ₹1,03,300</p>
      <p><strong>RAM/Storage:</strong> 12GB / 256GB</p>
      <p><strong>Processor:</strong> Snapdragon 8 Elite</p>
      <p><strong>Battery:</strong> 5000 mAh</p>
      <p><strong>Display:</strong> Dynamic AMOLED 2X / 6.8"</p>
    </div>

    <div class="product-card">
      <img src="https://th.bing.com/th/id/OIP.oliuMrUvyMDz20Dw65Kc7gHaEK?w=282&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Xiaomi 15 Ultra" />
      <h2>Xiaomi 15 Ultra</h2>
      <p><strong> Brand:</strong> Xiaomi</p>
      <p><strong>Price:</strong> ₹1,09,998</p>
      <p><strong>RAM/Storage:</strong> 16GB / 512GB</p>
      <p><strong>Processor:</strong> Snapdragon 8 Elite</p>
      <p><strong>Battery:</strong> 5300 mAh</p>
      <p><strong>Display:</strong> LTPO AMOLED / 6.73"</p>
    </div>

  </div>
</body>
</html>

  )
}
     