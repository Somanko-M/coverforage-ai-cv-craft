import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { generateTailoredCV } from '@/services/groqService';
import { extractTextFromPDF } from '@/utils/pdfUtils';

const ToolSection = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [generatedCV, setGeneratedCV] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      toast.success('Resume uploaded successfully!');
    } else {
      toast.error('Please upload a PDF file.');
    }
  };

  const generateCV = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      toast.error('Please upload your resume and enter job description');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Extract text from PDF
      toast.info('Processing your resume...');
      const resumeText = await extractTextFromPDF(resumeFile);
      
      // Generate tailored CV using Groq
      toast.info('Generating your tailored CV...');
      const tailoredCV = await generateTailoredCV({
        resumeText,
        jobDescription
      });
      
      setGeneratedCV(tailoredCV);
      setShowPreview(true);
      setIsGenerating(false);
      toast.success('CV generated successfully!');
    } catch (error) {
      console.error('CV generation error:', error);
      setIsGenerating(false);
      toast.error(error instanceof Error ? error.message : 'Failed to generate CV. Please try again.');
    }
  };

  const watchAd = () => {
    // Simulate watching ad
    toast.info('Redirecting to ad... Please wait 30 seconds');
    setTimeout(() => {
      setIsUnlocked(true);
      toast.success('Ad completed! Your CV is now unlocked.');
    }, 2000);
  };

  const downloadCV = () => {
    const blob = new Blob([generatedCV], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailored-resume.txt';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('CV downloaded successfully!');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCV);
    toast.success('CV copied to clipboard!');
  };

  return (
    <section id="tool" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Try CoverForage Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your resume and paste a job description to see the magic happen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Resume Upload */}
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                1. Upload Your Resume (PDF)
              </h3>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <div className="text-4xl">📄</div>
                  <div className="text-foreground font-medium">
                    {resumeFile ? resumeFile.name : 'Click to upload PDF'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Maximum file size: 10MB
                  </div>
                </label>
              </div>
            </Card>

            {/* Job Description */}
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                2. Paste Job Description
              </h3>
              <Textarea
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[200px] bg-input border-border text-foreground"
              />
            </Card>
          </div>

          {/* Generate Button */}
          <div className="text-center mb-8">
            <Button
              onClick={generateCV}
              disabled={isGenerating || !resumeFile || !jobDescription.trim()}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white px-12 py-4 text-lg font-semibold glow-effect hover-lift"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating CV...
                </div>
              ) : (
                '3. Generate CV'
              )}
            </Button>
          </div>

          {/* Generated CV Preview */}
          {showPreview && (
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Generated CV Preview
                </h3>
                {!isUnlocked && (
                  <div className="flex items-center gap-2 text-sm text-amber-400">
                    <span>🔒</span>
                    <span>Locked</span>
                  </div>
                )}
              </div>
              
              <div className={`relative ${!isUnlocked ? 'blur-sm pointer-events-none' : ''}`}>
                <div className="bg-input p-4 rounded-lg border border-border max-h-64 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-mono">
                    {generatedCV}
                  </pre>
                </div>
              </div>

              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <div className="text-center p-6 bg-card rounded-lg border border-border max-w-md">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      Preview is Locked
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Preview is locked to protect AI output. Unlock via short ad to download or copy.
                    </p>
                    <Button
                      onClick={watchAd}
                      className="bg-gradient-primary hover:opacity-90 text-white glow-effect"
                    >
                      Watch 30s Ad to Unlock CV
                    </Button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <Button
                  onClick={downloadCV}
                  disabled={!isUnlocked}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  📥 Download CV
                </Button>
                <Button
                  onClick={copyToClipboard}
                  disabled={!isUnlocked}
                  variant="secondary"
                  className="flex-1"
                >
                  📋 Copy CV
                </Button>
              </div>
            </Card>
          )}

          {/* Ad Integration Notice */}
          <div className="text-center mt-8 p-4 bg-card rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-amber-400">⚠️</span> You'll need to watch a 30-second ad to access your final CV. 
              This keeps CoverForage free forever!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
