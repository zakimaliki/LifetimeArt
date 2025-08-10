import { NextResponse } from 'next/server';

export async function GET() {
  // Example static data, replace with DB fetch if needed
  const services = [
    {
      title: 'Kitchens',
      icon: '/Kitchens Logo.png',
      image: '/Kitchen.png',
      desc: 'At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.'
    },
    {
      title: 'Loft Conversions',
      icon: '/Loft Conversions Logo.png',
      image: '/Loft Conversions.png',
      desc: 'Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.'
    },
    {
      title: 'Bathrooms',
      icon: '/Bathrooms Logo.png',
      image: '/Bathroom.png',
      desc: 'We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.'
    },
    {
      title: 'Extensions',
      icon: '/Extensions Logo.png',
      image: '/Extension.png',
      desc: 'Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.'
    },
    {
      title: 'Restorations',
      icon: '/Restorations Logo.png',
      image: '/Restoration.png',
      desc: 'Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.'
    },
    {
      title: 'External Works',
      icon: '/External Works Logo.png',
      image: '/External Works.png',
      desc: 'Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.'
    },
  ];
  return NextResponse.json(services);
}
