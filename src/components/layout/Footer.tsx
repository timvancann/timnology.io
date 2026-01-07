import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-text-secondary text-sm">
              © {currentYear} Timnology. Free technical tutorials and resources.
            </p>
            <p className="text-text-tertiary text-xs mt-1">
              Created by{' '}
              <a
                href="https://timvancann.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Tim van Cann
              </a>
            </p>
            <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
              <Link
                href="/about"
                className="text-text-tertiary hover:text-accent transition-colors text-xs"
              >
                About
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/timvancann/timnology-youtube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Timnology on GitHub"
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Image src="/icons/github_light.svg" alt="" width={20} height={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://youtube.com/@Timnology-r4s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Timnology on YouTube"
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Image src="/icons/youtube.svg" alt="" width={20} height={20} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://linkedin.com/in/timvancann"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Tim van Cann on LinkedIn"
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Image src="/icons/linkedin.svg" alt="" width={20} height={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
