export function Section({
  title,
  children,
  id,
}: {
  title: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="relative py-10 md:py-14 js-reveal-section">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"/>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-2xl md:text-3xl font-extrabold tracking-tight text-center js-section-title">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
