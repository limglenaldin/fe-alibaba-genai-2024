interface LoadingProps {
  message?: string
}

export default function Loading({ message = "Memuat halaman" }: LoadingProps) {
  return (
    <div className="container px-6 py-10 my-auto">
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg animate-pulse"> { message } </p>
      </div>
    </div>
  )
}