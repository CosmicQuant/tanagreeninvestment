
import { useState } from 'react';
import './App.css';

const pages = [
  'Home',
  'About Us',
  'Programs',
  'Impact',
  'Partners',
  'Contact'
];

const unsplashImages = {
  Home: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  'About Us': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
  Programs: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
  Impact: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  Partners: 'https://images.unsplash.com/photo-1465101178521-c1a2b1a1c1b2?auto=format&fit=crop&w=900&q=80',
  Contact: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
};

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className="tg-root">
      <header className="tg-header">
        <h1 className="tg-title">Tana Green Investments Limited</h1>
        <nav className="tg-nav">
          {pages.map((p) => (
            <button
              key={p}
              className={`tg-nav-btn${page === p ? ' active' : ''}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </nav>
      </header>
      <main className="tg-main">
        <section className="tg-hero" style={{backgroundImage: `url(${unsplashImages[page]})`}}>
          <div className="tg-hero-overlay">
            <h2 className="tg-hero-title animate-fade-in">{page}</h2>
          </div>
        </section>
        <section className="tg-content animate-slide-up">
          {page === 'Home' && (
            <>
              <h3>Nature Conservation & Climate Management</h3>
              <p>Dedicated to protecting forests, restoring degraded land, and building climate resilience across Kenya.</p>
              <p>Our programs combine community engagement, strategic partnerships, and sustainable land development to safeguard biodiversity and create green economic opportunities.</p>
              <ul>
                <li>Countering Deforestation</li>
                <li>Partnerships with Conservancies</li>
                <li>Afforestation & Tree Planting</li>
                <li>Urban Greening & Beautification</li>
                <li>Empowering Women for Conservation</li>
                <li>Climate-Smart Agriculture</li>
                <li>Green Land Development</li>
              </ul>
            </>
          )}
          {page === 'About Us' && (
            <>
              <h3>Our Mission</h3>
              <p>Tana Green Investments Limited is committed to protecting Kenya’s natural heritage and promoting sustainable land use as a key driver of climate resilience.</p>
              <h3>Vision</h3>
              <p>To be a leader in nature conservation, climate management, and green economic development in Kenya and beyond.</p>
              <h3>Our Team</h3>
              <p>Our team consists of passionate environmentalists, community leaders, and development experts dedicated to making a positive impact.</p>
            </>
          )}
          {page === 'Programs' && (
            <>
              <h3>Our Programs</h3>
              <ul>
                <li><strong>Countering Deforestation:</strong> Awareness campaigns, community training, and collaboration with KFS and local authorities.</li>
                <li><strong>Partnerships with Conservancies:</strong> Tree planting, wildlife protection, and community-led forest monitoring.</li>
                <li><strong>Afforestation & Tree Planting:</strong> Projects in Tana River riparian zones, Boni Forest, coastal belt, and urban centers.</li>
                <li><strong>Urban Greening & Beautification:</strong> Tree planting in schools, markets, roadsides, and public parks.</li>
                <li><strong>Empowering Women for Conservation:</strong> Seedling supply, nursery management training, and sustainable income support.</li>
                <li><strong>Climate-Smart Agriculture:</strong> Mixed and rotational farming to regenerate soil and increase food security.</li>
                <li><strong>Green Land Development:</strong> Eco-friendly agriculture and conservation-focused land resale.</li>
              </ul>
            </>
          )}
          {page === 'Impact' && (
            <>
              <h3>Our Impact</h3>
              <ul>
                <li><strong>Climate Mitigation:</strong> Increased carbon sequestration through tree planting and forest restoration.</li>
                <li><strong>Biodiversity Protection:</strong> Enhanced wildlife habitats and reduced human-wildlife conflicts.</li>
                <li><strong>Economic Empowerment:</strong> Income opportunities for women, youth, and local farmers through tree-based value chains and sustainable agriculture.</li>
                <li><strong>Community Resilience:</strong> Strengthened local capacity to adapt to climate change and conserve natural resources.</li>
              </ul>
            </>
          )}
          {page === 'Partners' && (
            <>
              <h3>Our Partners</h3>
              <ul>
                <li>Kenya Forest Service (KFS)</li>
                <li>Ishaqbini Conservancy</li>
                <li>County Environmental Departments</li>
                <li>Local Administrations</li>
                <li>Community Groups</li>
                <li>Other conservation organizations</li>
              </ul>
              <p>We work together to protect forests, restore habitats, and empower local communities.</p>
            </>
          )}
          {page === 'Contact' && (
            <>
              <h3>Contact Us</h3>
              <form className="tg-contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Send Message</button>
              </form>
              <p>Or email: <a href="mailto:info@tanagreen.co.ke">info@tanagreen.co.ke</a></p>
            </>
          )}
        </section>
      </main>
      <footer className="tg-footer animate-fade-in">
        <p>&copy; 2025 Tana Green Investments Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
