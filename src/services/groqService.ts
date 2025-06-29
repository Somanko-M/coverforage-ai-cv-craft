
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export interface CVGenerationRequest {
  resumeText: string;
  jobDescription: string;
}

export const generateTailoredCV = async ({ resumeText, jobDescription }: CVGenerationRequest): Promise<string> => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an expert CV/resume writer. Your task is to tailor an existing resume to match a specific job description. 

Guidelines:
- Keep the original person's experience and qualifications accurate
- Reorder and emphasize relevant skills and experiences 
- Optimize keywords from the job description for ATS compatibility
- Maintain professional formatting and structure
- Focus on achievements and quantifiable results
- Ensure the CV is tailored but truthful

Format the output as a clean, professional CV with proper sections and formatting.`
        },
        {
          role: "user",
          content: `Please tailor this resume to match the job description below:

ORIGINAL RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Please generate a tailored CV that emphasizes relevant experience and skills while maintaining accuracy and professionalism.`
        }
      ],
      model: "llama3-8b-8192",
      temperature: 0.3,
      max_tokens: 2048,
    });

    return completion.choices[0]?.message?.content || 'Error generating CV';
  } catch (error) {
    console.error('Groq API Error:', error);
    throw new Error('Failed to generate CV. Please try again.');
  }
};
