import { news } from "@/data/content";

export function NewsSection() {
  return (
    <section id="news" className="mb-16">
      <h2 className="text-2xl font-bold mb-6">News</h2>
      <div className="space-y-3">
        {news.map((item, index) => (
          <div key={index} className="flex space-x-4 text-sm">
            <span className="text-muted-foreground font-medium min-w-20">
              {item.date}
            </span>
            <span className="leading-relaxed">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}