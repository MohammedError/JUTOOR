import { useState } from 'react'
import './App.css'

const products = [
  { weight: '300 جرام', price: 25 },
  { weight: '550 جرام', price: 45 },
]

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [quantity, setQuantity] = useState(1)
  const [orderOpen, setOrderOpen] = useState(false)

  const subtotal = selectedProduct.price * quantity
  const shipping = 40
  const total = subtotal + shipping

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم، أرغب بطلب حناء جذور 🌿

الحجم: ${selectedProduct.weight}
الكمية: ${quantity}
قيمة المنتج: ${subtotal} ريال
الشحن: ${shipping} ريال
الإجمالي: ${total} ريال`
  )

  return (
    <div className="site">

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">ج</span>
          <span>
            <strong>جذور</strong>
            <small>JUTHOOR</small>
          </span>
        </a>

        <nav>
          <a href="#product">المنتج</a>
          <a href="#story">قصتنا</a>
          <a href="#shipping">الشحن</a>
        </nav>

        <a className="nav-order" href="#product">
          اطلب الآن
          <span>↗</span>
        </a>
      </header>

      <main>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span></span>
              حناء طبيعية سعودية
            </div>

            <h1>
              من الطبيعة...
              <br />
              <em>إلى يديك.</em>
            </h1>

            <p className="hero-text">
              حناء جذور الطبيعية، مطحونة بعناية من أجود أنواع الحناء،
              لتمنحك تجربة أصيلة بلون غني وجودة تثقين بها.
            </p>

            <div className="hero-actions">
              <a href="#product" className="primary-btn">
                اكتشفي الحناء
                <span>←</span>
              </a>

              <a href="#story" className="text-btn">
                تعرفي على جذور
              </a>
            </div>

            <div className="trust-row">
              <div>
                <strong>100%</strong>
                <span>طبيعية</span>
              </div>

              <i></i>

              <div>
                <strong>3–5</strong>
                <span>أيام للتوصيل</span>
              </div>

              <i></i>

              <div>
                <strong>40</strong>
                <span>ريال للشحن</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="organic-shape"></div>

            <div className="image-frame">
              <img
                src="/images/henna-main.jpg"
                alt="حناء جذور الطبيعية"
              />
            </div>

            <div className="floating-card">
              <span>طبيعية</span>
              <strong>حناء جذور</strong>
              <small>أصالة تُلمس</small>
            </div>

            <div className="arabic-seal">جذور</div>
          </div>
        </section>

        <section className="intro-strip">
          <span>جذور</span>
          <p>الأصالة تبدأ من الطبيعة</p>
          <span>✦</span>
          <p>جودة نختارها بعناية</p>
          <span>✦</span>
          <p>تجربة تصل إليك بسهولة</p>
        </section>

        <section className="product-section section" id="product">
          <div className="section-heading">
            <div>
              <span className="section-label">منتجنا</span>

              <h2>
                الحناء التي
                <br />
                <em>تستحقها جذورك.</em>
              </h2>
            </div>

            <p>
              اخترنا لكِ حناء طبيعية مطحونة بعناية،
              وحافظنا على جودتها من التعبئة حتى تصل إلى يديك.
            </p>
          </div>

          <div className="product-layout">
            <div className="product-photo">
              <div className="photo-bg"></div>

              <img
                src="/images/henna-main.jpg"
                alt="منتج حناء جذور"
              />

              <div className="product-badge">
                جودة من جذورها
              </div>
            </div>

            <div className="product-info">
              <span className="product-category">
                حناء طبيعية مطحونة
              </span>

              <h3>حناء جذور</h3>

              <p className="product-description">
                حناء طبيعية بنقاء وجودة عالية، مختارة بعناية
                لتمنحك لونًا غنيًا وثابتًا مع تجربة استخدام سهلة ومريحة.
              </p>

              <div className="selector-title">
                <span>اختاري الحجم</span>
                <span>السعر</span>
              </div>

              <div className="size-options">
                {products.map((product) => (
                  <button
                    key={product.weight}
                    className={
                      selectedProduct.weight === product.weight
                        ? 'size-option active'
                        : 'size-option'
                    }
                    onClick={() => setSelectedProduct(product)}
                  >
                    <span>{product.weight}</span>
                    <strong>{product.price} ريال</strong>
                  </button>
                ))}
              </div>

              <div className="quantity-row">
                <span>الكمية</span>

                <div className="quantity">
                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                  >
                    −
                  </button>

                  <strong>{quantity}</strong>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="price-summary">
                <span>الإجمالي قبل الشحن</span>
                <strong>{subtotal} ريال</strong>
              </div>

              <button
                className="buy-btn"
                onClick={() => setOrderOpen(true)}
              >
                اطلب الحناء الآن
                <span>←</span>
              </button>

              <p className="payment-note">
                الدفع حاليًا عن طريق التحويل البنكي
              </p>
            </div>
          </div>
        </section>

        <section className="story-section section" id="story">
          <div className="story-visual">
            <div className="story-circle">
              <span>ج</span>
            </div>

            <div className="story-note">
              <small>JUTHOOR</small>
              <strong>
                من الأرض
                <br />
                بدأت الحكاية.
              </strong>
            </div>
          </div>

          <div className="story-copy">
            <span className="section-label">عن جذور</span>

            <h2>
              لأن الجمال
              <br />
              <em>له جذور.</em>
            </h2>

            <p>
              حناء جذور علامة سعودية متخصصة في تقديم الحناء الطبيعية
              المطحونة بعناية وبجودة عالية ونقاء يضمن لونًا غنيًا وثابتًا.
            </p>

            <p>
              نحرص على اختيار أفضل أنواع الحناء وتعبئتها بطريقة عملية
              تحافظ على جودتها، لتناسب الاستخدام الشخصي بكل ثقة.
            </p>

            <div className="story-signature">
              <span>جذور</span>
              <small>أصالة • جودة • ثقة</small>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="section-heading centered">
            <span className="section-label">لماذا جذور؟</span>

            <h2>
              ببساطة، لأننا نهتم
              <em> بالتفاصيل.</em>
            </h2>
          </div>

          <div className="feature-grid">
            <article>
              <span className="feature-number">01</span>
              <div className="feature-icon">✦</div>
              <h3>طبيعية بعناية</h3>
              <p>
                نختار الحناء بعناية ونحافظ على جودتها منذ البداية.
              </p>
            </article>

            <article>
              <span className="feature-number">02</span>
              <div className="feature-icon">◌</div>
              <h3>جودة نثق بها</h3>
              <p>
                منتج عملي بجودة عالية وتجربة مصممة للاستخدام اليومي.
              </p>
            </article>

            <article>
              <span className="feature-number">03</span>
              <div className="feature-icon">↗</div>
              <h3>تصل إليك بسهولة</h3>
              <p>
                شحن داخل السعودية والخليج خلال 3–5 أيام.
              </p>
            </article>
          </div>
        </section>

        <section className="shipping-card" id="shipping">
          <div>
            <span className="section-label">التوصيل</span>

            <h2>جذورك توصلك.</h2>

            <p>
              نشحن منتجاتنا إلى السعودية ودول الخليج.
            </p>
          </div>

          <div className="shipping-detail">
            <strong>40 ريال</strong>
            <span>رسوم الشحن</span>
          </div>

          <div className="shipping-detail">
            <strong>3–5 أيام</strong>
            <span>مدة التوصيل</span>
          </div>
        </section>

        <section className="final-cta">
          <span>جذور</span>

          <h2>
            ابدئي تجربتك
            <br />
            <em>من الطبيعة.</em>
          </h2>

          <a href="#product" className="primary-btn light">
            اطلب الآن
            <span>←</span>
          </a>
        </section>

      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">ج</span>

          <div>
            <strong>جذور</strong>
            <small>JUTHOOR</small>
          </div>
        </div>

        <p>من الطبيعة... إلى يديك.</p>

        <div className="footer-links">
          <a
            href="https://wa.me/966598303787"
            target="_blank"
            rel="noreferrer"
          >
            واتساب
          </a>

          <a
            href="https://www.tiktok.com/@wwil51"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a href="tel:0598303787">
            0598303787
          </a>
        </div>

        <small className="copyright">
          © 2026 جذور. جميع الحقوق محفوظة.
        </small>
      </footer>

      {orderOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setOrderOpen(false)}
        >
          <div
            className="order-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setOrderOpen(false)}
            >
              ×
            </button>

            <span className="section-label">
              تأكيد الطلب
            </span>

            <h2>
              خطوة أخيرة
              <br />
              <em>وتوصل لك جذور.</em>
            </h2>

            <div className="order-summary">
              <div>
                <span>
                  {selectedProduct.weight} × {quantity}
                </span>

                <strong>{subtotal} ريال</strong>
              </div>

              <div>
                <span>الشحن</span>
                <strong>{shipping} ريال</strong>
              </div>

              <div className="total">
                <span>الإجمالي</span>
                <strong>{total} ريال</strong>
              </div>
            </div>

            <div className="transfer-box">
              <span>طريقة الدفع</span>

              <strong>تحويل بنكي</strong>

              <p>
                سيتم تزويدك ببيانات التحويل عند التواصل لتأكيد الطلب.
              </p>
            </div>

            <a
              className="buy-btn"
              href={`https://wa.me/966598303787?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              إكمال الطلب عبر واتساب
              <span>←</span>
            </a>

            <p className="modal-note">
              بعد التحويل، أرسل صورة الإيصال عبر الواتساب لتأكيد طلبك.
            </p>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
