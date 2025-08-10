import { NextResponse } from 'next/server';

export async function GET() {
  const testimonials = [
    {
      text: "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "The craftsmanship was top-notch and the team was professional throughout. Highly recommend!",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "Excellent communication and attention to detail. The project was delivered on time and on budget.",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "Our kitchen renovation exceeded our expectations. The team was friendly and efficient.",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "We love our new bathroom! The process was smooth and the results are stunning.",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "Professional, reliable, and creative. Would definitely use their services again.",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "The best renovation experience we've had. Every detail was perfect.",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
    {
      text: "From start to finish, the team was amazing. The quality of work is outstanding.",
      name: "Emily Carter",
      img: "/Laura Davies.png"
    },
  ];
  return NextResponse.json(testimonials);
}
