import React, { useState } from 'react';
import { Project, DecorProduct, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Estimator } from './components/Estimator';
import { StyleStudio } from './components/StyleStudio';
import { BoutiqueCatalog } from './components/BoutiqueCatalog';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CartDrawer } from './components/CartDrawer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState<{
    roomType?: string;
    surface?: number;
    budget?: number;
    scope?: string;
  } | undefined>(undefined);

  // Cart actions
  const handleAddToCart = (product: DecorProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll helpers
  const scrollToEstimator = () => {
    const el = document.getElementById('simulateur');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projets');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Transfer from estimator to consultation booking
  const handleTransferToConsultation = (details: {
    roomType: string;
    surface: number;
    budget: number;
    scope: string;
  }) => {
    setConsultationPrefill(details);
    setIsConsultationOpen(true);
  };

  const handleBookFromProject = (projectTitle: string) => {
    setConsultationPrefill({
      roomType: `Inspiré par le projet : ${projectTitle}`
    });
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#24211D]">
      {/* Top Bar navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={() => {
          setConsultationPrefill(undefined);
          setIsConsultationOpen(true);
        }}
      />

      <main className="flex-1">
        {/* 1. Hero with high-fidelity visual and metrics */}
        <Hero
          onScrollToEstimator={scrollToEstimator}
          onScrollToProjects={scrollToProjects}
        />

        {/* 2. Before / After Interactive Transformation */}
        <BeforeAfterSlider />

        {/* 3. Projects Gallery */}
        <ProjectsGallery onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Live Cost & Scope Estimator */}
        <Estimator onTransferToConsultation={handleTransferToConsultation} />

        {/* 5. Style Studio, Color Palettes & Tactile Material Explorer */}
        <StyleStudio />

        {/* 6. Signature Editions & Furnishing Catalog */}
        <BoutiqueCatalog onAddToCart={handleAddToCart} />

        {/* 7. 4-Step Architectural Methodology */}
        <ProcessSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-over Panels */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookConsultation={handleBookFromProject}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledData={consultationPrefill}
      />
    </div>
  );
}
