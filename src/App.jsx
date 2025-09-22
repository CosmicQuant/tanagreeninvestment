import { useState, useEffect } from 'react';
import './styles-professional.css';
import { animateOnScroll, initScrollAnimations } from './scrollAnimation-professional';

const navigationItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'programs', label: 'Programs', icon: '🌿' },
  { id: 'impact', label: 'Impact', icon: '📊' },
  { id: 'partners', label: 'Partners', icon: '🤝' },
  { id: 'about', label: 'About Us', icon: '🌱' },
  { id: 'contact', label: 'Contact', icon: '📧' }
];

const heroImages = {
  home: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80',
  about: 'https://plus.unsplash.com/premium_photo-1663947578514-8be72b831e17?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated About Us hero image
  programs: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
  impact: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1920&q=80',
  partners: 'https://images.unsplash.com/photo-1637094408647-0d81d08f81b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  contact: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1920&q=80'
};

const impactStats = [
  { number: '10,000+', label: 'Trees Planted', icon: '🌳' },
  { number: '50+', label: 'Communities Served', icon: '👥' },
  { number: '500+', label: 'Women Empowered', icon: '👩' },
  { number: '25+', label: 'Partnerships', icon: '🤝' }
];

function App() {
  // State declarations must come first
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Carousel images and subtitles for homepage hero
  const carouselImages = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1730037811879-d6594d862eb6?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtitle: 'NURTURING NATURE, EMPOWERING COMMUNITIES',
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
      subtitle: 'BUILDING SUSTAINABLE FUTURES TOGETHER',
    },
    {
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80',
      subtitle: 'EMPOWERING COMMUNITIES FOR GREEN GROWTH',
    },
    {
      url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1920&q=80',
      subtitle: 'CONSERVING KENYA’S NATURAL HERITAGE',
    },
  ];

  // Auto-advance carousel every 4 seconds (slower)
  useEffect(() => {
    if (currentPage !== 'home') return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentPage, carouselImages.length]);

  // Add scroll-triggered animation for program sections
  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.2 });

      // Observe all program sections
      const programSections = document.querySelectorAll('.full-page-feature');
      programSections.forEach(section => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    };

    if (currentPage === 'home' || currentPage === 'programs') {
      const cleanup = observeElements();
      return cleanup;
    }
  }, [currentPage]);

  // Statistics and page animations
  useEffect(() => {
    if (currentPage === 'impact') {
      // Set up intersection observer for statistics animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedStats) {
            setAnimatedStats(true);
            // Start counter animations
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
              const target = parseInt(counter.dataset.target);
              const increment = target / 100; // Animate over 100 steps
              let current = 0;
              const countTimer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(countTimer);
                }
                // Format the number based on the original format
                if (target >= 10000) {
                  counter.textContent = Math.floor(current).toLocaleString() + '+';
                } else {
                  counter.textContent = Math.floor(current) + '+';
                }  
              }, 50); // Slower animation - update every 50ms
            });
          }
        });
      }, { threshold: 0.3 });

      // Observe the stats section
      const statsSection = document.querySelector('.stats-grid');
      if (statsSection) {
        observer.observe(statsSection);
      }

      return () => observer.disconnect();
    } else {
      setAnimatedStats(false);
    }
    
    if (currentPage === 'home') {
      setTimeout(() => {
        animateOnScroll();
        initScrollAnimations();
        // Set up intersection observer for home page stats too
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setAnimatedStats(true);
              const counters = document.querySelectorAll('.counter');
              counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const increment = target / 100;
                let current = 0;
                const countTimer = setInterval(() => {
                  current += increment;
                  if (current >= target) {
                    current = target;
                    clearInterval(countTimer);
                  }
                  if (target >= 10000) {
                    counter.textContent = Math.floor(current).toLocaleString() + '+';
                  } else {
                    counter.textContent = Math.floor(current) + '+';
                  }
                }, 50); // Slower animation
              });
            }
          });
        }, { threshold: 0.3 });

        const statsSection = document.querySelector('.stats-grid');
        if (statsSection) {
          observer.observe(statsSection);
        }
      }, 300);
    }
  }, [currentPage]);

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="page-content">
            <section className="intro-section">
              <h2 className="section-title">Nature Conservation & Climate Management</h2>
              <p className="section-subtitle home-centered">
                Building a sustainable future through conservation, community empowerment, and climate action.
              </p>
              <p className="section-description">
                Our programs combine community engagement, strategic partnerships, and sustainable land development 
                to safeguard biodiversity and create green economic opportunities.
              </p>
            </section>
            <section className="features-vertical">
              <div className="features-viewport">
                {/* Updated sliding programs with new key programs and descriptions */}
                <div className="feature-row animate-on-scroll full-page-feature">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" alt="Forest Conservation & Protection" className="feature-img-large" />
                  <div className="feature-desc">
                    <h3>Forest Conservation & Protection</h3>
                    <p>
                      We are committed to safeguarding Kenya’s natural forests. We actively counter deforestation through continuous awareness campaigns and capacity-building programs for local communities, schools, and youth groups. By collaborating with enforcement agencies like the <b>Kenya Forest Service (KFS)</b>, county environmental departments, and local administrations, we strengthen forest protection measures, reduce illegal logging, and promote sustainable land-use practices. Furthermore, we work closely with established conservancies, such as <b>Ishaqbini Conservancy in Masalani</b>, to implement habitat restoration and wildlife protection awareness campaigns, creating vital synergies for biodiversity conservation.
                    </p>
                  </div>
                </div>
                <div className="feature-row animate-on-scroll full-page-feature">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" alt="Afforestation & Reforestation" className="feature-img-large" />
                  <div className="feature-desc">
                    <h3>Afforestation & Reforestation</h3>
                    <p>
                      Our large-scale afforestation and reforestation projects target critical ecological zones. This includes planting trees in <b>Tana River riparian zones</b> to prevent soil erosion and restore natural water cycles, as well as in the <b>Boni Forest</b> and coastal areas, which are vital biodiversity hotspots. We also implement structured urban greening programs in public spaces across <b>Garissa, Masalani, Ijara, and Kwale Counties</b> to enhance air quality, create shade, and beautify urban environments.
                    </p>
                  </div>
                </div>
                <div className="feature-row animate-on-scroll full-page-feature">
                  <img src="https://images.unsplash.com/photo-1704270269291-378a379249f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women-Centered Empowerment" className="feature-img-large" />
                  <div className="feature-desc">
                    <h3>Women-Centered Empowerment</h3>
                    <p>
                      Recognizing the pivotal role of women in environmental conservation, we support female-headed households in <b>Garissa (Waberi Ward)</b> and <b>Masalani Municipality</b>. We achieve this by supplying seedlings, providing training in tree nursery management and tree planting techniques, and purchasing tree-based products (e.g., fruits, seedlings, timber substitutes) to provide sustainable income and reduce reliance on destructive activities like charcoal burning.
                    </p>
                  </div>
                </div>
                <div className="feature-row animate-on-scroll full-page-feature">
                  <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80" alt="Sustainable Land Development & Agriculture" className="feature-img-large" />
                  <div className="feature-desc">
                    <h3>Sustainable Land Development & Agriculture</h3>
                    <p>
                      We take a holistic approach to land management and food security. We strategically acquire and develop land for <b>sustainable agricultural ventures</b>, including tree farming, horticulture, and organic farming, as well as for eco-friendly land resale, ensuring parcels are managed to support forest regeneration and sustainable land-use policies. Complementing this, we promote <b>mixed and rotational farming practices</b> within <b>Tana River County</b> to enhance soil fertility, improve water retention, increase crop yields, and create climate-smart farming models that improve food security.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="impact-stats-section">
              <div className="container">
                <h2 className="section-title">Our Impact in Numbers</h2>
                <p className="section-subtitle">Measurable results from our conservation efforts across Kenya</p>
                <div className="stats-grid">
                  {impactStats.map((stat, index) => (
                    <div 
                      key={index} 
                      className={`stat-card ${animatedStats ? 'animated' : ''}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-number counter" data-target={stat.number.replace(/[^0-9]/g, '')}>0</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="partners-summary-section" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <h2 className="section-title">Our Partners</h2>
              <p className="section-description">
                We work together to protect forests, restore habitats, and empower local communities through strategic partnerships.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>🏛️ Government Partners</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>🦓 Conservation Partners</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>👥 Community Partners</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>🌍 International Partners</span>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="page-content">
            <section className="about-section">
              <div className="about-content">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-text">
                  Tana Green Investments Limited is committed to protecting Kenya's natural heritage and promoting 
                  sustainable land use as a key driver of climate resilience. Through strategic partnerships, 
                  community engagement, and environmentally conscious land development, we focus on restoring 
                  degraded ecosystems, combating deforestation, and creating green economic opportunities for local communities.
                </p>
              </div>
              
              <div className="vision-values">
                <div className="value-card">
                  <h3>Our Vision</h3>
                  <p>To be a leader in nature conservation, climate management, and green economic development in Kenya and beyond.</p>
                </div>
                <div className="value-card">
                  <h3>Our Values</h3>
                  <ul>
                    <li>Environmental Stewardship</li>
                    <li>Community Empowerment</li>
                    <li>Sustainable Development</li>
                    <li>Innovation & Excellence</li>
                  </ul>
                </div>
                <div className="value-card">
                  <h3>Our Team</h3>
                  <p>Passionate environmentalists, community leaders, and development experts dedicated to making a positive impact on Kenya's natural heritage.</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'programs':
        return (
          <div className="page-content">
            <section className="programs-section">
              <h2 className="section-title">Our Key Programs & Activities</h2>
              
              <div className="programs-grid">
                {/* Updated key programs and activities */}
                <div className="program-card">
                  <div className="program-header">
                    <span className="program-icon">🌳</span>
                    <h3>Forest Conservation & Protection</h3>
                  </div>
                  <p>
                    We are committed to safeguarding Kenya’s natural forests. We actively counter deforestation through continuous awareness campaigns and capacity-building programs for local communities, schools, and youth groups. By collaborating with enforcement agencies like the <b>Kenya Forest Service (KFS)</b>, county environmental departments, and local administrations, we strengthen forest protection measures, reduce illegal logging, and promote sustainable land-use practices. Furthermore, we work closely with established conservancies, such as <b>Ishaqbini Conservancy in Masalani</b>, to implement habitat restoration and wildlife protection awareness campaigns, creating vital synergies for biodiversity conservation.
                  </p>
                </div>
                <div className="program-card">
                  <div className="program-header">
                    <span className="program-icon">🌱</span>
                    <h3>Afforestation & Reforestation</h3>
                  </div>
                  <p>
                    Our large-scale afforestation and reforestation projects target critical ecological zones. This includes planting trees in <b>Tana River riparian zones</b> to prevent soil erosion and restore natural water cycles, as well as in the <b>Boni Forest</b> and coastal areas, which are vital biodiversity hotspots. We also implement structured urban greening programs in public spaces across <b>Garissa, Masalani, Ijara, and Kwale Counties</b> to enhance air quality, create shade, and beautify urban environments.
                  </p>
                </div>
                <div className="program-card">
                  <div className="program-header">
                    <span className="program-icon">👩</span>
                    <h3>Women-Centered Empowerment</h3>
                  </div>
                  <p>
                    Recognizing the pivotal role of women in environmental conservation, we support female-headed households in <b>Garissa (Waberi Ward)</b> and <b>Masalani Municipality</b>. We achieve this by supplying seedlings, providing training in tree nursery management and tree planting techniques, and purchasing tree-based products (e.g., fruits, seedlings, timber substitutes) to provide sustainable income and reduce reliance on destructive activities like charcoal burning.
                  </p>
                </div>
                <div className="program-card">
                  <div className="program-header">
                    <span className="program-icon">🌾</span>
                    <h3>Sustainable Land Development & Agriculture</h3>
                  </div>
                  <p>
                    We take a holistic approach to land management and food security. We strategically acquire and develop land for <b>sustainable agricultural ventures</b>, including tree farming, horticulture, and organic farming, as well as for eco-friendly land resale, ensuring parcels are managed to support forest regeneration and sustainable land-use policies. Complementing this, we promote <b>mixed and rotational farming practices</b> within <b>Tana River County</b> to enhance soil fertility, improve water retention, increase crop yields, and create climate-smart farming models that improve food security.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'partners':
        return (
          <div className="page-content">
            <section className="partners-section">
              <h2 className="section-title">Our Partners</h2>
              <p className="section-description">
                We work together to protect forests, restore habitats, and empower local communities through strategic partnerships.
              </p>
              
              <div className="partners-grid">
                <div className="partner-card">
                  <h3>🏛️ Government Partners</h3>
                  <ul>
                    <li>Kenya Forest Service (KFS)</li>
                    <li>County Environmental Departments</li>
                    <li>Local Administrations</li>
                    <li>Ministry of Environment</li>
                  </ul>
                </div>
                <div className="partner-card">
                  <h3>🦓 Conservation Partners</h3>
                  <ul>
                    <li>Ishaqbini Conservancy</li>
                    <li>Wildlife Conservation Groups</li>
                    <li>Environmental NGOs</li>
                    <li>Research Institutions</li>
                  </ul>
                </div>
                <div className="partner-card">
                  <h3>👥 Community Partners</h3>
                  <ul>
                    <li>Women's Groups</li>
                    <li>Youth Organizations</li>
                    <li>Farmer Cooperatives</li>
                    <li>Local Communities</li>
                  </ul>
                </div>
                <div className="partner-card">
                  <h3>🌍 International Partners</h3>
                  <ul>
                    <li>UN Environment Programme</li>
                    <li>Climate Action Networks</li>
                    <li>Development Organizations</li>
                    <li>Research Collaborations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        );

      case 'contact':
        return (
          <div className="page-content">
            <section className="contact-section">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-description">
                Ready to join our mission? Contact us to learn more about our programs or explore partnership opportunities.
              </p>
              
              <div className="contact-container">
                <div className="contact-form-container">
                  <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization">Organization (Optional)</label>
                      <input type="text" id="organization" name="organization" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                  </form>
                </div>
                
                <div className="contact-info">
                  <div className="info-card">
                    <h3>📧 Email Us</h3>
                    <p><a href="mailto:info@tanagreen.co.ke">info@tanagreen.co.ke</a></p>
                  </div>
                  <div className="info-card">
                    <h3>📱 Call Us</h3>
                    <p>+254 XXX XXX XXX</p>
                  </div>
                  <div className="info-card">
                    <h3>📍 Visit Us</h3>
                    <p>Nairobi, Kenya<br />Tana River County</p>
                  </div>
                  <div className="info-card">
                    <h3>🌐 Follow Us</h3>
                    <p>Social media links coming soon</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Tana Green Investments</h1>
              <span className="tagline">Nurturing Nature, Empowering Communities</span>
            </div>
            
            <nav className={`nav nav-centered ${isMenuOpen ? 'nav-open' : ''}`}>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              ))}
            </nav>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        {currentPage === 'home' ? (
          <section className="hero carousel-hero" style={{backgroundImage: `url(${carouselImages[carouselIndex].url})`}}>
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle carousel-fade" key={carouselIndex}>
                    {carouselImages[carouselIndex].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="hero" style={{backgroundImage: `url(${heroImages[currentPage]})`}}>
            {currentPage === 'about' ? (
              <div className="container">
                <div className="hero-content">
                  <h1 className="hero-title">
                    {navigationItems.find(item => item.id === currentPage)?.label}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="hero-overlay">
                <div className="container">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      {navigationItems.find(item => item.id === currentPage)?.label}
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        <div className="container">
          {renderPageContent()}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Tana Green Investments Limited</h3>
              <p>Protecting Kenya's natural heritage and promoting sustainable development.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#" onClick={() => setCurrentPage('about')}>About Us</a></li>
                <li><a href="#" onClick={() => setCurrentPage('programs')}>Our Programs</a></li>
                <li><a href="#" onClick={() => setCurrentPage('impact')}>Our Impact</a></li>
                <li><a href="#" onClick={() => setCurrentPage('partners')}>Our Partners</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@tanagreen.co.ke</p>
              <p>Location: Nairobi, Kenya</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Tana Green Investments Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
          </div>
        );
}

export default App;