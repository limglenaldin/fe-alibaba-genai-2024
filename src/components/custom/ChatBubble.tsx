import ReactMarkdown from 'react-markdown';

interface ChatBubbleProps {
  message: string;
  side: string
}

export default function ChatBubble({ message, side }: ChatBubbleProps) {
  const bubbleColor = side === 'customer' ? 'bg-primary text-white' : side === 'driver' ? 'bg-secondary' : 'bg-sky-100'
  const bubblePosition = side === 'customer' ? 'justify-end' : side === 'driver' ? 'justify-start' : 'justify-center'
  return (
    <div className={`flex ${bubblePosition}`}>
      <div className={`${side !== 'system' ? 'w-2/4' : ''} rounded-lg px-4 py-2 ${bubbleColor}`}>
        { side === 'system'
          ? <ReactMarkdown>{message}</ReactMarkdown>
          : message
        }
      </div>
    </div>
  )
}