'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import "@/app/hero-animations.css"
import * as React from "react"

export default function Component() {
  const heroImgRef = React.useRef<HTMLImageElement>(null)
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  const [services, setServices] = React.useState<any[]>([]);
  const [faqs, setFaqs] = React.useState<any[]>([]);
  const [testimonials, setTestimonials] = React.useState<any[]>([]);
  const [selected, setSelected] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const img = heroImgRef.current
      if (!img) return
      const rect = img.getBoundingClientRect()
      const windowH = window.innerHeight
      if (rect.top < windowH && rect.bottom > 0) {
        const percent = (windowH - rect.top) / (windowH + rect.height)
        img.style.transform = `scale(1.04) translateY(${percent * 16}px)`
      }
      const navbar = document.getElementById('main-navbar')
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.style.background = 'rgba(16,16,20,0.98)'
        } else {
          navbar.style.background = 'rgba(16,16,20,0.0)'
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(setServices);
    fetch('/api/faqs')
      .then(res => res.json())
      .then(setFaqs);
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(setTestimonials);
  }, []);

  return (
    <div className="min-h-screen bg-[#101014] text-white text-base sm:text-lg">
      <nav className="fixed top-0 w-full z-50 fade-in-top transition-colors duration-1000"
        style={{ background: 'rgba(16,16,20,0.0)' }}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 fade-in-top" style={{ animationDelay: '0.1s' }}>
              <button
                type="button"
                onClick={() => {
                  const hero = document.getElementById('hero');
                  if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                }}
                tabIndex={0}
                aria-label="Home logo"
                className="focus:outline-none bg-transparent border-0 p-0 m-0 cursor-pointer flex items-center gap-2"
              >
                <img src="/Logo.png" alt="LifetimeArt Logo" className="w-8 h-8 sm:w-10 sm:h-10 inline-block align-middle" />
                <span className="text-2xl sm:text-3xl font-light align-middle">LifetimeArt</span>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 fade-in-top" style={{ animationDelay: '0.2s' }}>
              <a href="#about" className="text-white hover:text-[#e9ecf2] underline-anim font-medium">About</a>
              <a href="#services" className="text-white hover:text-[#e9ecf2] underline-anim font-medium">Services</a>
              <a href="#our-work" className="text-white hover:text-[#e9ecf2] underline-anim font-medium">Our work</a>
              <a href="#testimonials" className="text-white hover:text-[#e9ecf2] underline-anim font-medium">Testimonials</a>
              <a href="#faqs" className="text-white hover:text-[#e9ecf2] underline-anim font-medium">FAQs</a>
              <a href="#contact" className="text-white hover:text-[#e9ecf2] underline-anim font-medium">Contact</a>
            </div>
            <button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white relative group"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((v) => !v)}
              style={{ animationDelay: '0.5s' }}
            >
              <span
                className={`block absolute left-2 right-2 h-0.5 bg-white rounded transition-all duration-500 ${mobileNavOpen ? 'rotate-45 top-5' : 'top-3'}`}
              ></span>
              <span
                className={`block absolute left-2 right-2 h-0.5 bg-white rounded transition-all duration-500 ${mobileNavOpen ? 'opacity-0' : 'top-5'}`}
              ></span>
              <span
                className={`block absolute left-2 right-2 h-0.5 bg-white rounded transition-all duration-500 ${mobileNavOpen ? '-rotate-45 top-5' : 'top-7'}`}
              ></span>
              <span className="sr-only">{mobileNavOpen ? 'Close' : 'Open'} menu</span>
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 bg-[#101014] text-white relative overflow-hidden">
        {/* Mobile: background image with overlay and content on top */}
        <div className="lg:hidden relative w-full min-h-[520px] flex items-end justify-center">
          <Image
            src="/hero-image-1280.png"
            alt="Hero"
            fill
            priority
            className="object-cover w-full h-full absolute top-0 left-0 z-0 mobile-hero-fade"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="relative z-10 w-full flex flex-col items-center px-6 pb-10 pt-20">
            <span className="inline-flex items-center gap-2 bg-[#23232a]/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow pop-in mb-4">
              <span className="inline-block w-2 h-2 bg-[#bfc2c9] rounded-full"></span>
              Available for work
            </span>
            <h1 className="text-3xl font-extrabold mb-4 leading-tight text-center" style={{ textShadow: '0 2px 8px #0008' }}>
              Your trusted partner<br />for quality home<br />improvement
            </h1>
            <p className="text-base text-[#e9ecf2] mb-6 leading-relaxed text-center max-w-md" style={{ textShadow: '0 2px 8px #0008' }}>
              LifetimeArt delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
            </p>
            <Button size="lg" className="bg-[#23232a]/90 text-white hover:bg-[#23232a] btn-lift font-semibold px-8 py-4 text-lg shadow-lg flex items-center gap-2">
              Work with us <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        {/* Desktop: image and card on the right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="text-left">
              <span className="inline-flex items-center gap-2 bg-[#23232a] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow pop-in mb-4 sm:mb-6" style={{ animationDelay: '0.3s' }}>
                <span className="inline-block w-2 h-2 bg-[#bfc2c9] rounded-full"></span>
                Available for work
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight fade-in" style={{ animationDelay: '0.4s' }}>
                Your trusted partner<br />for quality home<br />improvement
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-[#bfc2c9] mb-6 sm:mb-10 leading-relaxed fade-in max-w-xl" style={{ animationDelay: '0.5s' }}>
                LifetimeArt delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
              </p>
              <div className="flex gap-3 sm:gap-4 fade-in" style={{ animationDelay: '0.6s' }}>
                <Button size="lg" className="bg-[#23232a] text-white hover:bg-[#23232a]/80 btn-lift font-semibold px-8 py-4 text-lg shadow-lg flex items-center gap-2">
                  Work with us <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <Image
                ref={heroImgRef}
                src="/hero-image.png"
                alt="Hero"
                width={480}
                height={600}
                className="rounded-2xl object-cover fade-in-scale parallax shadow-2xl border-4 border-white/10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
                style={{ animationDelay: '0.7s' }}
                priority
              />
              <Card className="absolute bottom-8 right-8 w-80 bg-[#101014]/30 text-white shadow-2xl slide-in-br rounded-xl border-0 backdrop-blur-sm" style={{ animationDelay: '0.9s' }}>
                <CardContent className="p-5">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-base mb-3 font-medium">"LifetimeArt has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#fafafa] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center py-10 sm:py-25">
            <div>
              <Badge className="mb-3 sm:mb-4 bg-[#23232a] text-white text-sm sm:text-base">About us</Badge>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#23232a] mb-4 sm:mb-6 leading-tight">Home<br />Improvement<br />Specialists</h2>
            </div>
            <div>
              <p className="text-sm sm:text-md text-[#3d3d47] mb-6 sm:mb-10 leading-relaxed">
                Welcome to LifetimeArt, your trusted home improvement experts, dedicated to transforming homes with precision and care. With years of experience in building kitchens, bathrooms, garages, and more, we take pride in delivering top-quality craftsmanship and a seamless customer experience. Our mission is to bring your vision to life while ensuring clear communication and expert guidance at every step. Let’s create a home you’ll love!
              </p>
            </div>
          </div>
          <ImageTicker />
          <StatsRow />
        </div>
      </section>

      <section id="services" className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <Badge className="mb-3 sm:mb-4 bg-[#23232a] text-white text-sm sm:text-base">Services</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#23232a] mb-2 sm:mb-4">What we do</h2>
            <p className="text-[#3d3d47] text-sm sm:text-base">Find out which one of our services fit the needs of your project</p>
          </div>
          <div className="flex flex-col gap-8 items-center md:grid md:grid-cols-2 md:gap-12 md:items-start">
            <div className="w-full flex justify-center md:justify-end">
              {services.length > 0 && (
                <img
                  src={services[selected === -1 ? 0 : selected]?.image}
                  alt="Service Preview"
                  className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto md:h-[340px] lg:h-[420px] xl:h-[500px] shadow-lg border border-[#ececec] bg-white"
                  style={{ aspectRatio: '4/3', minHeight: 180 }}
                />
              )}
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-4">
                {services.map((service, idx) => {
                  const open = selected === idx;
                  return (
                    <div
                      key={service.title}
                      className={`rounded-xl bg-white shadow transition-all duration-300 border border-[#ececec] ${open ? 'ring-2 ring-[#23232a] scale-[1.01]' : ''}`}
                    >
                      <button
                        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none text-[#101014] text-lg font-medium rounded-xl"
                        onClick={() => setSelected(open ? -1 : idx)}
                        aria-expanded={open}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl"><img src={service.icon} alt={service.title + ' Logo'} className="w-7 h-7 object-contain inline-block" /></span>
                          <span>{service.title}</span>
                        </div>
                        <span className="text-2xl font-bold transition-transform duration-200">
                          {open ? '×' : '+'}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 px-6 ${open ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                        aria-hidden={!open}
                      >
                        <p className="text-[#3d3d47] text-base leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-work" className="py-14 sm:py-20 bg-[#ffffff] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-[#23232a] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">Our work</span>
            <h2 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4 text-[#101014] leading-tight sm:leading-tight">Get inspired by our work</h2>
            <p className="text-[#101014] text-xs sm:text-base max-w-2xl mx-auto">See how we’ve transformed homes with our expert craftsmanship and attention to detail.</p>
          </div>

          {/* Mobile carousel */}
          <div className="sm:hidden relative overflow-hidden">
            <OurWorkCarousel />
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:block">
            <div className="space-y-10 sm:space-y-16">
              <div className="bg-[#e9ecf2] text-[#101014] rounded-2xl mb-20 sm:mb-40 shadow-lg flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 flex items-center justify-center p-4 sm:p-6">
                  <img src="/Modern kitchen refit.png" alt="Modern kitchen refit" className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 p-4 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-2">Modern kitchen refit</h3>
                  <p className="mb-2 sm:mb-4 text-xs sm:text-xl">This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.</p>
                  <div className="flex gap-2 mb-2 sm:mb-4">
                    <span className="bg-[#23232a] text-white text-xs px-3 py-1 rounded-full">Kitchen</span>
                    <span className="bg-[#23232a] text-white text-xs px-3 py-1 rounded-full">Wooden</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-4">
                    <span className="text-2xl">“</span>
                    <div>
                      <p className="mb-2 text-xs sm:text-base font-medium sm:text-xl">LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!</p>
                      <div className="flex items-center gap-2 mt-2">
                        <img src="/Rachel Morgan.png" alt="Rachel Morgan" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm font-semibold">Rachel Morgan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#23232a] text-white rounded-2xl my-20 sm:my-40 shadow-lg flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 flex items-center justify-center p-4 sm:p-6">
                  <img src="/External garden path build.png" alt="External garden path build" className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 p-4 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-2">External garden path build</h3>
                  <p className="mb-2 sm:mb-4 text-xs sm:text-xl">Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.</p>
                  <div className="flex gap-2 mb-2 sm:mb-4">
                    <span className="bg-[#101014] text-white text-xs px-3 py-1 rounded-full">External Works</span>
                    <span className="bg-[#101014] text-white text-xs px-3 py-1 rounded-full">Walkway</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-4">
                    <span className="text-2xl">“</span>
                    <div>
                      <p className="mb-2 text-xs sm:text-base font-medium sm:text-xl">The team at LifetimeArt did an amazing job on our garden path. It's sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted - highly recommended!</p>
                      <div className="flex items-center gap-2 mt-2">
                        <img src="/Michael Turner.png" alt="Michael Turner" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm font-semibold">Michael Turner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#e9ecf2] text-[#101014] rounded-2xl my-20 sm:my-40 shadow-lg flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 flex items-center justify-center p-4 sm:p-6">
                  <img src="/Bathroom renovation.png" alt="Bathroom renovation" className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 p-4 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-2">Bathroom renovation</h3>
                  <p className="mb-2 sm:mb-4 text-xs sm:text-xl">We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.</p>
                  <div className="flex gap-2 mb-2 sm:mb-4">
                    <span className="bg-[#23232a] text-white text-xs px-3 py-1 rounded-full">Kitchen</span>
                    <span className="bg-[#23232a] text-white text-xs px-3 py-1 rounded-full">Wooden</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-4">
                    <span className="text-2xl">“</span>
                    <div>
                      <p className="mb-2 text-xs sm:text-base font-medium sm:text-xl">LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!</p>
                      <div className="flex items-center gap-2 mt-2">
                        <img src="/Laura Davies.png" alt="Laura Davies" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm font-semibold">Laura Davies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#fafafa]" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-[#23232a] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">Testimonials</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#101014] mb-2 sm:mb-4">Hear from our clients</h2>
            <p className="text-[#3d3d47] text-sm sm:text-base max-w-2xl mx-auto">Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.</p>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>


      <section id="faqs" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8 sm:gap-16 items-start">
          <div className="md:w-1/3 mb-8 sm:mb-10 md:mb-0">
            <span className="inline-block bg-[#23232a] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">FAQs</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#101014] mb-4 sm:mb-6 leading-tight">Answering Your<br />Questions</h2>
            <p className="text-[#3d3d47] mb-6 sm:mb-8 text-sm sm:text-base">Got more questions? Send us your enquiry below</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#f4f4f4] text-[#101014] font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-[#ececec] transition text-sm sm:text-base">
              Get in touch
              <span className="inline-flex items-center justify-center w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#101014] text-white ml-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M5 13l6-6M11 13V7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </div>
          <div className="md:w-2/3 w-full">
            <FAQsAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 sm:py-20 bg-[#101014] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-[#d0d1db] text-base sm:text-lg mb-6 sm:mb-8">
                For any inquiries or to explore your vision further, we invite  you to contact our professional team using the details provided below.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-[#d0d1db]">150 Old Park Ln, London W1K 1QZ</div>

                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-[#d0d1db]">hello@refit.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Telephone</div>
                    <div className="text-[#d0d1db]">+07716 534984</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">Follow us</div>
                    <div className="flex flex-row gap-4 mt-2">
                      <img src="/Instagram.png" alt="Instagram" className="w-7 h-7 object-contain" />
                      <img src="/Tiktok.png" alt="Tiktok" className="w-7 h-7 object-contain" />
                      <img src="/Twitter png.png" alt="Twitter" className="w-7 h-7 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-5 sm:p-8">
              <h3 className="text-lg sm:text-2xl font-bold text-[#101014] mb-4 sm:mb-6">Send us a message</h3>
              <form className="space-y-4 sm:space-y-6" autoComplete="off">
                <div>
                  <label className="block text-sm font-medium text-[#3d3d47] mb-2">Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#e6e6e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006ae6] bg-[#fafafa] text-[#101014] placeholder-[#bdbdbd]"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d3d47] mb-2">Email<span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-[#e6e6e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006ae6] bg-[#fafafa] text-[#101014] placeholder-[#bdbdbd]"
                    placeholder="johnsmith@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d3d47] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#e6e6e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006ae6] bg-[#fafafa] text-[#101014] placeholder-[#bdbdbd]"
                    placeholder="+44789 123456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d3d47] mb-2">Message<span className="text-red-500">*</span></label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e6e6e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006ae6] bg-[#fafafa] text-[#101014] placeholder-[#bdbdbd]"
                    placeholder="Hello, I'd like to enquire about..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#3d3d47] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#23232a] transition">Send message</button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#18181b] text-white pt-10 sm:pt-16 pb-6 sm:pb-8 rounded-b-2xl text-sm sm:text-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 sm:gap-12 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-0">
              <img src="/Logo.png" alt="LifetimeArt Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-light">LifetimeArt</span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-normal mb-3 sm:mb-4">Quick links</div>
              <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2 text-[#d0d1db]">
                <a href="#about" className="hover:text-white">About us</a>
                <a href="#testimonials" className="hover:text-white">Testimonials</a>
                <a href="#our-work" className="hover:text-white">Our work</a>
                <a href="#faqs" className="hover:text-white">FAQs</a>
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
            </div>
          </div>
          <hr className="border-[#23232a] mb-4 sm:mb-6" />
          <div className="text-[#d0d1db] text-xs sm:text-base pl-2">© 2025 LifetimeArt. All rights reserved.</div>
        </div>
      </footer>

      {mobileNavOpen && (
        <div className="fixed inset-0 z-[100] bg-[#101014]/90 backdrop-blur-sm flex flex-col transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between px-6 py-6">
            <img src="/Logo.png" alt="LifetimeArt Logo" className="h-9 w-auto" />
            <button
              className="w-10 h-10 flex items-center justify-center text-white"
              aria-label="Close menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7" y1="7" x2="21" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="7" x2="7" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-10 mt-8">
            <a href="#about" className="text-white text-xl font-normal" onClick={() => setMobileNavOpen(false)}>About us</a>
            <a href="#our-work" className="text-white text-xl font-normal" onClick={() => setMobileNavOpen(false)}>Our work</a>
            <a href="#services" className="text-white text-xl font-normal" onClick={() => setMobileNavOpen(false)}>Services</a>
            <a href="#testimonials" className="text-white text-xl font-normal" onClick={() => setMobileNavOpen(false)}>Testimonials</a>
            <a href="#faqs" className="text-white text-xl font-normal" onClick={() => setMobileNavOpen(false)}>FAQs</a>
            <a href="#contact" className="text-white text-xl font-normal" onClick={() => setMobileNavOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}

const ImageTicker = () => {
  const images = [
    '/Ticker Image 1.png',
    '/Ticker Image 2.png',
    '/Ticker Image 3.png',
    '/Ticker Image 4.png',
    '/Ticker Image 5.png',
  ];
  const [inView, setInView] = React.useState(false);
  const tickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (tickerRef.current) observer.observe(tickerRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    const ticker = tickerRef.current;
    let anim: number;
    let start: number | null = null;
    let pos = 0;
    const totalWidth = images.length * 400;
    function step(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      pos = (elapsed / 40) % totalWidth;
      if (ticker) ticker.scrollLeft = pos;
      anim = requestAnimationFrame(step);
    }
    anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, [inView, images.length]);

  const displayImages = [...images, ...images, images[0]];

  return (
    <div ref={tickerRef} className="overflow-x-hidden w-full mb-12 relative">
      <div className="flex gap-8 ticker-track" style={{ minWidth: `${(images.length * 2 + 1) * 208}px` }}>
        {displayImages.map((src, i) => (
          <div
            key={src + '-' + i}
            className={`rounded-xl shadow fade-ticker-img`}
            style={{
              minWidth: 200,
              minHeight: 250,
              maxWidth: 200,
              maxHeight: 250,
              marginRight: i === displayImages.length - 1 ? 0 : 32, // 8*4px gap except last
              opacity: inView ? 1 : 0,
              animation: inView && i < images.length ? `fadeInTicker 0.3s ${0.2 + i * 0.08}s cubic-bezier(0.4,0,0.2,1) forwards` : 'none',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fff',
            }}
          >
            <Image src={src} alt={`Project ${i % images.length + 1}`} width={200} height={250} className="object-cover w-full h-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsRow = () => {
  const stats = [
    { value: '8', label: 'Years experience', desc: 'Improving homes with expert craftsmanship for years' },
    { value: '26', label: 'Projects completed', desc: 'Over 250 successful projects delivered with quality and care' },
    { value: '30', label: 'Skilled Tradespeople', desc: 'Our team of 30 experts ensures top-quality results' },
    { value: '100%', label: 'Client satisfaction', desc: 'All of our clients are satisfied with our work and service' },
  ];
  const [inView, setInView] = React.useState(false);
  const statsRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={statsRef} className="grid md:grid-cols-4 gap-8 text-center">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="fade-in-stat"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transition: `opacity 0.3s ${0.2 + i * 0.1}s cubic-bezier(0.4,0,0.2,1), transform 0.3s ${0.2 + i * 0.1}s cubic-bezier(0.4,0,0.2,1)`
          }}
        >
          <div className="text-4xl font-bold text-[#101014] mb-2">{s.value}</div>
          <div className="font-semibold text-[#101014]">{s.label}</div>
          <div className="text-[#3d3d47] text-sm mt-1">{s.desc}</div>
        </div>
      ))}
    </div>
  );
};

function ServiceImage({ image }: { image: string }) {
  return (
    <img
      src={image}
      alt="Service Preview"
      className="rounded-xl object-cover w-[600px] h-[580px] shadow-lg border border-[#ececec] bg-white"
      style={{ maxWidth: 680, maxHeight: 777 }}
    />
  );
}

function TestimonialsCarousel({ testimonials }: { testimonials: { text: string, name: string, img: string }[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setActiveIndex((current) =>
        current === 0 ? testimonials.length - 1 : current - 1
      );
    }
  };

  // Auto-scroll for desktop
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="space-y-8">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial, idx) => (
          <Card key={idx} className="bg-white shadow-lg transform transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#3d3d47] mb-4 line-clamp-4">{testimonial.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-medium text-[#23232a]">{testimonial.name}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile View */}
      <div
        className="md:hidden relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-4">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[#3d3d47] mb-4">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-medium text-[#23232a]">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${idx === activeIndex ? 'bg-[#23232a]' : 'bg-[#e5e5e5]'
                }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQsAccordion({ faqs }: { faqs: { q: string, a: string }[] }) {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((item, idx) => {
        const open = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl bg-white shadow transition-all duration-300 ${open ? 'ring-2 ring-[#23232a] scale-[1.01]' : ''}`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none text-[#101014] text-lg font-medium rounded-xl"
              onClick={() => setOpenIdx(open ? -1 : idx)}
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <span className="text-2xl font-bold transition-transform duration-200">
                {open ? '×' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-6 ${open ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              aria-hidden={!open}
            >
              <p className="text-[#3d3d47] text-base leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OurWorkCarousel() {
  const works = [
    {
      image: "/Modern kitchen refit.png",
      title: "Modern kitchen refit",
      desc: "This kitchen transformation brought sleek, modern design and enhanced functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
      tags: ["Kitchen", "Wooden"],
      testimonial: {
        text: "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
        name: "Rachel Morgan",
        img: "/Rachel Morgan.png"
      }
    },
    {
      image: "/External garden path build.png",
      title: "External garden path build",
      desc: "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
      tags: ["External Works", "Walkway"],
      testimonial: {
        text: "The team at LifetimeArt did an amazing job on our garden path. It's sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted - highly recommended!",
        name: "Michael Turner",
        img: "/Michael Turner.png"
      }
    },
    {
      image: "/Bathroom renovation.png",
      title: "Bathroom renovation",
      desc: "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
      tags: ["Kitchen", "Wooden"],
      testimonial: {
        text: "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
        name: "Laura Davies",
        img: "/Laura Davies.png"
      }
    }
  ];
  const [active, setActive] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) setActive((a) => (a + 1) % works.length);
    if (touchStart - touchEnd < -50) setActive((a) => (a - 1 + works.length) % works.length);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {works.map((work, idx) => (
          <div key={idx} className="w-full flex-shrink-0 px-2">
            <div className={`rounded-2xl shadow-lg bg-white text-[#101014] flex flex-col overflow-hidden`}>
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                <p className="text-xs mb-2">{work.desc}</p>
                <div className="flex gap-2 mb-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="bg-[#23232a] text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <span className="text-2xl">“</span>
                  <div>
                    <p className="mb-2 text-xs font-medium">{work.testimonial.text}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <img src={work.testimonial.img} alt={work.testimonial.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-semibold">{work.testimonial.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {works.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${idx === active ? 'bg-[#23232a]' : 'bg-[#e5e5e5]'}`}
            onClick={() => setActive(idx)}
            aria-label={`Go to work ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
