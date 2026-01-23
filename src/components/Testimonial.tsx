import Card from "./Card";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  location?: string;
}

export default function Testimonial({
  name,
  role,
  content,
  location,
}: TestimonialProps) {
  return (
    <Card className="h-full">
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-blue-600 mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-4 italic">&ldquo;{content}&rdquo;</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
        {location && <p className="text-sm text-gray-500">{location}</p>}
      </div>
    </Card>
  );
}
