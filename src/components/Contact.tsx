import { useState } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the mailto link below still works
    }
  };

  return (
    <section id="contact" className="border-t border-line-soft px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" kicker="Get in touch" title="Contact" />

        <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-balance font-heading text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Have a project in mind, or just want to talk shop about the MERN stack?
            </h3>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              My inbox is open — whether it's a full-time role, freelance work, or a
              technical question. I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 rounded-sm border border-line p-3 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              </button>
            </div>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <Phone size={15} />
              {profile.phone}
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-md border border-line bg-bg-card px-6 py-5 transition-colors hover:border-accent/40"
            >
              <span className="flex items-center gap-3 font-mono text-sm text-ink">
                <FaGithub size={18} className="text-accent" />
                github.com/MuhammadHussain2004
              </span>
              <span className="text-faint transition-colors group-hover:text-accent">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-md border border-line bg-bg-card px-6 py-5 transition-colors hover:border-accent/40"
            >
              <span className="flex items-center gap-3 font-mono text-sm text-ink">
                <FaLinkedin size={18} className="text-accent" />
                LinkedIn
              </span>
              <span className="text-faint transition-colors group-hover:text-accent">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
