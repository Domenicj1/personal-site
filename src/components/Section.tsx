export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-10 border-t border-border">
      <h2 className="mb-6 font-serif text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
