"use client";

import { useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaGithub,
  FaIdCard,
  FaLinkedin,
  FaRegEnvelope,
  FaTerminal,
} from "react-icons/fa";

const CARD_WRAPPER_STYLES =
  "pointer-events-auto relative flex flex-col items-center justify-center divide-y divide-neutral-600 overflow-hidden rounded-2xl border-2 border-neutral-800 bg-neutral-800/50 opacity-80 transition-all duration-500 ease-out group-hover/contact:scale-98 group-hover/contact:opacity-40 group-hover/contact:blur-[1px] hover:border-neutral-600 hover:opacity-100 hover:blur-none";

const ITEM_STYLES =
  "flex w-full items-center justify-start sm:justify-center gap-2 p-4 hover:bg-neutral-700/30 hover:text-neutral-300";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSsh, setCopiedSsh] = useState(false);

  const email = "antojoseabad@gmail.com";
  const sshCommand = "ssh antonio.borrero.dev";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopySsh = async () => {
    await navigator.clipboard.writeText(sshCommand);
    setCopiedSsh(true);
    setTimeout(() => setCopiedSsh(false), 2000);
  };

  return (
    <section
      className="min-h-[80vh] px-4 pt-32 pb-16"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <header className="mx-auto mb-8 flex max-w-7xl items-end justify-between border-b border-white/10 pb-8 md:mb-16">
        <div>
          <h2
            className="text-4xl font-light tracking-[0.2em] text-white uppercase"
            id="contact-heading"
          >
            Contacto
          </h2>
          <p className="mt-2 text-xs tracking-widest text-neutral-500 uppercase">
            Canales
          </p>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <div className="group/contact grid grid-cols-1 items-stretch justify-between gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Social media */}

          <section
            className={CARD_WRAPPER_STYLES}
            aria-labelledby="social-heading"
          >
            <h3 id="social-links" className="sr-only">
              Redes profesionales
            </h3>
            <a
              href="https://github.com/Antonio-Borrero"
              className={ITEM_STYLES}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de GitHub en una nueva pestaña"
            >
              <FaGithub
                className="text-2xl"
                aria-hidden="true"
                focusable="false"
              />
              Ir al perfil de GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-b-fullstack/"
              className={ITEM_STYLES}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de LinkedIn en una nueva pestaña"
            >
              <FaLinkedin
                className="text-2xl"
                aria-hidden="true"
                focusable="false"
              />
              Ir al perfil de LinkedIn
            </a>
          </section>

          {/* Email */}

          <section
            className={CARD_WRAPPER_STYLES}
            aria-labelledby="email-heading"
          >
            <h3 id="email-heading" className="sr-only">
              Correo electrónico
            </h3>
            <a
              href={`mailto:${email}`}
              className={ITEM_STYLES}
              rel="noopener noreferrer"
              aria-label="Abrir nueva pestaña de correo electrónico"
            >
              <FaRegEnvelope
                className="text-2xl"
                aria-hidden="true"
                focusable="false"
              />
              Enviar Email
            </a>
            <button
              className={`${ITEM_STYLES} cursor-pointer`}
              onClick={handleCopyEmail}
            >
              {copiedEmail ? (
                <>
                  <FaCheck
                    className="text-2xl"
                    aria-hidden="true"
                    focusable="false"
                  />
                  ¡Email copiado!
                </>
              ) : (
                <>
                  <FaCopy
                    className="text-2xl"
                    aria-hidden="true"
                    focusable="false"
                  />
                  Copiar dirección de Email
                </>
              )}
            </button>
          </section>

          {/* SSH / VCard */}

          <section
            className={`${CARD_WRAPPER_STYLES} sm:col-span-2 lg:col-span-1`}
            aria-labelledby="ssh-heading"
          >
            <h3 id="ssh-heading" className="sr-only">
              Información adicional de contacto
            </h3>
            <a
              href="/antonio-borrero.vcf"
              download="Antonio_Borrero_Contact.vcf"
              className={ITEM_STYLES}
            >
              <FaIdCard
                className="text-2xl"
                aria-hidden="true"
                focusable="false"
              />
              Guardar VCard
            </a>
            <button
              className={`${ITEM_STYLES} cursor-pointer`}
              onClick={handleCopySsh}
            >
              {copiedSsh ? (
                <>
                  <FaCheck
                    className="text-2xl"
                    aria-hidden="true"
                    focusable="false"
                  />
                  ¡Comando copiado!
                </>
              ) : (
                <>
                  <FaTerminal
                    className="text-2xl"
                    aria-hidden="true"
                    focusable="false"
                  />
                  Copiar comando SSH
                </>
              )}
            </button>
          </section>
        </div>

        {/* Disponibilidad */}

        <address className="grid grid-cols-1 gap-6 rounded-2xl border-2 border-neutral-800 bg-neutral-800/50 px-5 py-3 text-xs font-light tracking-wide text-neutral-400 uppercase not-italic sm:grid-cols-2 md:grid-cols-3">
          <div className="flex w-full flex-col gap-2 sm:items-center xl:flex-row xl:justify-center">
            <span className="font-medium">Disponibilidad:</span>
            <span className="text-neutral-300">15 días de preaviso</span>
          </div>
          <div className="flex w-full flex-col gap-2 sm:items-center xl:flex-row xl:justify-center">
            <span className="font-medium">Modalidad:</span>
            <span className="text-neutral-300">Remoto / Híbrido</span>
          </div>
          <div className="flex w-full flex-col gap-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-center md:col-span-1 md:flex-col md:text-center xl:flex-row xl:justify-center xl:text-left">
            <span className="font-medium">Ubicación:</span>
            <div className="flex flex-col">
              <span className="text-neutral-300">Santander, España </span>
              <span className="text-neutral-400">
                (Disponibilidad de traslado)
              </span>
            </div>
          </div>
        </address>
      </div>
    </section>
  );
}
