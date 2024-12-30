import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS values
      const userId = 'mcLPDDwANJF8cDT8E';
      const serviceId = 'innes-website-email';
      const templateId = 'innes-website-email';

      // Send email
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        userId
      );

      setIsSubmitted(true);
      alert('Your request has been submitted!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formClassName = 'flex flex-col items-start';

  return (
    <div className="container mx-auto px-4 py-8 text-center" id="consultation">
      <h2>Request a Consultation</h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div className={formClassName}>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className={formClassName}>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className={formClassName}>
            <label htmlFor="phone" className="block font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className={formClassName}>
            <label htmlFor="message" className="block font-semibold mb-2">
              What can I help you with?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Thank you!</h2>
          <p>I will be in touch soon via email.</p>
        </div>
      )}
    </div>
  );
};

export default Consultation;
