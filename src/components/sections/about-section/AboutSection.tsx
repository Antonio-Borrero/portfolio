import { STACK_LIST } from "@/src/data/projects";
import ProfileIdentity from "./components/ProfileIdentity";
import ProfileBio from "./components/ProfileBio";

export default function AboutSection() {
  const stack = STACK_LIST;

  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen items-center justify-between pt-28 pb-28"
    >
      {/* Tarjeta principal */}
      <div className="mx-auto max-w-[75%] rounded-2xl border-3 border-neutral-800 bg-linear-to-r from-[#171717] via-[#262626] to-[#171717] p-6 shadow-2xl backdrop-blur-sm">
        <article className="grid grid-cols-2 gap-10 rounded-2xl border-3 border-neutral-800/60 pb-6">
          <ProfileIdentity techStack={stack} />
          <ProfileBio />
        </article>
      </div>
    </section>
  );
}
