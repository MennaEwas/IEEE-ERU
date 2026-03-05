interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4 fade-in-up">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 fade-in-delay-1">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
