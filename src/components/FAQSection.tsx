
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How accurate is the AI?',
      answer: 'Our AI uses advanced language models to analyze job descriptions and match them with your skills. It has been trained on thousands of successful resumes and understands ATS requirements, ensuring high accuracy in keyword matching and formatting.'
    },
    {
      question: 'Is my data stored or shared?',
      answer: 'No, we prioritize your privacy. Your resume and personal information are processed temporarily to generate your CV and then immediately deleted. We never store, share, or sell your data to third parties.'
    },
    {
      question: 'How do the ads work?',
      answer: 'We show a brief 30-second advertisement before you can download your generated CV. This ad revenue allows us to keep CoverForage completely free for all users. No subscriptions, no hidden fees.'
    },
    {
      question: 'Can I edit the CV after generation?',
      answer: 'Yes! Once you download your CV, you can edit it in any text editor or word processor. We recommend making final adjustments to personalize it further before submitting your job application.'
    },
    {
      question: 'What file formats do you support?',
      answer: 'Currently, we accept PDF resumes for upload. The generated CV can be downloaded as a text file that you can easily copy into any document format or job application form.'
    },
    {
      question: 'Is CoverForage really free forever?',
      answer: 'Yes! Our ad-supported model ensures CoverForage remains free for all users. You can generate unlimited CVs and cover letters without any subscription fees or usage limits.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about CoverForage
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-gradient-card rounded-lg border border-border overflow-hidden"
            >
              <Button
                onClick={() => toggleFAQ(index)}
                variant="ghost"
                className="w-full p-6 text-left justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </Button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
