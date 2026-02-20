interface PageHeaderProps {
  title: string
  subtitle?: string
  background?: 'white' | 'blue'
}

export default function PageHeader({ title, subtitle, background = 'white' }: PageHeaderProps) {
  const bgClass = background === 'blue' 
    ? 'bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white' 
    : 'bg-gray-50 text-gray-900'

  return (
    <section className={`${bgClass} py-12 md:py-16`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
