import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Timnology',
  description: 'Learn more about Timnology and Tim van Cann',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-20">
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About Timnology</h1>
          <p className="text-xl text-text-secondary">
            Byte-sized technical tutorials for developers
          </p>
        </header>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            Timnology is a platform dedicated to providing in-depth, practical technical tutorials
            for software developers. Each tutorial is broken down into digestible chapters,
            making complex topics easier to learn and understand.
          </p>

          <p>
            Whether you're learning Python, diving into Kubernetes, or exploring other technologies,
            Timnology offers step-by-step guides with real-world examples and best practices.
          </p>

          <div className="border-l-4 border-accent pl-6 py-4 bg-surface rounded-r-lg">
            <p className="text-text-primary font-medium mb-2">Created by Tim van Cann</p>
            <p className="text-sm">
              Software engineer with a passion for teaching and sharing knowledge.
              Connect with me on{' '}
              <a
                href="https://linkedin.com/in/timvancann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                LinkedIn
              </a>{' '}
              or check out my{' '}
              <a
                href="https://timvancann.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                personal website
              </a>.
            </p>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Get in Touch</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/timvancann/timnology-youtube"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Timnology on GitHub"
                className="flex items-center gap-2 cursor-pointer text-text-secondary hover:text-accent transition-colors"
              >
                <Image src="/icons/github_light.svg" alt="" width={24} height={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://youtube.com/@Timnology-r4s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Timnology on YouTube"
                className="flex items-center gap-2 cursor-pointer text-text-secondary hover:text-accent transition-colors"
              >
                <Image src="/icons/youtube.svg" alt="" width={24} height={24} />
                <span>YouTube</span>
              </a>
              <a
                href="https://linkedin.com/in/timvancann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Tim van Cann on LinkedIn"
                className="flex items-center gap-2 cursor-pointer text-text-secondary hover:text-accent transition-colors"
              >
                <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-accent hover:underline"
            >
              ← Back to tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
