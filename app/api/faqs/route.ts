import { NextResponse } from 'next/server';

export async function GET() {
  const faqs = [
    {
      q: 'What area are you based in?',
      a: 'We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.'
    },
    {
      q: 'How long does a typical project take?',
      a: 'Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.'
    },
    {
      q: 'Do you offer free quotes?',
      a: 'Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.'
    },
    {
      q: 'Will I need planning permission for my project?',
      a: 'This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.'
    },
    {
      q: 'Do you provide a guarantee for your work?',
      a: 'Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.'
    },
    {
      q: 'Can I stay in my home while the work is being done?',
      a: 'In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.'
    },
    {
      q: 'How do I get started with a project?',
      a: 'Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.'
    },
  ];
  return NextResponse.json(faqs);
}
