import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-bold text-text-primary">Timnology</span>
          </Link>

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
    </header>
  );
}
